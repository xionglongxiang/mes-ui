import { ElDialog as l } from "element-plus";
const r = (n, t) => {
  for (let e in n)
    /[A-Z]/.test(e[0]) && (n[e].name = n[e].name.replace("El", "M"));
  return n.name.includes("El") && (n.name && (n.name = n.name.replace("El", "M")), n.install = (e) => {
    const a = t || n.name || n.__name;
    e.component(a, n), s(e, n);
  }), n;
}, s = (n, t) => {
  Object.entries(t).forEach(([e, a]) => {
    a.install && a.name.charAt(0) === "M" && n.component(a.name, a);
  });
}, f = r(l);
export {
  f as default
};
//# sourceMappingURL=index.js.map
