import { firebaseApp } from "@/Http/fireBaseApi";
import "firebase/auth";

import router from "../../router";

const auth = {
  state: {
    isAuth: false,
    userId: undefined,
    errorMsg: undefined,
  },
  mutations: {
    SET_AUTH(state, payload) {
      state.userId = payload.user;
      state.isAuth = payload.auth;
    },
    SET_ERROR(state, payload) {
      state.errorMsg = payload;
    },
    CLR_ERROR(state) {
      state.errorMsg = undefined;
    },
  },
  actions: {
    async signIn({ commit, dispatch }, payload) {
      try {
        await firebaseApp
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then((userCredential) => {
            commit("SET_AUTH", { auth: true, user: userCredential.user.uid });
            dispatch("toggleModal");
            router.push("/coaches");
          });
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    signOut({ commit }) {
      firebaseApp.auth().signOut();
      commit("SET_AUTH", { auth: false, user: {} });
      router.push("/");
    },

    async createUser({ commit, dispatch }, payload) {
      try {
        await firebaseApp
          .auth()
          .createUserWithEmailAndPassword(payload.email, payload.password)
          .then((userCredential) => {
            commit("SET_AUTH", { auth: true, user: userCredential.user.uid });
            dispatch("toggleModal");
            dispatch("loadState");
            router.push("/coaches");
          });
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },

    clearErrors({ commit }) {
      commit("CLR_ERROR");
    },
  },
  getters: {
    getIsUserAuth(state) {
      return state.isAuth;
    },

    getError(state) {
      return state.errorMsg;
    },
    getUserId(state) {
      return state.userId ? state.userId : "undefined";
    },
  },
};

export default auth;
