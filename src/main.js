

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseCard from "./components/BaseCard";
import BaseButton from "./components/BaseButton";
import Modal from "./components/Modal";

import bootstrap from "bootstrap";

import "bootstrap/dist/css/bootstrap.css";

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";

const app = createApp(App);
app.config.performance = true

app.component("BaseCard", BaseCard);
app.component("BaseButton", BaseButton);
app.component("Modal", Modal)

app.component("fa-icon", FontAwesomeIcon);
app.component("fa-layers", FontAwesomeLayers);
app.component("fa-layers-text", FontAwesomeLayersText);

app.use(bootstrap);
app.use(store);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
