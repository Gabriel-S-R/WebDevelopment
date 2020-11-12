import { createStore } from "vuex";

interface RootState {
  user: {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    phone: string | null;
    address: string | null;
    is_admin: boolean;
  }
  produtos: {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: number;
    stock: number;
    sold: number;
  }[]
  carrinho: {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: number;
    stock: number;
    sold: number;
    quantity: number;
  }[]
}

export default createStore({
  state(): RootState {
    return {
      user: {
        id: null,
        name: null,
        email: null,
        password: null,
        phone: null,
        address: null,
        is_admin: false
      },
      produtos: [],
      carrinho: []
    }
  },
  mutations: {
    signin(state: RootState, payload) {
      state.user.id = payload.id
      state.user.name = payload.name
      state.user.email = payload.email
      state.user.password = payload.password
      state.user.phone = payload.phone
      state.user.address = payload.address
      state.user.is_admin = payload.is_admin
    },
    signout(state: RootState) {
      state.user.id = null
      state.user.name = null
      state.user.email = null
      state.user.password = null
      state.user.phone = null
      state.user.address = null
      state.user.is_admin = false
    },
    pushProdutos(state, payload) {
      for (var item of payload) {
        item.price = item.price.toFixed(2)
      }
      state.produtos.push(...payload);  
    },
    clearProdutos(state) {
      state.produtos = [];
    },
    addToCart(state, payload) {
      for (var i = 0; i < state.carrinho.length; i++) {
        if (state.carrinho[i].id === payload.id) {
          return state.carrinho[i].quantity++;
        }
      }
      payload.quantity = 1;
      state.carrinho.push(payload);
    },
    updateQuantity(state, payload) {
      for (var i = 0; i < state.carrinho.length; i++) {
        if(state.carrinho[i].id === payload.id) {
          state.carrinho[i].quantity = payload.value;
          return
        }
      }
    }
  },
  getters: {
    cartTotalSum: state => {
      var sum = 0;
      for (var i = 0; i < state.carrinho.length; i++) {
        sum += state.carrinho[i].price * state.carrinho[i].quantity;
      }
      return sum.toFixed(2);
    }
  },
  actions: {},
  modules: {}
});
