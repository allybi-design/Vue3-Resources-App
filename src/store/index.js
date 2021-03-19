import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate"; //www.npmjs.com/package/vuex-persistedstate
import auth from "./auth";
import requests from "./requests";
import coaches from "./coaches";
import modal from "./modal";

export default createStore({
  // plugins: [createPersistedState()],
  modules: {
    auth,
    requests,
    coaches,
    modal,
  },
});
