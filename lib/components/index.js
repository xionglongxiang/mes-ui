import { ElAlert as c, ElButton as i, ElDatePicker as u, ElDialog as f, ElDrawer as p, ElInput as M, ElSelect as d, ElMessage as g, ElMessageBox as _, ElNotification as m, ElPopconfirm as E, ElTable as x, ElTag as y, ElUpload as T } from "element-plus";
import { defineComponent as v, computed as w, openBlock as b, createElementBlock as k, normalizeClass as B, renderSlot as D } from "vue";
const t = (e, a) => {
  for (let n in e)
    /[A-Z]/.test(n[0]) && (e[n].name = e[n].name.replace("El", "M"));
  return e.name.includes("El") && (e.name && (e.name = e.name.replace("El", "M")), e.install = (n) => {
    const s = a || e.name || e.__name;
    n.component(s, e), h(n, e);
  }), e;
}, h = (e, a) => {
  Object.entries(a).forEach(([n, s]) => {
    s.install && s.name.charAt(0) === "M" && e.component(s.name, s);
  });
}, I = t(c), P = t(i), S = P, z = t(u), A = t(f), C = t(p), N = t(M), O = t(d), U = t(g), $ = t(_), j = t(m), Z = t(E), q = t(x), F = t(y), G = t(T), H = {
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
}, J = /* @__PURE__ */ v({
  name: "ElTestTitle",
  __name: "index",
  props: H,
  setup(e, { expose: a }) {
    const n = e;
    a({});
    const s = /* @__PURE__ */ new Map([
      ["", ""],
      ["primary", "el-text--primary"],
      ["success", "el-text--success"],
      ["info", "el-text--info"],
      ["warning", "el-text--warning"],
      ["danger", "el-text--danger"]
    ]), l = /* @__PURE__ */ new Map([
      ["", ""],
      ["default", "el-text--default"],
      ["small", "el-text--small"],
      ["large", "el-text--large"]
    ]), o = w(() => [
      "el-text",
      s.get(n.type),
      l.get(n.size)
    ]);
    return (r, W) => (b(), k("span", {
      class: B(o.value)
    }, [
      D(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const K = (e, a) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of a)
    n[s] = l;
  return n;
}, L = /* @__PURE__ */ K(J, [["__scopeId", "data-v-fc51bb6a"]]), Q = t(L), R = Q, V = [
  I,
  S,
  Z,
  N,
  O,
  A,
  C,
  U,
  $,
  j,
  F,
  q,
  G,
  z,
  R
], ee = {
  install(e) {
    V.forEach((a) => {
      e.use(a);
    });
  },
  version: "0.0.42"
};
export {
  I as MAlert,
  S as MButton,
  z as MDatePicker,
  A as MDialog,
  C as MDrawer,
  N as MInput,
  U as MMessage,
  $ as MMessageBox,
  j as MNotification,
  Z as MPopconfirm,
  O as MSelect,
  q as MTable,
  F as MTag,
  R as MTestTitle,
  G as MUpload,
  ee as default
};
//# sourceMappingURL=index.js.map
