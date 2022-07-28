(function(){"use strict";var e={3650:function(e,n,t){var o=t(9242),r=t(6265),a=t.n(r),c=t(6423),i=t(5708),u=t(3990),d=t(579),f=t(2389),s=t(6216);function p(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function l(e){const n=new Date(1e3*e);return n.toLocaleDateString()}var h=t(3396);function m(e,n){const t=(0,h.up)("router-view");return(0,h.wg)(),(0,h.j4)(t)}var b=t(89);const v={},g=(0,b.Z)(v,[["render",m]]);var y=g,O=t(2483);const j=[{path:"/userboard",component:()=>Promise.all([t.e(979),t.e(796),t.e(712)]).then(t.bind(t,5712)),children:[{path:"home",name:"home",component:()=>t.e(564).then(t.bind(t,139))},{path:"userproducts",name:"userproducts",component:()=>t.e(532).then(t.bind(t,5532))},{path:"userproduct/:id",name:"userproduct",component:()=>t.e(96).then(t.bind(t,7096))},{path:"cart",name:"cart",component:()=>t.e(918).then(t.bind(t,5918))},{path:"favonrite",name:"favonrite",component:()=>t.e(976).then(t.bind(t,3338))},{path:"cartform",name:"cartform",component:()=>t.e(746).then(t.bind(t,2746))},{path:"cartcheck/:id",name:"cartcheck",component:()=>t.e(805).then(t.bind(t,3914))},{path:"cartdone",name:"cartdone",component:()=>t.e(697).then(t.bind(t,7697))},{path:"contact",name:"contact",component:()=>t.e(914).then(t.bind(t,914))},{path:"login",name:"login",component:()=>t.e(609).then(t.bind(t,8609))}]},{path:"/dashboard",name:"admin",component:()=>Promise.all([t.e(979),t.e(796),t.e(394)]).then(t.bind(t,8394)),children:[{path:"dashproduct",name:"dashproduct",component:()=>Promise.all([t.e(979),t.e(352)]).then(t.bind(t,2352))},{path:"order",name:"order",component:()=>Promise.all([t.e(979),t.e(772)]).then(t.bind(t,4772))},{path:"coupon",name:"coupon",component:()=>Promise.all([t.e(979),t.e(293)]).then(t.bind(t,4293))}]},{path:"/:pathMatch(.*)*",redirect:{name:"home"}}],w=(0,O.p7)({history:(0,O.r5)(),scrollBehavior(){return{top:0}},routes:j});var k=w;Object.keys(u.ZP).forEach((e=>{(0,i.aH)(e,u.ZP[e])})),(0,i.jQ)({generateMessage:(0,d.NC)({zh_TW:f}),validateOnInput:!0}),(0,d.i_)("zh_TW");const P=(0,o.ri)(y);P.use(c.Z,a()),P.use(k),P.component("VForm",i.l0),P.component("VField",i.gN),P.component("ErrorMessage",i.Bc),P.component("VLoading",s.Z),P.config.globalProperties.$filters={currency:p,date:l},P.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,a){if(!o){var c=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],a=e[f][2];for(var i=!0,u=0;u<o.length;u++)(!1&a||c>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(i=!1,a<c&&(c=a));if(i){e.splice(f--,1);var d=r();void 0!==d&&(n=d)}}return n}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{96:"a7934c21",293:"541d34ad",352:"574d9619",394:"887420c9",532:"8ff9a04d",564:"094640a9",609:"6dac4951",697:"29da63b1",712:"1e50fa96",746:"68924c00",772:"522c38ea",796:"eb5827f0",805:"938b93e4",914:"67b1bbb0",918:"25522825",976:"e9358d2f",979:"69f071bb"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="cat-house:";t.l=function(o,r,a,c){if(e[o])e[o].push(r);else{var i,u;if(void 0!==a)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var s=d[f];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==n+a){i=s;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+a),i.src=o),e[o]=[r];var p=function(n,t){i.onerror=i.onload=null,clearTimeout(l);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(t)})),n)return n(t)},l=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/Vue-project/dist/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var c=t.p+t.u(n),i=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;i.message="Loading chunk "+n+" failed.\n("+a+": "+c+")",i.name="ChunkLoadError",i.type=a,i.request=c,r[1](i)}};t.l(c,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,c=o[0],i=o[1],u=o[2],d=0;if(c.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(u)var f=u(t)}for(n&&n(o);d<c.length;d++)a=c[d],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(f)},o=self["webpackChunkcat_house"]=self["webpackChunkcat_house"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3650)}));o=t.O(o)})();
//# sourceMappingURL=app.66cb13bf.js.map