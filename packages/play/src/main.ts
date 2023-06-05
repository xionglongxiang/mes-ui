import "element-plus/dist/index.css";
import router from './router'
import { createApp } from "vue";
// import ElementPlus from "element-plus";
import App from "./App.vue";

// import MesComponents, { MSelect } from '../../../lib/components' // build
import MesComponents, { MSelect } from '@packages/components' // dev
// console.log(MSelect, '-> MSelect');

export const app = createApp(App);

app
.use(router)
.use(MesComponents);

app.mount("#app");
console.log(app._context.components, '-> app._context.components');

