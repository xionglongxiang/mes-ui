export default (comp: any, compName?: string) => {
  for (let key in comp) {
    if (/[A-Z]/.test(key[0])) {
      comp[key].name = comp[key].name.replace("El", "M");
    }
  }
  if (!comp.name.includes("El")) {
    return comp;
  }
  if (comp.name) {
    comp.name = comp.name.replace("El", "M");
  }
  comp.install = (app: any) => {
    // 当组件是 script setup 的形式时，会自动以为文件名注册，会挂载到组件的__name 属性上
    // 所以要加上这个条件
    const name = compName || comp.name || comp.__name;
    // 注册组件
    app.component(name, comp);
    installItems(app, comp)
  };

  return comp;
};

const installItems = (app: App, comp) => {
    Object.entries(comp).forEach(([key, item]) => {
      if (item.install && item.name.charAt(0) === 'M') {
        app.component(item.name, item);
      }
    })
 }