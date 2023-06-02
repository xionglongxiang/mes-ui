import "element-plus/dist/index.css";

import { createApp } from "vue";
import ElementPlus from "element-plus";

import App from "./App.vue";

import MesComponents, { MDemo1 } from '../../../lib/components'
console.log(MDemo1, MesComponents, '-> MesComponents');


const app = createApp(App);

app.use(MesComponents);
app.mount("#app");
