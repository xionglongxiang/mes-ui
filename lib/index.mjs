import { openBlock as c, createElementBlock as p, normalizeStyle as u, renderSlot as i, defineComponent as m, ref as l, onMounted as _, resolveComponent as f, createBlock as d, mergeProps as g, unref as y } from "vue";
import { ElButton as v } from "element-plus";
const s = (e, t) => (e.install = (n) => {
  const o = t || e.name || e.__name;
  n.component(o, e);
}, e), B = {
  name: "demo-button",
  props: {
    color: String,
    type: {
      type: String,
      default: "primary"
    }
  }
};
const $ = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
function x(e, t, n, o, r, a) {
  return c(), p("button", {
    class: "demo-button",
    style: u("color:" + n.color)
  }, [
    i(e.$slots, "default")
  ], 4);
}
const b = /* @__PURE__ */ $(B, [["render", x]]), h = s(b), A = s(v, "my-button"), k = /* @__PURE__ */ m({
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
    return _(() => {
      if (t.isAnimate) {
        let o = Math.ceil(t.time / t.percentage), r = setInterval(() => {
          n.value += 1, n.value >= t.percentage && (n.value = t.percentage, clearInterval(r));
        }, o);
      }
    }), (o, r) => {
      const a = f("el-progress");
      return c(), d(a, g({ percentage: y(n) }, o.$attrs), null, 16, ["percentage"]);
    };
  }
}), S = s(k), E = [h, S], C = {
  install(e) {
    E.forEach((t) => {
      e.use(t);
    });
  },
  version: "0.1.0"
};
export {
  h as DemoButton,
  A as MyButton,
  C as default,
  S as progress
};
//# sourceMappingURL=index.mjs.map
