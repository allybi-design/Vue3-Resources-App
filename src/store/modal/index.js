const modal = {
  state: {
    isOpen: false,
  },
  mutations: {
    TOGGLE_MODAL(state) {
      state.isOpen = !state.isOpen;
    },
  },
  actions: {
    toggleModal({ commit }) {
      commit("TOGGLE_MODAL");
    },
  },
  getters: {
    getIsModalOpen(state) {
      return state.isOpen;
    },
  },
};

export default modal;
