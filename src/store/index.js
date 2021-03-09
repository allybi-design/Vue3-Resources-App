import { createStore } from "vuex";
import auth from "./auth";
import requests from "./requests";
import coaches from "./coaches";

export default createStore({
  modules: {
    auth,
    requests,
    coaches,
  },
});
