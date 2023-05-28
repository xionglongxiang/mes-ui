import { ElButton as a, ElDialog as i, ElDrawer as l, ElInput as r, ElMessage as c, ElMessageBox as u, ElNotification as f, ElPopconfirm as E } from "element-plus";
const t = (n, o) => {
  for (let e in n)
    /[A-Z]/.test(e[0]) && (n[e].name = n[e].name.replace("El", "M"));
  return n.name.includes("El") && (n.name && (n.name = n.name.replace("El", "M")), n.install = (e) => {
    const s = o || n.name || n.__name;
    e.component(s, n);
  }), n;
}, g = t(a), k = g, d = t(i), B = t(l), M = t(r), C = t(c), x = t(u), D = t(f), m = t(E);
function w(n, o, e) {
}
function y() {
}
function I() {
}
function h() {
}
const N = {
  setCookie: w,
  getCookie: y,
  delCookie: I,
  delAllCookie: h
}, v = [
  k,
  m,
  M,
  d,
  B,
  C,
  x,
  D
], P = {
  install(n) {
    v.forEach((o) => {
      n.use(o);
    });
  },
  version: "0.0.42"
};
export {
  k as Button,
  N as Cookie,
  d as Dialog,
  B as Drawer,
  M as Input,
  C as Message,
  x as MessageBox,
  D as Notification,
  m as Popconfirm,
  P as default,
  h as delAllCookie,
  I as delCookie,
  y as getCookie,
  w as setCookie
};
//# sourceMappingURL=index.mjs.map
