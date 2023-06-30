// import { mount } from "@vue/test-utils";
import { createApp } from "vue";

import SortedTablePlugin from "./index.js";
import App from "./App.vue";

// create an extended `Vue` constructor
const app = createApp(App);

app.use(SortedTablePlugin, {
  ascIcon: "<span> up</span>",
  descIcon: "<span> down</span>",
});
app.config.productionTip = false;

app.mount("#app");
