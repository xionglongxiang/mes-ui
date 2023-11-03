import { ElButton as l, buttonProps as a, ElDatePicker as i, ElDialog as c, ElDrawer as r, ElInput as u, ElMessage as E, ElMessageBox as f, ElNotification as g, ElPopconfirm as k, ElTable as d, ElTag as B, ElUpload as D } from "element-plus";
const t = (n, e) => {
  for (let o in n)
    /[A-Z]/.test(o[0]) && (n[o].name = n[o].name.replace("El", "M"));
  return n.name.includes("El") && (n.name && (n.name = n.name.replace("El", "M")), n.install = (o) => {
    const s = e || n.name || n.__name;
    o.component(s, n);
  }), n;
}, M = t(l), C = M;
console.log("el", a);
console.log("ElButton", l);
const P = t(i), x = t(c), T = t(r), b = t(u), m = t(E), w = t(f), y = t(g), I = t(k), h = t(d), v = t(B), A = t(D);
function N(n, e, o) {
}
function U() {
}
function _() {
}
function p() {
}
const j = {
  setCookie: N,
  getCookie: U,
  delCookie: _,
  delAllCookie: p
}, Z = [
  C,
  I,
  b,
  x,
  T,
  m,
  w,
  y,
  v,
  h,
  A,
  P
], q = {
  install(n) {
    Z.forEach((e) => {
      n.use(e);
    });
  },
  version: "0.0.42"
};
export {
  C as Button,
  j as Cookie,
  P as DatePicker,
  x as Dialog,
  T as Drawer,
  b as Input,
  m as Message,
  w as MessageBox,
  y as Notification,
  I as Popconfirm,
  h as Table,
  v as Tag,
  A as Upload,
  q as default,
  p as delAllCookie,
  _ as delCookie,
  U as getCookie,
  N as setCookie
};
//# sourceMappingURL=index.mjs.map
