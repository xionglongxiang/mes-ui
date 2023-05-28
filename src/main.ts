import "element-plus/dist/index.css";

import { createApp } from "vue";

import xlx from "../packages/components/index";
import App from "./App.vue";

console.log(xlx);

const app = createApp(App);

app.use(xlx);
app.mount("#app");
