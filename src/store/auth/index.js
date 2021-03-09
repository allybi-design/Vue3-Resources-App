const auth = {
  state: {
    isAuth: true,
  },
  mutations: {
    SET_AUTH(state, payload) {
      state.isAuth = payload.auth;
    },
  },
  actions: {
    signIn({ commit }) {
      commit("SET_AUTH", { auth: true });
    },
    signOut({ commit }) {
      commit("SET_AUTH", { auth: false });
    },
  },
  getters: {
    getIsUserAuth(state) {
      return state.isAuth;
    },
  },
};

export default auth