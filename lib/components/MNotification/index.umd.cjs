(function(t,l){typeof exports=="object"&&typeof module<"u"?module.exports=l(require("element-plus")):typeof define=="function"&&define.amd?define(["element-plus"],l):(t=typeof globalThis<"u"?globalThis:t||self,t.index=l(t.elementPlus))})(this,function(t){"use strict";const l=(e,s)=>{for(let n in e)/[A-Z]/.test(n[0])&&(e[n].name=e[n].name.replace("El","M"));return e.name.includes("El")&&(e.name&&(e.name=e.name.replace("El","M")),e.install=n=>{const i=s||e.name||e.__name;n.component(i,e),f(n,e)}),e},f=(e,s)=>{Object.entries(s).forEach(([n,i])=>{i.install&&i.name.charAt(0)==="M"&&e.component(i.name,i)})};return l(t.ElNotification)});
//# sourceMappingURL=index.umd.cjs.map
