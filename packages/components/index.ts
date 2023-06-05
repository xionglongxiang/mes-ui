import { App } from 'vue';

import MAlert from './Basic/MAlert';
import MButton from './Basic/MButton';
import MDatePicker from './Basic/MDatePicker';
import MDialog from './Basic/MDialog';
import MDrawer from './Basic/MDrawer';
import MInput from './Basic/MInput';
import MSelect from './Basic/MSelect'
import MMessage from './Basic/MMessage';
import MMessageBox from './Basic/MMessageBox';
import MNotification from './Basic/MNotification';
import MPopconfirm from './Basic/MPopconfirm';
import MTable from './Basic/MTable';
import MTag from './Basic/MTag';
import MUpload from './Basic/MUpload';
import MTestTitle from './Example/MTestTitle'
import MTestCard from './Example/MTestCard'

export {
  MAlert,
  MButton,
  MDatePicker,
  MDialog,
  MDrawer,
  MInput,
  MSelect,
  MMessage,
  MMessageBox,
  MNotification,
  MPopconfirm,
  MTable,
  MTag,
  MUpload,
  MTestTitle,
  MTestCard
};

const components = [
  MAlert,
  MButton,
  MPopconfirm,
  MInput,
  MSelect,
  MDialog,
  MDrawer,
  MMessage,
  MMessageBox,
  MNotification,
  MTag,
  MTable,
  MUpload,
  MDatePicker,
  MTestTitle,
  MTestCard
];

export default {
  install(app: App) {
    components.forEach((item: any) => {
      app.use(item)
    });
  },
  version: "0.0.42",
 } as const;
