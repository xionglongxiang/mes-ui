import { openBlock as a, createElementBlock as l, normalizeStyle as s, renderSlot as c } from "vue";
const _ = (t, n) => (t.name && (t.name = t.name.replace("El", "M")), t.install = (e) => {
  const o = n || t.name || t.__name;
  e.component(o, t);
}, t), i = {
  name: "demo-button",
  props: {
    color: String,
    type: {
      type: String,
      default: "primary"
    }
  }
};
const u = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, r] of n)
    e[o] = r;
  return e;
};
function d(t, n, e, o, r, m) {
  return a(), l("button", {
    class: "demo-button",
    style: s("color:" + e.color)
  }, [
    c(t.$slots, "default")
  ], 4);
}
const f = /* @__PURE__ */ u(i, [["render", d]]), y = _(f);
export {
  y as default
};
//# sourceMappingURL=index.mjs.map
