import { defineComponent as s, ref as l, onMounted as p, resolveComponent as c, openBlock as i, createBlock as u, mergeProps as m, unref as f } from "vue";
const _ = (e, t) => (e.install = (n) => {
  const r = t || e.name || e.__name;
  n.component(r, e);
}, e), g = /* @__PURE__ */ s({
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
    const t = e;
    l(0);
    let n = l(0);
    return p(() => {
      if (t.isAnimate) {
        let r = Math.ceil(t.time / t.percentage), a = setInterval(() => {
          n.value += 1, n.value >= t.percentage && (n.value = t.percentage, clearInterval(a));
        }, r);
      }
    }), (r, a) => {
      const o = c("el-progress");
      return i(), u(o, m({ percentage: f(n) }, r.$attrs), null, 16, ["percentage"]);
    };
  }
}), v = _(g);
export {
  v as default
};
//# sourceMappingURL=index.mjs.map
