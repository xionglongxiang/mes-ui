import { openBlock as s, createElementBlock as c, renderSlot as _ } from "vue";
const a = {
  name: "demo-button",
  props: {
    color: String,
    type: {
      type: String,
      default: "primary"
    }
  }
};
const p = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, r] of o)
    e[n] = r;
  return e;
}, l = { class: "demo-button" };
function u(t, o, e, n, r, d) {
  return s(), c("button", l, [
    _(t.$slots, "default")
  ]);
}
const f = /* @__PURE__ */ p(a, [["render", u]]);
export {
  f as default
};
//# sourceMappingURL=index.mjs.map
