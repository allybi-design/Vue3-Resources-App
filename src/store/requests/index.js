const requests = {
  // namespaced: true,
  state: {
    requests: "sdds",
  },
  mutations: {
    SAVE_COACH_CONTACT(state, payload) {
      // state.requests.push(payload);
      console.log(payload);
    },
  },
  actions: {
    saveCoachContact(context, payload) {
      const newRequest = {
        ...payload,
        id: new Date().toISOString(),
        // coachId: payload.coachId,
        // userEmail: payload.email,
        // message: payload.message,
      };

      context.commit("SAVE_COACH_CONTACT", newRequest);
    },
  },
  getters: {},
};

export default requests;
