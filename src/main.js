import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import bootstrap from "bootstrap";

import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.use(bootstrap);
app.use(store);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
