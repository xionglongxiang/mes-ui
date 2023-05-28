import { App } from "vue";

import Button from "./Button";
import Dialog from "./Dialog";
import Drawer from "./Drawer";
import Input from "./Input";
import Message from "./Message";
import MessageBox from "./MessageBox";
import Notification from "./Notification";
import Popconfirm from "./Popconfirm";

export {
  Button,
  Dialog,
  Drawer,
  Input,
  Message,
  MessageBox,
  Notification,
  Popconfirm,
};

export * from "./utils/cookie";

const components = [
  Button,
  Popconfirm,
  Input,
  Dialog,
  Drawer,
  Message,
  MessageBox,
  Notification,
];

export default {
  install(app: App) {
    components.forEach((item: any) => {
      app.use(item);
    });
  },
  version: "0.0.42",
};
