import "element-plus/dist/index.css";

import { createApp } from "vue";

import xlx, { Button, DemoButton } from "../packages/components/index.ts";
import App from "./App.vue";

console.log("xlx", xlx);
console.log("DemoButton", DemoButton);
console.log("Button", Button);

console.log(3);

const app = createApp(App);

app.use(xlx);
app.mount("#app");
