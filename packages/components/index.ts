import { App } from "vue";

import DemoButton from "./demo-button";
import progress from "./progress";

//
const components = [DemoButton, progress];

export default {
  install(app: App) {
    components.forEach((item: any) => {
      app.use(item);
    });
  },
};
export { DemoButton, progress };
