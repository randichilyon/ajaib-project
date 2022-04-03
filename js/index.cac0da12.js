(function(){"use strict";var e={6285:function(e,t,n){var r=n(1357),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n(1001),u={},s=(0,i.Z)(u,a,o,!1,null,null,null),c=s.exports,l=n(2809);const f=()=>n.e(515).then(n.bind(n,3354));r["default"].use(l.Z);const d=[{path:"/",name:"home",component:f}],p=new l.Z({mode:"history",base:"/ajaib-project/",routes:d});var m=p,b=n(4665),g=n(6166),h=n.n(g);const v={api:{basePath:"https://randomuser.me/api/",tableData:e=>`?keyword=${e.keyword}&gender=${e.gender}&sortBy=${e.sortBy}&sortOrder=${e.sortOrder}&page=${e.page}&pageSize=${e.pageSize}&results=50&seeds=foobar`},app:{pages:{home:"/"}},getApiPath:e=>`${v.api.basePath}${e}`};var y=v;const j="ID",w={"Cache-Control":"no-cache",language:j},k=e=>t=>{const n=t.response||t;e&&e({status:n.status,statusText:n.status,body:n.data,headers:n.headers||t.config&&t.config.headers||{},originalResponse:t})},O=(e,t,n,r={})=>{h().get(y.getApiPath(e),{headers:{...w,...r}}).then(k(t)).catch(k(n))};var D={getData(e,t,n){O(y.api.tableData(n),e,t)}};const C={isMobile:!1,tableData:[]},P={isMobile:e=>e.isMobile,tableData:e=>e.tableData},S={setIsMobile(e,t){e.isMobile=t},setTableData(e,t){e.tableData=t}},T={setMobileDeviceStatus:({commit:e},t)=>{e("setIsMobile",t)},getData:({commit:e},{success:t,fail:n,payload:r}={})=>{D.getData((n=>{const r=n.body.results?.map((e=>{const t=`${e?.name?.first} ${e?.name?.last}`;return{username:e?.login?.username,name:t,gender:e?.gender,email:e?.email,registeredDate:e?.registered?.date}}));e("setTableData",r),t&&t(n)}),n,r)}};var E={namespaced:!0,state:C,mutations:S,actions:T,getters:P};r["default"].use(b.ZP);const $=new b.ZP.Store({state:E.state,mutations:E.mutations,actions:E.actions,getters:E.getters,strict:!1,modules:{}});var A=$,_=n(8209),M=n.n(_);n(243);r["default"].use(M());const x={};var N=new(M())(x);r["default"].config.productionTip=!1,new r["default"]({router:m,store:A,vuetify:N,render:e=>e(c)}).$mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,o<i&&(i=o));if(u){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{515:"p-data-table-page",660:"c-loader-mask"}[e]+"."+{515:"bcf105f7",660:"41cf3c1b"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{515:"p-data-table-page",660:"c-loader-mask"}[e]+"."+{515:"650caf6e",660:"4baebec1"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ajaib-project:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var u,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[a];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/ajaib-project/"}(),function(){var e=function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return a();e(r,u,a,o)}))},a={826:0};n.f.miniCss=function(e,t){var n={515:1,660:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={826:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(s)var l=s(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunkajaib_project"]=self["webpackChunkajaib_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6285)}));r=n.O(r)})();
//# sourceMappingURL=index.cac0da12.js.map