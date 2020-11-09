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
      }
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
    }
  },
  actions: {},
  modules: {}
});
