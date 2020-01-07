(function(t){function e(e){for(var o,i,c=e[0],u=e[1],l=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,c=1;c<r.length;c++){var u=r[c];0!==n[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={app:0},a=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/workout-log/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-content",[r("Navigation"),r("router-view")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{attrs:{color:"primary",dark:"",elevation:"1"}},[r("v-toolbar-title",[t._v("Workout Log")]),r("v-spacer"),r("v-btn",{attrs:{to:{name:"workout_add"},icon:""}},[r("v-icon",[t._v("add_circle")])],1)],1)},c=[],u=o["default"].extend({name:"Navigation"}),l=u,s=r("2877"),d=r("6544"),f=r.n(d),p=r("8336"),v=r("132d"),b=r("2fa4"),m=r("71d9"),g=r("2a7f"),w=Object(s["a"])(l,i,c,!1,null,null,null),O=w.exports;f()(w,{VBtn:p["a"],VIcon:v["a"],VSpacer:b["a"],VToolbar:m["a"],VToolbarTitle:g["a"]});var h=o["default"].extend({name:"App",components:{Navigation:O}}),k=h,y=r("7496"),j=r("a75b"),_=Object(s["a"])(k,n,a,!1,null,null,null),x=_.exports;f()(_,{VApp:y["a"],VContent:j["a"]});var V=r("9483");Object(V["a"])("".concat("/workout-log/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var P=r("8c4f"),S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},t._l(t.workouts,(function(e){return r("v-card",{staticClass:"mb-3",attrs:{to:{name:"workout_edit",params:{id:e.id}},elevation:"1"}},[r("v-card-title",[t._v(" "+t._s(t._f("moment")(e.date,"calendar"))+" "),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(r){return r.preventDefault(),t.remove(e)}}},[r("v-icon",{attrs:{color:"error"}},[t._v("remove_circle")])],1)],1),r("v-list",{attrs:{dense:""}},[r("v-list-item",[r("v-list-item-content",[t._v("Body Weight")]),r("v-list-item-content",[t._v(t._s(e.bodyWeight)+" kg")])],1)],1)],1)})),1)},W=[],C=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),$=r("2f62");function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){Object(C["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var D=o["default"].extend({name:"Home",computed:T({},Object($["c"])(["workouts"])),methods:{remove:function(t){this.$store.commit("remove",t)}}}),F=D,A=r("b0af"),I=r("99d9"),N=r("a523"),B=r("8860"),J=r("da13"),L=r("5d23"),M=Object(s["a"])(F,S,W,!1,null,null,null),q=M.exports;f()(M,{VBtn:p["a"],VCard:A["a"],VCardTitle:I["b"],VContainer:N["a"],VIcon:v["a"],VList:B["a"],VListItem:J["a"],VListItemContent:L["a"],VSpacer:b["a"]});var z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-card",{attrs:{elevation:"1"}},[r("v-card-title",[t._v(" Add Workout ")]),r("v-card-text",[r("WorkoutForm")],1)],1)],1)},H=[],G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",[r("v-text-field",{attrs:{label:"Body Weight (kg)",type:"number",step:"0.1",required:""},model:{value:t.workout.bodyWeight,callback:function(e){t.$set(t.workout,"bodyWeight",e)},expression:"workout.bodyWeight"}}),r("v-btn",{staticClass:"mr-3",attrs:{color:"primary"},on:{click:t.save}},[t._v(" Save ")]),r("v-btn",{attrs:{link:"",to:"/"}},[t._v(" Cancel ")])],1)},K=[],Q=r("11c1"),R=r.n(Q),U=o["default"].extend({name:"WorkoutForm",props:{workout:{default:function(){return{id:R()(),date:new Date}}}},methods:{save:function(){this.$store.commit("save",this.$props.workout),this.$router.push("/")}}}),X=U,Y=r("4bd4"),Z=r("8654"),tt=Object(s["a"])(X,G,K,!1,null,null,null),et=tt.exports;f()(tt,{VBtn:p["a"],VForm:Y["a"],VTextField:Z["a"]});var rt=o["default"].extend({name:"AddWorkout",components:{WorkoutForm:et}}),ot=rt,nt=Object(s["a"])(ot,z,H,!1,null,null,null),at=nt.exports;f()(nt,{VCard:A["a"],VCardText:I["a"],VCardTitle:I["b"],VContainer:N["a"]});var it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-card",{attrs:{elevation:"1"}},[r("v-card-title",[t._v(" Edit Workout ")]),r("v-card-text",[r("WorkoutForm",{attrs:{workout:t.workout}})],1)],1)],1)},ct=[];function ut(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function lt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ut(Object(r),!0).forEach((function(e){Object(C["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ut(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var st=o["default"].extend({name:"EditWorkout",computed:lt({},Object($["b"])(["getWorkout"]),{workout:function(){return this.getWorkout(this.$route.params.id)}}),components:{WorkoutForm:et}}),dt=st,ft=Object(s["a"])(dt,it,ct,!1,null,null,null),pt=ft.exports;f()(ft,{VCard:A["a"],VCardText:I["a"],VCardTitle:I["b"],VContainer:N["a"]}),o["default"].use(P["a"]);var vt=[{path:"/",component:q},{name:"workout_add",path:"/workout/add",component:at},{name:"workout_edit",path:"/workout/:id/edit",component:pt}],bt=new P["a"]({routes:vt}),mt=bt;r("7db0"),r("c740"),r("a434");o["default"].use($["a"]);var gt=new $["a"].Store({state:{workouts:Array()},mutations:{initialize:function(t){var e=localStorage.getItem("workouts");e&&this.replaceState(Object.assign(t,JSON.parse(e)))},save:function(t,e){var r=t.workouts.findIndex((function(t){return t.id==e.id}));-1!==r?t.workouts[r]=e:t.workouts.push(e)},remove:function(t,e){var r=t.workouts.findIndex((function(t){return t.id==e.id}));-1!==r&&t.workouts.splice(r,1)}},getters:{getWorkout:function(t){return function(e){return t.workouts.find((function(t){return t.id===e}))}}},actions:{},modules:{}}),wt=r("ce5b"),Ot=r.n(wt),ht=r("2ead"),kt=r.n(ht);r("bf40"),r("d1e78");o["default"].use(Ot.a),o["default"].use(kt.a);var yt=new Ot.a({icons:{iconfont:"md"}});o["default"].config.productionTip=!1,gt.subscribe((function(t,e){localStorage.setItem("workouts",JSON.stringify(e))})),new o["default"]({router:mt,store:gt,vuetify:yt,render:function(t){return t(x)},beforeCreate:function(){this.$store.commit("initialize")}}).$mount("#app")}});
//# sourceMappingURL=app.398177c2.js.map