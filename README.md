# Projeto da Disciplina SSC0219 - Introdução ao Desenvolvimento Web
<h3 align="center">
    Loja de venda especializada em produtos eletrônicos
</h3>

<h6 align="center">
   Repositório para o desenvolvimento do trabalho da disciplina SSC0219
</h6>

### Membros:

[Gabriel Santos Ribeiro](https://github.com/Gabriel-S-R) - 9771380
<br>
[Gabriel Ribeiro Evangelista](https://github.com/Bielevan) - 9771334

### Relatório

<h5 align="center">
  Requisitos do sistema
</h5>
<ul>
   <li>
    The system must have 2 types of users: Clients and Administrators:
    <ul>
       <li>Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.</li>
      <li>Customers are users who access the system to buy products/services.</li>
    </ul>
   </li>
   <li>The admin record includes, at least: name, id, phone, email.</li>
   <li>Each customer's record includes, at least: name, id, address, phone, email.</li>
   <li>Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.</li>
   <li>You store may sell products, services or both (you decide)</li>
   <li>Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.</li>
   <li>The system must provide accessibility requirements and provide a good usability. The system must be responsive.</li>
</ul>

<h6 align="center">
  Descrição do Projeto
</h6>
  <p>
    &emsp;Nos projetos propostos em aula, optamos por desenvolver um site e-commerce, uma loja de varejo especializada nas vendas de produtos eletrônicos e eletrodomésticos em gerais, chamado BES (Best Eletronics Store). Adotamos como objetivo a criação de uma loja de varejo que seja especialista na venda de produtos eletrônicos, de forma fácil e prática, agilizando o processo de obtenção e pagamentos dos produtos ofertados, sempre visualizando e aproximando os critérios desejados para o projeto com os requisitos necessários que devem conter na implementação.<br>
    &emsp;Os produtos serão mostrados de acordo com os critérios de buscas determinado pelo cliente, buscando ao máximo apróximar o resultados com o objetivo de busca do cliente, como exemplo: buscar pelo celulares mais baratos, buscar pelos notebooks mais novos, buscar pelos ar-condicionados mais relevantes, etc.<br>
    &emsp;É possível ver abaixo detelhes das telas iniciais do site. Ainda não representam a arquitetura final do projeto, mais já possuem muitas das características visuais como cores, posicionamentos, itens vendidos pelo e-commerce, modelos de login e cadastro, etc.<br>
    &emsp;Serão armazenados na base de dados os cadastros dos usuários, tanto clientes quanto administradores, os produtos com suas devidas características, como preço, estoque e descrição e, um histórico dos itens adquiridos por determinado cliente além de itens visitados no passado.
  </p>

<h6 align="center">
  Comentários sobre o código
</h6>

<p>&emsp;Algumas partes do códgo foram comentadas mas a maior parte será comentada para a entrega final, estando ainda sem comentários.</p>

<h6 align="center">
  Plano de testes
</h6>

<h6 align="center">
  Resultados dos testes
</h6>

<h6 align="center">
  Instruções de compilação
</h6>

<p>&emsp;Foi utilizado da biblioteca <strong>json-server</strong> para a criação de uma <em>Fake API</em> com o arquivo <em>db.json</em> que contém os dados da nossa API.</p>
<p>&emsp;Para executar o servidor do json-server executamos na raiz do projeto:</p>

```
npx json-server --watch db.json
```

<p>&emsp;Com isso temos nossa Fake API rodando na porta 3000 (porta padrão) do json-server</p
<p>&emsp;Após isso podemos executar a página em um servidor HTTP, a página já possui uma versão de produção pronta no diretório dist então para abrirmos executamos na raiz do projeto:</p>

```
npx serve -s dist
```

<p>Com isso o servidor HTTP estará aberto, a porta será especificada no terminal mas também pode ser especificada pelo usuário através do argumento -p, basta então abrir a página com localhost:porta em qualquer navegador.</p>
<h6 align="center">
  Problemas
</h6>

<h6 align="center">
  Comentários
</h6>
