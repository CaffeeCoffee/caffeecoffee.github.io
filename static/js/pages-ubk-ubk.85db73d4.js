(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ubk-ubk"],{"4c30":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-container"},t._l(t.list,(function(n,a){return e("v-uni-view",{key:n.id,staticClass:"uni-panel",class:{"pc-hide":-1!==t.hideList.indexOf(n.url)&&t.hasLeftWin}},[e("v-uni-view",{staticClass:"uni-panel-h",class:{"left-win-active":t.leftWinActive===n.url&&t.hasLeftWin,"uni-panel-h-on":n.open},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.triggerCollapse(a,n.id)}}},[e("v-uni-text",{staticClass:"uni-panel-text"},[t._v(t._s(n.name))]),e("v-uni-text",{staticClass:"uni-panel-icon uni-icon",class:n.open?"uni-panel-icon-on":""},[t._v(t._s(n.pages?"":""))])],1),n.open?e("v-uni-view",{staticClass:"uni-panel-c"},t._l(n.pages,(function(n,a){return e("v-uni-view",{key:a,staticClass:"uni-navigate-item",class:{"left-win-active":t.leftWinActive===n.url&&t.hasLeftWin,"pc-hide":-1!==t.hideList.indexOf(n.url)&&t.hasLeftWin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetailPage(n)}}},[e("v-uni-text",{staticClass:"uni-navigate-text"},[t._v(t._s(n.name?n.name:n))]),e("v-uni-text",{staticClass:"uni-navigate-icon uni-icon"},[t._v("")])],1)})),1):t._e()],1)})),1)},r=[]},"4cf7":function(t,n,e){"use strict";var a=e("4ea4");e("c975"),e("ac1f"),e("1276"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("b85c")),r={props:{hasLeftWin:{type:Boolean},leftWinActive:{type:String}},data:function(){return{hideList:["ucharts","nav-city-dropdown"],list:[{name:"球王榜",url:"basketball-king"},{name:"赛程表",url:"basketball-game"}]}},watch:{$route:{immediate:!0,handler:function(t){if(t.matched.length){var n,e=t.path.split("/")[3],a=(0,i.default)(this.list);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(Array.isArray(r.pages)){var o,l=(0,i.default)(r.pages);try{for(l.s();!(o=l.n()).done;){var f=o.value;(f===e||f.url&&f.url===e)&&(r.open=!0)}}catch(u){l.e(u)}finally{l.f()}}}}catch(u){a.e(u)}finally{a.f()}}}}},methods:{triggerCollapse:function(t,n){if(this.list[t].pages)for(var e=0;e<this.list.length;++e)this.list[e].open=t===e&&!this.list[e].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(t){var n=t.url?t.url:t,e=~n.indexOf("platform")?n:"/pages/"+n+"/"+n;return this.hasLeftWin?uni.reLaunch({url:e}):uni.navigateTo({url:e}),!1}}};n.default=r},7795:function(t,n,e){var a=e("8d44");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("6ad1deac",a,!0,{sourceMap:!1,shadowMode:!1})},8276:function(t,n,e){"use strict";e.r(n);var a=e("4cf7"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"8ba5":function(t,n,e){"use strict";e.r(n);var a=e("4c30"),i=e("8276");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("9156");var o,l=e("f0c5"),f=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"67b5b6af",null,!1,a["a"],o);n["default"]=f.exports},"8d44":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"uni-page-body[data-v-67b5b6af]{min-height:100%;height:auto}\n\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\n.uni-icon[data-v-67b5b6af]{font-family:uniicons;font-weight:400}.uni-container[data-v-67b5b6af]{padding:15px;background-color:#f8f8f8}.uni-header-logo[data-v-67b5b6af]{\ndisplay:flex;\npadding:15px 15px;flex-direction:column;justify-content:center;align-items:center;margin-top:%?10?%}.uni-header-image[data-v-67b5b6af]{width:80px;height:80px}.uni-hello-text[data-v-67b5b6af]{margin-bottom:20px}.hello-text[data-v-67b5b6af]{color:#7a7e83;font-size:14px;line-height:20px}.hello-link[data-v-67b5b6af]{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel[data-v-67b5b6af]{margin-bottom:12px}.uni-panel-h[data-v-67b5b6af]{\ndisplay:flex;\nbackground-color:#fff;flex-direction:row!important;\n\t/* justify-content: space-between !important; */align-items:center!important;padding:12px;\ncursor:pointer\n}\n/*\n.uni-panel-h:active {\n    background-color: #f8f8f8;\n}\n */.uni-panel-h-on[data-v-67b5b6af]{background-color:#f0f0f0}.uni-panel-text[data-v-67b5b6af]{flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon[data-v-67b5b6af]{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);transition-duration:0s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on[data-v-67b5b6af]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item[data-v-67b5b6af]{\ndisplay:flex;\nflex-direction:row;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px;\ncursor:pointer\n}.uni-navigate-item[data-v-67b5b6af]:active{background-color:#f8f8f8}.uni-navigate-text[data-v-67b5b6af]{flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon[data-v-67b5b6af]{margin-left:15px;color:#999;font-size:14px;font-weight:400}",""]),t.exports=n},9156:function(t,n,e){"use strict";var a=e("7795"),i=e.n(a);i.a},b85c:function(t,n,e){"use strict";e("a4d3"),e("e01a"),e("d28b"),e("d3b7"),e("3ca3"),e("ddb0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=r;var a=i(e("06c5"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,n){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=(0,a.default)(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==e["return"]||e["return"]()}finally{if(f)throw o}}}}}}]);