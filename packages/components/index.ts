import { App } from "vue";

import Button from "./Button";
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
  version: "0.1.0",
};

export { Button, DemoButton, progress };
