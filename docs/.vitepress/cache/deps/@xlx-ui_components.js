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
var g = {
  name: "demo-button",
  props: {
    color: String,
    type: {
      type: String,
      default: "primary"
    }
  }
};
var v = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, o] of e)
    t[r] = o;
  return t;
};
var y = { class: "demo-button" };
function $(n, e, t, r, o, s) {
  return openBlock(), createElementBlock("button", y, [
    renderSlot(n.$slots, "default")
  ]);
}
var x = v(g, [["render", $]]);
var B = defineComponent({
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
  setup(n) {
    const e = n;
    ref(0);
    let t = ref(0);
    return onMounted(() => {
      if (e.isAnimate) {
        let r = Math.ceil(e.time / e.percentage), o = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(o));
        }, r);
      }
    }), (r, o) => {
      const s = resolveComponent("el-progress");
      return openBlock(), createBlock(s, mergeProps({ percentage: unref(t) }, r.$attrs), null, 16, ["percentage"]);
    };
  }
});
export {
  x as DemoButton,
  B as progress
};
//# sourceMappingURL=@xlx-ui_components.js.map
