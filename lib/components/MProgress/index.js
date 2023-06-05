import { ElProgress as l } from "element-plus";
const r = (e, t) => {
  for (let n in e)
    /[A-Z]/.test(n[0]) && (e[n].name = e[n].name.replace("El", "M"));
  return e.name.includes("El") && (e.name && (e.name = e.name.replace("El", "M")), e.install = (n) => {
    const a = t || e.name || e.__name;
    n.component(a, e), s(n, e);
  }), e;
}, s = (e, t) => {
  Object.entries(t).forEach(([n, a]) => {
    a.install && a.name.charAt(0) === "M" && e.component(a.name, a);
  });
}, f = r(l);
export {
  f as default
};
//# sourceMappingURL=index.js.map
