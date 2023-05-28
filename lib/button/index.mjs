import { ElButton as l } from "element-plus";
const r = (e, t) => {
  for (let n in e)
    /[A-Z]/.test(n[0]) && (e[n].name = e[n].name.replace("El", "M"));
  return e.name.includes("El") && (e.name && (e.name = e.name.replace("El", "M")), e.install = (n) => {
    const a = t || e.name || e.__name;
    n.component(a, e);
  }), e;
}, s = r(l);
export {
  s as default
};
//# sourceMappingURL=index.mjs.map
