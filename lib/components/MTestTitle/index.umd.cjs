(function(a,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(a=typeof globalThis<"u"?globalThis:a||self,n(a.index={},a.Vue))})(this,function(a,n){"use strict";const o=(e,l)=>{for(let t in e)/[A-Z]/.test(t[0])&&(e[t].name=e[t].name.replace("El","M"));return e.name.includes("El")&&(e.name&&(e.name=e.name.replace("El","M")),e.install=t=>{const s=l||e.name||e.__name;t.component(s,e),c(t,e)}),e},c=(e,l)=>{Object.entries(l).forEach(([t,s])=>{s.install&&s.name.charAt(0)==="M"&&e.component(s.name,s)})},f={type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:["default","small","large"],default:""}},u=n.defineComponent({name:"ElTestTitle",__name:"index",props:f,setup(e,{expose:l}){const t=e;l({});const s=new Map([["",""],["primary","el-text--primary"],["success","el-text--success"],["info","el-text--info"],["warning","el-text--warning"],["danger","el-text--danger"]]),r=new Map([["",""],["default","el-text--default"],["small","el-text--small"],["large","el-text--large"]]),d=n.computed(()=>["el-text",s.get(t.type),r.get(t.size)]);return(p,g)=>(n.openBlock(),n.createElementBlock("span",{class:n.normalizeClass(d.value)},[n.renderSlot(p.$slots,"default",{},void 0,!0)],2))}}),_="",i=o(((e,l)=>{const t=e.__vccOpts||e;for(const[s,r]of l)t[s]=r;return t})(u,[["__scopeId","data-v-fc51bb6a"]]));a.MTestTitle=i,a.default=i,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=index.umd.cjs.map
