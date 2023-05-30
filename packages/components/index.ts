import { App } from 'vue';

import Button from './Basic/Button';
import DatePicker from './Basic/DatePicker';
import Dialog from './Basic/Dialog';
import Drawer from './Basic/Drawer';
import Input from './Basic/Input';
import Message from './Basic/Message';
import MessageBox from './Basic/MessageBox';
import Notification from './Basic/Notification';
import Popconfirm from './Basic/Popconfirm';
import Table from './Basic/Table';
import Tag from './Basic/Tag';
import Upload from './Basic/Upload';

export {
  Button,
  DatePicker,
  Dialog,
  Drawer,
  Input,
  Message,
  MessageBox,
  Notification,
  Popconfirm,
  Table,
  Tag,
  Upload,
};

export * from "./Utils/Cookie";

const components = [
  Button,
  Popconfirm,
  Input,
  Dialog,
  Drawer,
  Message,
  MessageBox,
  Notification,
  Tag,
  Table,
  Upload,
  DatePicker,
];

export default {
  install(app: App) {
    components.forEach((item: any) => {
      app.use(item);
    });
  },
  version: "0.0.42",
};
