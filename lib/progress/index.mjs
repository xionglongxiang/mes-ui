import { defineComponent as l, ref as a, onMounted as s, resolveComponent as c, openBlock as u, createBlock as i, mergeProps as m, unref as f } from "vue";
const _ = /* @__PURE__ */ l({
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
  setup(o) {
    const e = o;
    a(0);
    let t = a(0);
    return s(() => {
      if (e.isAnimate) {
        let r = Math.ceil(e.time / e.percentage), n = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(n));
        }, r);
      }
    }), (r, n) => {
      const p = c("el-progress");
      return u(), i(p, m({ percentage: f(t) }, r.$attrs), null, 16, ["percentage"]);
    };
  }
});
export {
  _ as default
};
//# sourceMappingURL=index.mjs.map
