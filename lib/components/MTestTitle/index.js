import { defineComponent as o, computed as c, openBlock as i, createElementBlock as u, normalizeClass as f, renderSlot as _ } from "vue";
const d = (e, a) => {
  for (let t in e)
    /[A-Z]/.test(t[0]) && (e[t].name = e[t].name.replace("El", "M"));
  return e.name.includes("El") && (e.name && (e.name = e.name.replace("El", "M")), e.install = (t) => {
    const n = a || e.name || e.__name;
    t.component(n, e), p(t, e);
  }), e;
}, p = (e, a) => {
  Object.entries(a).forEach(([t, n]) => {
    n.install && n.name.charAt(0) === "M" && e.component(n.name, n);
  });
}, m = {
  /**
   * @description text type
   */
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger", ""],
    default: ""
  },
  /**
   * @description text size
   */
  size: {
    type: String,
    values: ["default", "small", "large"],
    default: ""
  }
}, g = /* @__PURE__ */ o({
  name: "ElTestTitle",
  __name: "index",
  props: m,
  setup(e, { expose: a }) {
    const t = e;
    a({});
    const n = /* @__PURE__ */ new Map([
      ["", ""],
      ["primary", "el-text--primary"],
      ["success", "el-text--success"],
      ["info", "el-text--info"],
      ["warning", "el-text--warning"],
      ["danger", "el-text--danger"]
    ]), s = /* @__PURE__ */ new Map([
      ["", ""],
      ["default", "el-text--default"],
      ["small", "el-text--small"],
      ["large", "el-text--large"]
    ]), l = c(() => [
      "el-text",
      n.get(t.type),
      s.get(t.size)
    ]);
    return (r, v) => (i(), u("span", {
      class: f(l.value)
    }, [
      _(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const x = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of a)
    t[n] = s;
  return t;
}, y = /* @__PURE__ */ x(g, [["__scopeId", "data-v-fc51bb6a"]]), w = d(y);
export {
  w as MTestTitle,
  w as default
};
//# sourceMappingURL=index.js.map
