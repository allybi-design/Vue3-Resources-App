import { createCoach, getAllCoaches } from "@/Http/fireBaseApi";

import router from "@/router";

const coaches = {
  state: {
    coaches: [],
  },
  mutations: {
    ADD_COACH(state, payload) {
      state.coaches = payload;
    },
    // POPULATE_STATE(state, payload) {
    //   state.coaches = payload;
    // },
  },
  actions: {
    async saveNewCoach({ commit }, payload) {
      try {
        await createCoach(payload).then(async () => {
          await getAllCoaches().then((coaches) => {
            commit("ADD_COACH", coaches);
            router.replace("/coaches");
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async loadCoachesData({ commit }) {
      await getAllCoaches().then((coaches) => {
        commit("ADD_COACH", coaches);
      });
    },
  },
  getters: {
    getCoaches: (state) => {
      return state.coaches;
    },
    getCoachById: (state) => (id) => {
      return state.coaches.find((coach) => coach.uid === id);
    },
    getHasCoaches: (state) => {
      return state.coaches.length > 0 ? true : false;
    },
    getIsUserCoach(state, rootGetters) {
      return state.coaches.some((coach) => coach.uid === rootGetters.getUserId);
    },
  },
};

export default coaches;
