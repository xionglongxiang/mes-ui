import { defineComponent as i, ref as l, onMounted as o, resolveComponent as u, openBlock as f, createBlock as p, mergeProps as c, unref as m } from "vue";
const _ = (e, n) => {
  for (let t in e)
    /[A-Z]/.test(t[0]) && (e[t].name = e[t].name.replace("El", "M"));
  return e.name.includes("El") && (e.name && (e.name = e.name.replace("El", "M")), e.install = (t) => {
    const r = n || e.name || e.__name;
    t.component(r, e);
  }), e;
}, d = /* @__PURE__ */ i({
  __name: "index",
  props: {
    // 进度条进度
    percentage: {
      type: Number,
      required: !0
    },
    // 是否有动画效果
    isAnimate: {
      type: Boolean,
      default: !1
    },
    // 动画时长(毫秒)
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(e) {
    const n = e;
    l(0);
    let t = l(0);
    return o(() => {
      if (n.isAnimate) {
        let r = Math.ceil(n.time / n.percentage), a = setInterval(() => {
          t.value += 1, t.value >= n.percentage && (t.value = n.percentage, clearInterval(a));
        }, r);
      }
    }), (r, a) => {
      const s = u("el-progress");
      return f(), p(s, c({ percentage: m(t) }, r.$attrs), null, 16, ["percentage"]);
    };
  }
}), v = _(d);
export {
  v as default
};
//# sourceMappingURL=index.mjs.map
