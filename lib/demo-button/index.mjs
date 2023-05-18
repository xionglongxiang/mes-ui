import { openBlock as s, createElementBlock as l, normalizeStyle as a, renderSlot as c } from "vue";
const _ = (t, n) => (t.install = (e) => {
  const o = n || t.name || t.__name;
  e.component(o, t);
}, t), u = {
  name: "demo-button",
  props: {
    color: String,
    type: {
      type: String,
      default: "primary"
    }
  }
};
const i = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, r] of n)
    e[o] = r;
  return e;
};
function d(t, n, e, o, r, p) {
  return s(), l("button", {
    class: "demo-button",
    style: a("color:" + e.color)
  }, [
    c(t.$slots, "default")
  ], 4);
}
const m = /* @__PURE__ */ i(u, [["render", d]]), y = _(m);
export {
  y as default
};
//# sourceMappingURL=index.mjs.map
