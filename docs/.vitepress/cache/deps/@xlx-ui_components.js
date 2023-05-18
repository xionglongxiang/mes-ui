import {
  createBlock,
  createElementBlock,
  defineComponent,
  mergeProps,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  resolveComponent,
  unref
} from "./chunk-LBEWQFSH.js";

// node_modules/@xlx-ui/components/lib/index.mjs
var y = {
  name: "demo-button",
  props: {
    color: String,
    type: {
      type: String,
      default: "primary"
    }
  }
};
var $ = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
var b = { class: "demo-button" };
function x(e, t, n, o, r, c) {
  return openBlock(), createElementBlock("button", b, [
    renderSlot(e.$slots, "default")
  ]);
}
var s = $(y, [["render", x]]);
s.install = function(e) {
  e.component("demo-button", s);
};
var a = defineComponent({
  __name: "index",
  props: {
    // 进度条进度
    percentage: {
      type: Number,
      required: true
    },
    // 是否有动画效果
    isAnimate: {
      type: Boolean,
      default: false
    },
    // 动画时长(毫秒)
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(e) {
    const t = e;
    ref(0);
    let n = ref(0);
    return onMounted(() => {
      if (t.isAnimate) {
        let o = Math.ceil(t.time / t.percentage), r = setInterval(() => {
          n.value += 1, n.value >= t.percentage && (n.value = t.percentage, clearInterval(r));
        }, o);
      }
    }), (o, r) => {
      const c = resolveComponent("el-progress");
      return openBlock(), createBlock(c, mergeProps({ percentage: unref(n) }, o.$attrs), null, 16, ["percentage"]);
    };
  }
});
a.install = function(e) {
  e.component("progress", a);
};
var h = [s, a];
var k = {
  install(e) {
    h.forEach((t) => {
      e.use(t.install);
    });
  },
  version: "0.1.0"
};
export {
  s as DemoButton,
  k as default,
  a as progress
};
//# sourceMappingURL=@xlx-ui_components.js.map
