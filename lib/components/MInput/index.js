import { ElInput as l } from "element-plus";
const r = (n, a) => {
  for (let e in n)
    /[A-Z]/.test(e[0]) && (n[e].name = n[e].name.replace("El", "M"));
  return n.name.includes("El") && (n.name && (n.name = n.name.replace("El", "M")), n.install = (e) => {
    const t = a || n.name || n.__name;
    e.component(t, n), s(e, n);
  }), n;
}, s = (n, a) => {
  Object.entries(a).forEach(([e, t]) => {
    t.install && t.name.charAt(0) === "M" && n.component(t.name, t);
  });
}, f = r(l);
export {
  f as default
};
//# sourceMappingURL=index.js.map
