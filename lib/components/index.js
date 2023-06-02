import { ElButton as c, ElDatePicker as i, ElDialog as p, ElDrawer as u, ElInput as f, ElMessage as d, ElMessageBox as m, ElNotification as g, ElPopconfirm as _, ElTable as x, ElTag as E, ElUpload as M } from "element-plus";
import { defineComponent as y, computed as v, openBlock as D, createElementBlock as w, normalizeClass as B, renderSlot as k } from "vue";
const t = (e, s) => {
  for (let n in e)
    /[A-Z]/.test(n[0]) && (e[n].name = e[n].name.replace("El", "M"));
  return e.name.includes("El") && (e.name && (e.name = e.name.replace("El", "M")), e.install = (n) => {
    const a = s || e.name || e.__name;
    n.component(a, e);
  }), e;
}, P = t(c), z = P, I = t(i), T = t(p), h = t(u), C = t(f), N = t(d), S = t(m), b = t(g), U = t(_), $ = t(x), A = t(E), O = t(M), Z = {
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
}, j = /* @__PURE__ */ y({
  name: "ElDemo1",
  __name: "index",
  props: Z,
  setup(e, { expose: s }) {
    const n = e;
    s({});
    const a = /* @__PURE__ */ new Map([
      ["", ""],
      ["primary", "el-text--primary"],
      ["success", "el-text--success"],
      ["info", "el-text--info"],
      ["warning", "el-text--warning"],
      ["danger", "el-text--danger"]
    ]), o = /* @__PURE__ */ new Map([
      ["", ""],
      ["default", "el-text--default"],
      ["small", "el-text--small"],
      ["large", "el-text--large"]
    ]), l = v(() => [
      "el-text",
      a.get(n.type),
      o.get(n.size)
    ]);
    return (r, K) => (D(), w("span", {
      class: B(l.value)
    }, [
      k(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const q = (e, s) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of s)
    n[a] = o;
  return n;
}, F = /* @__PURE__ */ q(j, [["__scopeId", "data-v-d4c4fcae"]]), G = t(F), H = G, J = [
  z,
  U,
  C,
  T,
  h,
  N,
  S,
  b,
  A,
  $,
  O,
  I,
  H
], R = {
  install(e) {
    J.forEach((s) => {
      e.use(s);
    });
  },
  version: "0.0.42"
};
export {
  I as DatePicker,
  T as Dialog,
  h as Drawer,
  C as Input,
  z as MButton,
  H as MDemo1,
  N as Message,
  S as MessageBox,
  b as Notification,
  U as Popconfirm,
  $ as Table,
  A as Tag,
  O as Upload,
  R as default
};
//# sourceMappingURL=index.js.map
