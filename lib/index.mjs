import { openBlock as p, createElementBlock as c, renderSlot as l, defineComponent as u, ref as a, onMounted as _, resolveComponent as i, createBlock as m, mergeProps as d, unref as f } from "vue";
const g = {
  name: "demo-button",
  props: {
    color: String,
    type: {
      type: String,
      default: "primary"
    }
  }
};
const v = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, o] of e)
    t[r] = o;
  return t;
}, y = { class: "demo-button" };
function $(n, e, t, r, o, s) {
  return p(), c("button", y, [
    l(n.$slots, "default")
  ]);
}
const x = /* @__PURE__ */ v(g, [["render", $]]), B = /* @__PURE__ */ u({
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
  setup(n) {
    const e = n;
    a(0);
    let t = a(0);
    return _(() => {
      if (e.isAnimate) {
        let r = Math.ceil(e.time / e.percentage), o = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(o));
        }, r);
      }
    }), (r, o) => {
      const s = i("el-progress");
      return p(), m(s, d({ percentage: f(t) }, r.$attrs), null, 16, ["percentage"]);
    };
  }
});
export {
  x as DemoButton,
  B as progress
};
//# sourceMappingURL=index.mjs.map
