import { defineComponent as o, computed as c, openBlock as i, createElementBlock as u, normalizeClass as d, renderSlot as p } from "vue";
const _ = (e, n) => {
  for (let t in e)
    /[A-Z]/.test(t[0]) && (e[t].name = e[t].name.replace("El", "M"));
  return e.name.includes("El") && (e.name && (e.name = e.name.replace("El", "M")), e.install = (t) => {
    const a = n || e.name || e.__name;
    t.component(a, e);
  }), e;
}, f = {
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
}, m = /* @__PURE__ */ o({
  name: "ElDemo1",
  __name: "index",
  props: f,
  setup(e, { expose: n }) {
    const t = e;
    n({});
    const a = /* @__PURE__ */ new Map([
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
      a.get(t.type),
      s.get(t.size)
    ]);
    return (r, y) => (i(), u("span", {
      class: d(l.value)
    }, [
      p(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const g = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, s] of n)
    t[a] = s;
  return t;
}, x = /* @__PURE__ */ g(m, [["__scopeId", "data-v-d4c4fcae"]]), M = _(x);
export {
  M as MDemo1,
  M as default
};
//# sourceMappingURL=index.js.map
