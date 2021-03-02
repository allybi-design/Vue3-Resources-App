const auth = {
  state: {
    items: [],
    total: 0,
    qty: 0,
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const index = state.items.findIndex((item) => item.id === payload.id);

      if (index >= 0) {
        state.items[index].qty++;
      } else {
        state.items.push({
          id: payload.id,
          price: payload.price,
          qty: payload.qty,
        });
      }
      state.qty++;
      state.total += payload.price;
    },
    REMOVE_FROM_CART(state, payload) {
      const index = state.items.findIndex((item) => item.id === payload.id);
      console.log(index);
      // console.log(typeof state.items);
      const prodData = state.items[index];
      state.items.splice(index, 1);
      state.total -= prodData.price * prodData.qty;
      state.qty -= prodData.qty;
    },
  },
  actions: {
    addtoCart({ commit }, payload) {
      console.log(payload);
      commit("ADD_TO_CART", payload);
    },
    removeFromCart({ commit }, payload) {
      commit("REMOVE_FROM_CART", payload);
    },
  },

  getters: {
    getCartQty(state) {
      return state.qty;
    },
    getCart(state) {
      return state;
    },
  },
};

export default auth;
