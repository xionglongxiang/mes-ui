import { ElDialog as l } from "element-plus";
const i = (e, a) => {
  for (let n in e)
    /[A-Z]/.test(n[0]) && (e[n].name = e[n].name.replace("El", "M"));
  return e.name.includes("El") && (e.name && (e.name = e.name.replace("El", "M")), e.install = (n) => {
    const t = a || e.name || e.__name;
    n.component(t, e);
  }), e;
}, s = i(l);
export {
  s as default
};
//# sourceMappingURL=index.mjs.map
