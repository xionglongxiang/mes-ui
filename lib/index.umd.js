(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.index={},t.Vue))})(this,function(t,e){"use strict";const i={name:"demo-button",props:{color:String,type:{type:String,default:"primary"}}},_="",a=(r,n)=>{const o=r.__vccOpts||r;for(const[s,p]of n)o[s]=p;return o},l={class:"demo-button"};function u(r,n,o,s,p,c){return e.openBlock(),e.createElementBlock("button",l,[e.renderSlot(r.$slots,"default")])}const d=a(i,[["render",u]]),f=e.defineComponent({__name:"index",props:{percentage:{type:Number,required:!0},isAnimate:{type:Boolean,default:!1},time:{type:Number,default:3e3}},setup(r){const n=r;e.ref(0);let o=e.ref(0);return e.onMounted(()=>{if(n.isAnimate){let s=Math.ceil(n.time/n.percentage),p=setInterval(()=>{o.value+=1,o.value>=n.percentage&&(o.value=n.percentage,clearInterval(p))},s)}}),(s,p)=>{const c=e.resolveComponent("el-progress");return e.openBlock(),e.createBlock(c,e.mergeProps({percentage:e.unref(o)},s.$attrs),null,16,["percentage"])}}});t.DemoButton=d,t.progress=f,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map