(function(){"use strict";var e={6285:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(1357),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=n(1001),u={},c=(0,i.Z)(u,o,a,!1,null,null,null),s=c.exports,l=(n(1539),n(8783),n(3948),n(2809)),f=function(){return n.e(515).then(n.bind(n,3354))};r["default"].use(l.Z);var d=[{path:"/",name:"home",component:f}],p=new l.Z({mode:"history",base:"/",routes:d}),v=p,g=n(4665),h=(n(1249),n(2222),n(8309),n(3019)),m=n(6166),b=n.n(m),y={api:{basePath:"https://randomuser.me/api/",tableData:function(e){return"?keyword=".concat(e.keyword,"&gender=").concat(e.gender,"&sortBy=").concat(e.sortBy,"&sortOrder=").concat(e.sortOrder,"&page=").concat(e.page,"&pageSize=").concat(e.pageSize,"&results=50&seeds=foobar")}},app:{pages:{home:"/"}},getApiPath:function(e){return"".concat(y.api.basePath).concat(e)}},w=y,k="ID",j={"Cache-Control":"no-cache",language:k},O=function(e){return function(t){var n=t.response||t;e&&e({status:n.status,statusText:n.status,body:n.data,headers:n.headers||t.config&&t.config.headers||{},originalResponse:t})}},D=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};b().get(w.getApiPath(e),{headers:(0,h.Z)((0,h.Z)({},j),r)}).then(O(t)).catch(O(n))},C={getData:function(e,t,n){D(w.api.tableData(n),e,t)}},P={isMobile:!1,tableData:[]},S={isMobile:function(e){return e.isMobile},tableData:function(e){return e.tableData}},T={setIsMobile:function(e,t){e.isMobile=t},setTableData:function(e,t){e.tableData=t}},E={setMobileDeviceStatus:function(e,t){var n=e.commit;n("setIsMobile",t)},getData:function(e){var t=e.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.success,o=n.fail,a=n.payload;C.getData((function(e){var n,o=null===(n=e.body.results)||void 0===n?void 0:n.map((function(e){var t,n,r,o,a="".concat(null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.first," ").concat(null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n.last);return{username:null===e||void 0===e||null===(r=e.login)||void 0===r?void 0:r.username,name:a,gender:null===e||void 0===e?void 0:e.gender,email:null===e||void 0===e?void 0:e.email,registeredDate:null===e||void 0===e||null===(o=e.registered)||void 0===o?void 0:o.date}}));t("setTableData",o),r&&r(e)}),o,a)}},A={namespaced:!0,state:P,mutations:T,actions:E,getters:S};r["default"].use(g.ZP);var _=new g.ZP.Store({state:A.state,mutations:A.mutations,actions:A.actions,getters:A.getters,strict:!1,modules:{}}),M=_,x=n(8209),N=n.n(x);n(243);r["default"].use(N());var Z={},B=new(N())(Z);r["default"].config.productionTip=!1,new r["default"]({router:v,store:M,vuetify:B,render:function(e){return e(s)}}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{515:"p-data-table-page",660:"c-loader-mask"}[e]+"-legacy."+{515:"38d7b365",660:"41cf3c1b"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{515:"p-data-table-page",660:"c-loader-mask"}[e]+"."+{515:"650caf6e",660:"4baebec1"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ajaib-project:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,o,a)}))},o={826:0};n.f.miniCss=function(e,t){var n={515:1,660:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={826:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkajaib_project"]=self["webpackChunkajaib_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6285)}));r=n.O(r)})();
//# sourceMappingURL=index-legacy.882480f7.js.map