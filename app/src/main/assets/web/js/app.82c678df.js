(function(e){function t(t){for(var r,a,s=t[0],c=t[1],i=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&f.push(u[a][0]),u[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==u[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},u={app:0},o=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"86761f0c"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"fefde1ec"}[e]+".css",u=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===u))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],l=i.getAttribute("data-href");if(l===r||l===u)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}u[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},u=[],o={name:"app",components:{}},s=o,c=n("2877"),i=Object(c["a"])(s,a,u,!1,null,null,null),l=i.exports,f=(n("d3b7"),n("8c4f"));r["default"].use(f["a"]);var p=[{path:"/",name:"/",component:function(){return n.e("about").then(n.bind(null,"f368"))}},{path:"/shelf",name:"shelf",component:function(){return n.e("about").then(n.bind(null,"f368"))}},{path:"/book",name:"book",component:function(){return n.e("about").then(n.bind(null,"8bf33"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],d=new f["a"]({mode:"history",base:"/",routes:p}),b=d,h=n("2f62");r["default"].use(h["a"]);var m=new h["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=(n("bd49"),n("450d"),n("18ff")),g=n.n(v),w=(n("960d"),n("defb")),y=n.n(w),x=(n("cb70"),n("b370")),k=n.n(x),O=(n("a7cc"),n("df33")),j=n.n(O),R=(n("1760"),n("9883")),P=n.n(R),_=(n("6611"),n("e772")),E=n.n(_),S=(n("1f1a"),n("4e4b")),T=n.n(S),C=(n("10cb"),n("f3ad")),A=n.n(C),L=(n("e3ea"),n("7bc3")),N=n.n(L),$=(n("1951"),n("eedf")),M=n.n($),B=(n("be4f"),n("896a")),q=n.n(B),D=q.a,J=D.directive,U=D.service;r["default"].use(M.a),r["default"].use(N.a),r["default"].use(A.a),r["default"].use(T.a),r["default"].use(E.a),r["default"].use(J),r["default"].use(P.a),r["default"].use(j.a),r["default"].use(k.a),r["default"].use(y.a),r["default"].use(g.a),r["default"].prototype.$loading=U;var F=n("bc3a"),H=n.n(F);function I(e){return new Promise((function(t,n){H.a.get("/api"+e.url,{params:e.para}).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}function K(e){K.installed||(K.installed=!0,e.prototype.$get=I)}H.a.defaults.timeout=15e3,H.a.defaults.baseUrl="";var z={install:K,version:"0.0.1"},G=z,Q=(n("96cf"),function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(I({url:"/user"}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))}),V=function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(I({url:"/bookshelves"}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},W=function(e){var t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(I({url:"/books",para:{bookshelf:e}}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}))},X=function(e){var t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(I({url:"/book",para:{id:e}}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}))},Y=function(e){var t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(I({url:"/book/catalog",para:{id:e}}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}))},Z=function(e,t){var n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(I({url:"/book/chapter",para:{id:e,href:t}}));case 2:return n=r.sent,r.abrupt("return",n);case 4:case"end":return r.stop()}}))},ee={user:Q,bookshelves:V,books:W,book:X,catalog:Y,chapter:Z};function te(e){te.installed||(te.installed=!0,e.prototype.$api=ee)}var ne={install:te,version:"0.0.1"},re=ne;r["default"].config.productionTip=!1,r["default"].use(G),r["default"].use(re),new r["default"]({router:b,store:m,render:function(e){return e(l)}}).$mount("#app")}});