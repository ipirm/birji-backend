(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({login:"login",user:"user"}[e]||e)+"."+{login:"0cd28d10",user:"85ff575f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={login:1,user:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({login:"login",user:"user"}[e]||e)+"."+{login:"e66db3be",user:"f205bdd9"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u={name:"App",components:{}},c=u,i=(n("5c0b"),n("2877")),s=Object(i["a"])(c,o,a,!1,null,null,null),l=s.exports,f=(n("d3b7"),n("8c4f")),p=function(){return n.e("login").then(n.bind(null,"282a"))},d=function(){return n.e("user").then(n.bind(null,"3836"))};r["default"].use(f["a"]);var g=new f["a"]({mode:"history",routes:[{path:"/login",component:p},{path:"/users",component:d}]}),h=g,v=n("2f62"),m=(n("4de4"),n("96cf"),n("1da1")),b=(n("99af"),n("07ac"),n("d4ec")),y=n("bee2"),w=n("53ca"),E="https://birja-backend.herokuapp.com/api",k=n("bc3a"),j=n.n(k);function O(){return{headers:{"Content-Type":"application/json"}}}var _=function(e){return new Promise((function(t,n){e.then((function(e){return t(e)})).catch((function(e){return n(S(e))}))}))},S=function(e){if(!e.response)return{_e:"Unknown Error"};if(400!==e.response.status)return{_e:e.response.statusText};var t=e.response.data;return"object"!==Object(w["a"])(t)||Object.values(t).filter((function(e){return!Array.isArray(e)})).length>0?{_e:"Unknown server response"}:e.response.data},T=function(){function e(){Object(b["a"])(this,e)}return Object(y["a"])(e,null,[{key:"get",value:function(e){return _(j.a.get("".concat(E,"/").concat(e),O()))}},{key:"getPublic",value:function(e){return _(j.a.get("".concat(E,"/").concat(e)))}},{key:"post",value:function(e,t){return _(j.a.post("".concat(E,"/").concat(e),t,O()))}},{key:"patch",value:function(e,t){return _(j.a.patch("".concat(E,"/").concat(e),t,O()))}},{key:"delete",value:function(e){return _(j.a.delete("".concat(E,"/").concat(e),O()))}},{key:"put",value:function(e,t){return _(j.a.put("".concat(E,"/").concat(e),t))}},{key:"postFormData",value:function(e,t){return _(j.a.post("".concat(E,"/").concat(e),t))}},{key:"putJson",value:function(e,t){return _(j.a.put("".concat(E,"/").concat(e),t,O()))}}]),e}(),x={namespaced:!0,state:{users:[],pages:null,total:null},mutations:{SET_USERS:function(e,t){e.users=t.docs,e.pages=t.pages,e.total=t.total},DELETE_USER:function(e,t){return e.users=e.users.filter((function(e){return e._id!==t}))}},actions:{getUsers:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,T.get("users?page=".concat(t,"&per_page=10"));case 3:o=n.sent,r("SET_USERS",o.data);case 5:case"end":return n.stop()}}),n)})))()},deleteUser:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,T.post("user",JSON.stringify({id:t}));case 3:r("DELETE_USER",t);case 4:case"end":return n.stop()}}),n)})))()}}};r["default"].use(v["a"]);var P=new v["a"].Store({modules:{user:x}}),A=n("43f9"),U=n.n(A);n("51de"),n("d69d");r["default"].config.productionTip=!1,r["default"].use(U.a),new r["default"]({router:h,store:P,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.2e47544f.js.map