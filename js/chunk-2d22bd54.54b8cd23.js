(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22bd54"],{f13f:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navigation",{scopedSlots:t._u([{key:"menu",fn:function(){return[r("v-btn",{attrs:{icon:"",exact:"",replace:"",to:{name:"history"}}},[r("v-icon",[t._v("mdi-arrow-left")])],1)]},proxy:!0},{key:"title",fn:function(){return[r("v-toolbar-title",[t._v("Workout")])]},proxy:!0},{key:"options",fn:function(){return[r("v-menu",{attrs:{"content-class":"elevation-2 c-tile"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[r("v-btn",t._g({attrs:{icon:""}},i),[r("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[r("v-list",{staticClass:"pt-0 pb-0 c-tile"},[r("v-list-item",{on:{click:t.removeWorkout}},[r("v-list-item-title",[t._v("Remove workout")])],1)],1)],1)]},proxy:!0}])}),t.workout?r("v-container",{attrs:{fluid:""}},t._l(t.workout.exercises,(function(e,i){return r("div",[0!==i?r("div",{staticClass:"mb-3"}):t._e(),r("v-card",{staticClass:"c-card",attrs:{tile:""}},[r("v-list",[r("v-list-item",{staticClass:"c-list-item"},[r("v-list-item-avatar",[r("v-avatar",{staticClass:"white--text",attrs:{color:e.color,size:"38"}},[t._v(" "+t._s(e.code)+" ")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.name))]),r("v-list-item-subtitle",[t._v(t._s(e.sets.length)+" sets")])],1)],1),t._l(e.sets,(function(i,o){return r("v-list-item",{staticStyle:{height:"48px"}},[r("v-list-item-avatar",[r("v-avatar",{attrs:{color:"grey--text text--darken-2 c-border-grey",size:"30"}},[t._v(" "+t._s(o+1)+" ")])],1),r("v-list-item-content",[r("v-list-item-title",["body"!==e.type&&"time"!==e.type?r("span",[t._v(t._s(i.weight)+" kg x")]):t._e(),t._v(" "+t._s(i.reps)+" "),"time"===e.type?r("span",[t._v("seconds")]):r("span",[t._v("reps")])])],1)],1)}))],2)],1)],1)})),0):t._e()],1)},o=[],n=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("ac1f"),r("5319"),r("159b"),r("ade3")),s=r("2b0e"),a=r("2f62"),c=r("f4dd");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=s["default"].extend({name:"Workout",computed:v({},Object(a["b"])(["getWorkout"]),{workout:function(){return this.getWorkout(this.$route.params.id)}}),methods:{removeWorkout:function(){this.$store.commit("removeWorkout",this.$route.params.id),this.$router.replace("/")}},components:{Navigation:c["a"]}}),p=u,m=r("2877"),b=r("6544"),d=r.n(b),f=r("8212"),_=r("8336"),y=r("b0af"),k=r("a523"),O=r("132d"),h=r("8860"),w=r("da13"),g=r("8270"),j=r("5d23"),V=r("e449"),x=r("2a7f"),C=Object(m["a"])(p,i,o,!1,null,null,null);e["default"]=C.exports;d()(C,{VAvatar:f["a"],VBtn:_["a"],VCard:y["a"],VContainer:k["a"],VIcon:O["a"],VList:h["a"],VListItem:w["a"],VListItemAvatar:g["a"],VListItemContent:j["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VMenu:V["a"],VToolbarTitle:x["a"]})}}]);
//# sourceMappingURL=chunk-2d22bd54.54b8cd23.js.map