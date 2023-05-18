import "./style.css";
import "element-plus/dist/index.css";

import { createApp } from "vue";

import ElementPlus from "element-plus";

import * as Icons from "@element-plus/icons";

import App from "./App.vue";
import { toLine } from "./utils";

const app = createApp(App);
// 全局注册图标 牺牲一点性能
for (let i in Icons) {
  // 注册全部组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
}

app.use(ElementPlus);
