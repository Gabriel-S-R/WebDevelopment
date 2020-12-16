const express = require("express");
const cors = require("cors");
const app = express();

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:admin@cluster0.fvhfq.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  returnNonCachedInstance: true
});

async function searchOneUser(email, password) {
  try {
    await client.connect();
    const collection = client.db("web").collection("users");
    const query = { email, password };
    const user = await collection.findOne(query);
    return user;
  } finally {
    await client.close();
  }
}

async function searchAllUsers() {
  try {
    await client.connect();
    const collection = client.db("web").collection("users");
    const users = await collection.find().toArray();
    return users;
  } finally {
    await client.close();
  }
}

async function createUser(user) {
  try {
    await client.connect();
    const collection = client.db("web").collection("users");
    await collection.insertOne(user);
  } finally {
    await client.close();
  }
}

async function getSingleProduct(id) {
  try {
    await client.connect();
    const collection = client.db("web").collection("produtos");
    const ID = parseInt(id);
    const produto = await collection.findOne({ id: ID });
    return produto;
  } finally {
    await client.close();
  }
}

async function getAllProducts() {
  try {
    await client.connect();
    const collection = client.db("web").collection("produtos");
    const produtos = await collection.find().toArray();
    return produtos;
  } finally {
    await client.close();
  }
}

async function sellProduto(id, sold, stock) {
  try {
    await client.connect();
    const collection = client.db("web").collection("produtos");
    const ID = parseInt(id);
    collection.updateOne({ id: ID }, { $set: { sold, stock } });
  } finally {
    await client.close();
  }
}

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/user", async (req, res) => {
  const { email, password } = req.body;
  const user = await searchOneUser(email, password);
  if (!user) {
    res.status(401).send({ message: "E-mail ou senha incorretos" });
  }
  res.status(200).send(user);
});

app.get("/users", async (req, res) => {
  const users = await searchAllUsers();
  res.status(200).send(users);
});

app.post("/signUp", async (req, res) => {
  const { user } = req.body;
  await createUser(user);
  res.status(200).send({ message: "Usuário criado com sucesso" });
});

app.get("/produtos", async (req, res) => {
  const produtos = await getAllProducts();
  res.status(200).send(produtos);
});

app.get("/produto/:id", async (req, res) => {
  const produto = await getSingleProduct(req.params.id);
  res.status(200).send(produto);
});

app.patch("/sellProduto/:id", async (req, res) => {
  await sellProduto(req.params.id, req.body.sold, req.body.stock);
  res.status(200).send({ message: "Produto vendido com sucesso" });
});

app.listen(3000).on("listening", () => {
  console.log("Server live on port 3000");
});
