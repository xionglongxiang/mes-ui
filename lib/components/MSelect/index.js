import { ElSelect as l } from "element-plus";
const r = (e, a) => {
  for (let n in e)
    /[A-Z]/.test(n[0]) && (e[n].name = e[n].name.replace("El", "M"));
  return e.name.includes("El") && (e.name && (e.name = e.name.replace("El", "M")), e.install = (n) => {
    const t = a || e.name || e.__name;
    n.component(t, e), s(n, e);
  }), e;
}, s = (e, a) => {
  Object.entries(a).forEach(([n, t]) => {
    t.install && t.name.charAt(0) === "M" && e.component(t.name, t);
  });
}, f = r(l);
export {
  f as default
};
//# sourceMappingURL=index.js.map
