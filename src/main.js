import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import bootstrap from "bootstrap";

import "bootstrap/dist/css/bootstrap.css";

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.component("fa-icon", FontAwesomeIcon);
app.component("fa-layers", FontAwesomeLayers);
app.component("fa-layers-text", FontAwesomeLayersText);

app.use(bootstrap);
app.use(store);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
