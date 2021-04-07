(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1090:function(t,e,n){"use strict";var a=n(755);n.n(a).a},1091:function(t,e,n){(e=n(341)(!1)).push([t.i,".settings-hint[data-v-2f3ab19f]{margin-top:-12px;margin-bottom:6px;color:var(--color-text-maxcontrast)}label[data-v-2f3ab19f]{padding-right:12px}\n",""]),t.exports=e},1200:function(t,e,n){"use strict";var a=n(792);n.n(a).a},1201:function(t,e,n){(e=n(341)(!1)).push([t.i,".settings-hint[data-v-26f412d0]{margin-top:-12px;margin-bottom:6px;color:var(--color-text-maxcontrast)}textarea[data-v-26f412d0]{display:block;width:400px;max-width:85vw;height:100px;resize:none}.primary[data-v-26f412d0]{padding-left:26px;background-position:6px}.primary[data-v-26f412d0]:after{left:14px}.button-text[data-v-26f412d0]{background-color:transparent;border:none;color:var(--color-text-maxcontrast);font-weight:normal}.button-text[data-v-26f412d0]:hover,.button-text[data-v-26f412d0]:focus{color:var(--color-main-text)}\n",""]),t.exports=e},1202:function(t,e,n){"use strict";var a=n(793);n.n(a).a},1203:function(t,e,n){(e=n(341)(!1)).push([t.i,".button.icon-rename[data-v-1afd0436]{background-color:transparent;border:none;opacity:0.3}.button.icon-rename[data-v-1afd0436]:hover,.button.icon-rename[data-v-1afd0436]:focus{opacity:1}\n",""]),t.exports=e},1359:function(t,e,n){"use strict";n.r(e);var a=n(749),o=n.n(a),s=n(666),i=n.n(s),r=n(822),u=n(18),l={name:"EditorSettings",props:{account:{type:Object,required:!0}},data:function(){return{mode:this.account.editorMode}},watch:{mode:function(t,e){var n=this;this.$store.dispatch("patchAccount",{account:this.account,data:{editorMode:t}}).then((function(){u.a.info("editor mode updated")})).catch((function(t){throw u.a.error("could not update editor mode",{error:t}),n.editorMode=e,t}))}}},c=(n(1090),n(35)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("h2",[t._v(t._s(t.t("mail","Writing mode")))]),t._v(" "),n("p",{staticClass:"settings-hint"},[t._v("\n\t\t"+t._s(t.t("mail","Preferred writing mode for new messages and replies."))+"\n\t")]),t._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],staticClass:"radio",attrs:{id:"plaintext",type:"radio",value:"plaintext"},domProps:{checked:t._q(t.mode,"plaintext")},on:{change:function(e){t.mode="plaintext"}}}),t._v(" "),n("label",{class:{primary:"plaintext"===t.mode},attrs:{for:"plaintext"}},[t._v("\n\t\t\t"+t._s(t.t("mail","Plain text"))+"\n\t\t")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],staticClass:"radio",attrs:{id:"richtext",type:"radio",value:"richtext"},domProps:{checked:t._q(t.mode,"richtext")},on:{change:function(e){t.mode="richtext"}}}),t._v(" "),n("label",{class:{primary:"richtext"===t.mode},attrs:{for:"richtext"}},[t._v("\n\t\t\t"+t._s(t.t("mail","Rich text"))+"\n\t\t")])])])}),[],!1,null,"2f3ab19f",null).exports,m=n(665),p=n(823),f=n(786),v={name:"SignatureSettings",components:{TextEditor:p.a},props:{account:{type:Object,required:!0}},data:function(){var t=this.account.signature||"";return!t.includes("\n")&&!t.includes("\r")||t.includes(">")||(t=Object(f.b)(t),u.a.info("Converted plain text signature to HTML")),{loading:!1,signature:t}},methods:{deleteSignature:function(){var t=this;this.loading=!0,this.$store.dispatch("updateAccountSignature",{account:this.account,signature:null}).then((function(){u.a.info("signature deleted"),t.signature="",t.loading=!1})).catch((function(t){throw u.a.error("could not delete account signature",{error:t}),t}))},saveSignature:function(){var t=this;this.loading=!0,this.$store.dispatch("updateAccountSignature",{account:this.account,signature:this.signature}).then((function(){u.a.info("signature updated"),t.loading=!1})).catch((function(t){throw u.a.error("could not update account signature",{error:t}),t}))}}},g=(n(1200),Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("h2",[t._v(t._s(t.t("mail","Signature")))]),t._v(" "),n("p",{staticClass:"settings-hint"},[t._v("\n\t\t"+t._s(t.t("mail","A signature is added to the text of new messages and replies."))+"\n\t")]),t._v(" "),n("p",[n("TextEditor",{attrs:{html:!0,placeholder:t.t("mail","Signature …")},model:{value:t.signature,callback:function(e){t.signature=e},expression:"signature"}})],1),t._v(" "),n("p",[n("button",{staticClass:"primary",class:t.loading?"icon-loading-small-dark":"icon-checkmark-white",attrs:{disabled:t.loading},on:{click:t.saveSignature}},[t._v("\n\t\t\t"+t._s(t.t("mail","Save signature"))+"\n\t\t")]),t._v(" "),t.signature?n("button",{staticClass:"button-text",on:{click:t.deleteSignature}},[t._v("\n\t\t\t"+t._s(t.t("mail","Delete"))+"\n\t\t")]):t._e()])])}),[],!1,null,"26f412d0",null).exports);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _={name:"AccountSettings",components:{AccountForm:r.a,AppContent:o.a,Content:i.a,EditorSettings:d,Navigation:m.a,SignatureSettings:g},data:function(){var t=this.$store.getters.getAccount(this.$route.params.accountId);return{account:t,signature:t.signature}},computed:{menu:function(){return this.buildMenu()},displayName:function(){return this.$store.getters.getAccount(this.$route.params.accountId).name},email:function(){return this.$store.getters.getAccount(this.$route.params.accountId).emailAddress}},methods:{onSave:function(t){return u.a.log("saving data",{data:t}),this.$store.dispatch("updateAccount",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{accountId:this.$route.params.accountId})).then((function(t){return t})).catch((function(t){throw u.a.error("account update failed:",{error:t}),t}))}}},x=(n(1202),Object(c.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Content",{attrs:{"app-name":"mail"}},[n("Navigation"),t._v(" "),n("AppContent",[n("div",{staticClass:"section"},[n("h2",[t._v(t._s(t.t("mail","Account settings")))]),t._v(" "),n("p",[n("strong",[t._v(t._s(t.displayName))]),t._v(" <"+t._s(t.email)+">\n\t\t\t\t"),t.account.provisioned?t._e():n("a",{staticClass:"button icon-rename",attrs:{href:"#account-form",title:t.t("mail","Change name")}})])]),t._v(" "),n("SignatureSettings",{attrs:{account:t.account}}),t._v(" "),n("EditorSettings",{attrs:{account:t.account}}),t._v(" "),t.account.provisioned?t._e():n("div",{staticClass:"section"},[n("h2",[t._v(t._s(t.t("mail","Mail server")))]),t._v(" "),n("div",{attrs:{id:"mail-settings"}},[n("AccountForm",{key:t.account.accountId,attrs:{"display-name":t.displayName,email:t.email,save:t.onSave,account:t.account}})],1)])],1)],1)}),[],!1,null,"1afd0436",null));e.default=x.exports},615:function(t,e,n){var a=n(752);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(342).default)("2f692375",a,!0,{})},616:function(t,e,n){var a=n(754);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(342).default)("f6eff682",a,!0,{})},626:function(t,e,n){var a=n(785);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(342).default)("65d6dcfb",a,!0,{})},750:function(t,e,n){var a;"undefined"!=typeof self&&self,a=function(){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){t.exports=!n(6)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e,n,a,o){var s,i=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(s=t,i=t.default);var u,l="function"==typeof i?i.options:i;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),a&&(l._scopeId=a),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):n&&(u=n),u){var c=l.functional,d=c?l.render:l.beforeCreate;c?l.render=function(t,e){return u.call(e),d(t,e)}:l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:s,exports:i,options:l}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var a=n(23),o=n(24),s=n(26),i=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(a(t),e=s(e,!0),a(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var a,o,s;o=[e,n(8),n(11)],void 0===(s="function"==typeof(a=function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=t.Tab=void 0;var a=s(e),o=s(n);function s(t){return t&&t.__esModule?t:{default:t}}t.default={install:function(t){t.component("tab",a.default),t.component("tabs",o.default)}},t.Tab=a.default,t.Tabs=o.default})?a.apply(e,o):a)||(t.exports=s)},function(t,e,n){var a=n(2)(n(9),n(10),null,null,null);t.exports=a.exports},function(t,e,n){var a,o,s;o=[e],void 0===(s="function"==typeof(a=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{id:{default:null},name:{required:!0},prefix:{default:""},suffix:{default:""},isDisabled:{default:!1}},data:function(){return{isActive:!1,isVisible:!0}},computed:{header:function(){return this.prefix+this.name+this.suffix},computedId:function(){return this.id?this.id:this.name.toLowerCase().replace(/ /g,"-")},hash:function(){return this.isDisabled?"#":"#"+this.computedId}}}})?a.apply(e,o):a)||(t.exports=s)},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("section",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}],staticClass:"tabs-component-panel",attrs:{"aria-hidden":!this.isActive,id:this.computedId,role:"tabpanel"}},[this._t("default")],2)},staticRenderFns:[]}},function(t,e,n){var a=n(2)(n(12),n(29),null,null,null);t.exports=a.exports},function(t,e,n){var a,o,s;o=[e,n(13)],void 0===(s="function"==typeof(a=function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=(n=e)&&n.__esModule?n:{default:n};t.default={props:{cacheLifetime:{default:5},options:{type:Object,required:!1,default:function(){return{useUrlFragment:!0,defaultTabHash:null}}}},data:function(){return{tabs:[],activeTabHash:"",activeTabIndex:0,lastActiveTabHash:""}},computed:{storageKey:function(){return"vue-tabs-component.cache."+window.location.host+window.location.pathname}},created:function(){this.tabs=this.$children},mounted:function(){var t=this;if(window.addEventListener("hashchange",(function(){return t.selectTab(window.location.hash)})),this.findTab(window.location.hash))this.selectTab(window.location.hash);else{var e=a.default.get(this.storageKey);this.findTab(e)?this.selectTab(e):null!==this.options.defaultTabHash&&this.findTab("#"+this.options.defaultTabHash)?this.selectTab("#"+this.options.defaultTabHash):this.tabs.length&&this.selectTab(this.tabs[0].hash)}},methods:{findTab:function(t){return this.tabs.find((function(e){return e.hash===t}))},selectTab:function(t,e){e&&!this.options.useUrlFragment&&e.preventDefault();var n=this.findTab(t);n&&(n.isDisabled?e.preventDefault():this.lastActiveTabHash!==n.hash?(this.tabs.forEach((function(t){t.isActive=t.hash===n.hash})),this.$emit("changed",{tab:n}),this.activeTabHash=n.hash,this.activeTabIndex=this.getTabIndex(t),this.lastActiveTabHash=this.activeTabHash=n.hash,a.default.set(this.storageKey,n.hash,this.cacheLifetime)):this.$emit("clicked",{tab:n}))},setTabVisible:function(t,e){var n=this.findTab(t);n&&(n.isVisible=e,n.isActive&&(n.isActive=e,this.tabs.every((function(t,e,n){return!t.isVisible||(t.isActive=!0,!1)}))))},getTabIndex:function(t){var e=this.findTab(t);return this.tabs.indexOf(e)},getTabHash:function(t){var e=this,n=this.tabs.find((function(n){return e.tabs.indexOf(n)===t}));if(n)return n.hash},getActiveTab:function(){return this.findTab(this.activeTabHash)},getActiveTabIndex:function(){return this.getTabIndex(this.activeTabHash)}}}})?a.apply(e,o):a)||(t.exports=s)},function(t,e,n){var a,o,s;o=[e,n(14),n(15)],void 0===(s="function"==typeof(a=function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(e),o=s(n);function s(t){return t&&t.__esModule?t:{default:t}}var i=function(){function t(){(0,a.default)(this,t)}return(0,o.default)(t,[{key:"get",value:function(t){var e=JSON.parse(localStorage.getItem(t));return e?new Date(e.expires)<new Date?(localStorage.removeItem(t),null):e.value:null}},{key:"set",value:function(t,e,n){var a=(new Date).getTime(),o=new Date(a+6e4*n);localStorage.setItem(t,JSON.stringify({value:e,expires:o}))}}]),t}();t.default=new i})?a.apply(e,o):a)||(t.exports=s)},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var a,o=n(16),s=(a=o)&&a.__esModule?a:{default:a};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,s.default)(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}()},function(t,e,n){t.exports={default:n(17),__esModule:!0}},function(t,e,n){n(18);var a=n(4).Object;t.exports=function(t,e,n){return a.defineProperty(t,e,n)}},function(t,e,n){var a=n(19);a(a.S+a.F*!n(0),"Object",{defineProperty:n(5).f})},function(t,e,n){var a=n(3),o=n(4),s=n(20),i=n(22),r=n(28),u=function(t,e,n){var l,c,d,m=t&u.F,p=t&u.G,f=t&u.S,v=t&u.P,g=t&u.B,h=t&u.W,b=p?o:o[e]||(o[e]={}),_=b.prototype,x=p?a:f?a[e]:(a[e]||{}).prototype;for(l in p&&(n=e),n)(c=!m&&x&&void 0!==x[l])&&r(b,l)||(d=c?x[l]:n[l],b[l]=p&&"function"!=typeof x[l]?n[l]:g&&c?s(d,a):h&&x[l]==d?function(t){var e=function(e,n,a){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,a)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(d):v&&"function"==typeof d?s(Function.call,d):d,v&&((b.virtual||(b.virtual={}))[l]=d,t&u.R&&_&&!_[l]&&i(_,l,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var a=n(21);t.exports=function(t,e,n){if(a(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,a){return t.call(e,n,a)};case 3:return function(n,a,o){return t.call(e,n,a,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var a=n(5),o=n(27);t.exports=n(0)?function(t,e,n){return a.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var a=n(1);t.exports=function(t){if(!a(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(0)&&!n(6)((function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var a=n(1),o=n(3).document,s=a(o)&&a(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},function(t,e,n){var a=n(1);t.exports=function(t,e){if(!a(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!a(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!a(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!a(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-component"},[n("ul",{staticClass:"tabs-component-tabs",attrs:{role:"tablist"}},t._l(t.tabs,(function(e,a){return n("li",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"tab.isVisible"}],key:a,staticClass:"tabs-component-tab",class:{"is-active":e.isActive,"is-disabled":e.isDisabled},attrs:{role:"presentation"}},[n("a",{staticClass:"tabs-component-tab-a",attrs:{"aria-controls":e.hash,"aria-selected":e.isActive,href:e.hash,role:"tab"},domProps:{innerHTML:t._s(e.header)},on:{click:function(n){t.selectTab(e.hash,n)}}})])}))),t._v(" "),n("div",{staticClass:"tabs-component-panels"},[t._t("default")],2)])},staticRenderFns:[]}}])},t.exports=a()},751:function(t,e,n){"use strict";var a=n(615);n.n(a).a},752:function(t,e,n){(e=n(341)(!1)).push([t.i,"\n.tabs-component-tabs {\n\tdisplay: flex;\n}\n.tabs-component-tab {\n\tflex-grow: 1;\n\ttext-align: center;\n\tcolor: var(--color-text-lighter);\n}\n.tabs-component-tab.is-active {\n\tborder-bottom: 1px solid black;\n\tfont-weight: bold;\n}\n.tabs-component-panels {\n\tpadding-top: 20px;\n}\n.tabs-component-panels label {\n\ttext-align: left;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n.tabs-component-panels input,\n.tabs-component-panels select {\n\tmargin-bottom: 10px;\n}\n",""]),t.exports=e},753:function(t,e,n){"use strict";var a=n(616);n.n(a).a},754:function(t,e,n){(e=n(341)(!1)).push([t.i,"\nh4[data-v-75fca5a6] {\n\ttext-align: left;\n}\n.flex-row[data-v-75fca5a6] {\n\tdisplay: flex;\n}\nlabel.button[data-v-75fca5a6] {\n\tdisplay: inline-block;\n\ttext-align: center;\n\tflex-grow: 1;\n}\ninput[type='radio'][data-v-75fca5a6] {\n\tdisplay: none;\n}\ninput[type='radio'][disabled] + label[data-v-75fca5a6] {\n\tcursor: default;\n\topacity: 0.5;\n}\n",""]),t.exports=e},755:function(t,e,n){var a=n(1091);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(342).default)("97ff6454",a,!0,{})},783:function(t,e,n){var a={"./af":688,"./af.js":688,"./ar":689,"./ar.js":689,"./ast":690,"./ast.js":690,"./az":691,"./az.js":691,"./bg":692,"./bg.js":692,"./ca":693,"./ca.js":693,"./cs":694,"./cs.js":694,"./da":695,"./da.js":695,"./de":697,"./de-ch":696,"./de-ch.js":696,"./de.js":697,"./el":698,"./el.js":698,"./en-au":699,"./en-au.js":699,"./en-gb":700,"./en-gb.js":700,"./eo":701,"./eo.js":701,"./es":702,"./es.js":702,"./et":703,"./et.js":703,"./eu":704,"./eu.js":704,"./fa":705,"./fa.js":705,"./fi":706,"./fi.js":706,"./fr":707,"./fr.js":707,"./gl":708,"./gl.js":708,"./gu":709,"./gu.js":709,"./he":710,"./he.js":710,"./hr":711,"./hr.js":711,"./hu":712,"./hu.js":712,"./id":713,"./id.js":713,"./it":714,"./it.js":714,"./ja":715,"./ja.js":715,"./km":716,"./km.js":716,"./kn":717,"./kn.js":717,"./ko":718,"./ko.js":718,"./ku":719,"./ku.js":719,"./lt":720,"./lt.js":720,"./lv":721,"./lv.js":721,"./ms":722,"./ms.js":722,"./nb":723,"./nb.js":723,"./ne":724,"./ne.js":724,"./nl":725,"./nl.js":725,"./no":726,"./no.js":726,"./oc":727,"./oc.js":727,"./pl":728,"./pl.js":728,"./pt":730,"./pt-br":729,"./pt-br.js":729,"./pt.js":730,"./ro":731,"./ro.js":731,"./ru":732,"./ru.js":732,"./si":733,"./si.js":733,"./sk":734,"./sk.js":734,"./sl":735,"./sl.js":735,"./sq":736,"./sq.js":736,"./sr":738,"./sr-latn":737,"./sr-latn.js":737,"./sr.js":738,"./sv":739,"./sv.js":739,"./tr":740,"./tr.js":740,"./tt":741,"./tt.js":741,"./ug":742,"./ug.js":742,"./uk":743,"./uk.js":743,"./vi":744,"./vi.js":744,"./zh":746,"./zh-cn":745,"./zh-cn.js":745,"./zh.js":746};function o(t){return s(t).then((function(t){return n.t(t,7)}))}function s(t){return n.e(9).then((function(){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}))}o.keys=function(){return Object.keys(a)},o.resolve=s,o.id=783,t.exports=o},784:function(t,e,n){"use strict";var a=n(626);n.n(a).a},785:function(t,e,n){(e=n(341)(!1)).push([t.i,"[data-v-967d5954] p{cursor:text}\n",""]),t.exports=e},786:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var a=n(885),o=function(t){var e=t.replace(/<\/div>/gi,"</div><br>");return Object(a.fromString)(e,{noLinkBrackets:!0,ignoreHref:!0,ignoreImage:!0,wordwrap:!1,format:{blockquote:function(t,e,n){return e(t.children,n).replace(/\n\n\n/g,"\n\n").replace(/^/gm,"> ")}}}).replace(/\n\n\n/g,"\n\n").replace(/^[\n\r]+/g,"").replace(/ $/gm,"")},s=function(t){return t.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2")}},792:function(t,e,n){var a=n(1201);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(342).default)("43f5066a",a,!0,{})},793:function(t,e,n){var a=n(1203);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(342).default)("2adbb5d5",a,!0,{})},822:function(e,n,a){"use strict";var o=a(750),s=a(18);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={name:"AccountForm",components:{Tab:o.Tab,Tabs:o.Tabs},props:{displayName:{type:String,default:""},email:{type:String,default:""},save:{type:Function,required:!0},account:{type:Object,required:!1,default:function(){}}},data:function(){var e=this,n=function(t,n){return void 0!==e.account?e.account[t]:n};return{loading:!1,mode:"auto",autoConfig:{accountName:this.displayName,emailAddress:this.email,password:""},manualConfig:{accountName:"",emailAddress:"",imapHost:n("imapHost",""),imapPort:n("imapPort",993),imapSslMode:n("imapSslMode","ssl"),imapUser:n("imapUser",""),imapPassword:"",smtpHost:n("smtpHost",""),smtpPort:n("smtpPort",587),smtpSslMode:n("smtpSslMode","tls"),smtpUser:n("smtpUser",""),smtpPassword:""},submitButtonText:this.account?t("mail","Save"):t("mail","Connect")}},computed:{settingsPage:function(){return void 0!==this.account}},methods:{onModeChanged:function(t){this.mode=t.tab.id,"manual"===this.mode&&(""===this.manualConfig.accountName&&(this.manualConfig.accountName=this.autoConfig.accountName),""===this.manualConfig.emailAddress&&(this.manualConfig.emailAddress=this.autoConfig.emailAddress),""===this.manualConfig.imapUser&&(this.manualConfig.imapUser=this.autoConfig.emailAddress),""===this.manualConfig.imapPassword&&(this.manualConfig.imapPassword=this.autoConfig.password),""===this.manualConfig.smtpUser&&(this.manualConfig.smtpUser=this.autoConfig.emailAddress),""===this.manualConfig.smtpPassword&&(this.manualConfig.smtpPassword=this.autoConfig.password))},onImapSslModeChange:function(){switch(this.manualConfig.imapSslMode){case"none":case"tls":this.manualConfig.imapPort=143;break;case"ssl":this.manualConfig.imapPort=993}},onSmtpSslModeChange:function(){switch(this.manualConfig.smtpSslMode){case"none":case"tls":this.manualConfig.smtpPort=587;break;case"ssl":this.manualConfig.smtpPort=465}},saveChanges:function(){return"auto"===this.mode?this.save(r({autoDetect:!0},this.autoConfig)):this.save(r({autoDetect:!1},this.manualConfig))},onSubmit:function(t){var e=this;console.debug("account form submitted",{event:t}),this.loading=!0,this.saveChanges().catch((function(t){return s.a.error("could not save account details",{error:t})})).then((function(){return e.loading=!1}))}}},c=(a(751),a(753),a(35)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{id:"account-form"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("tabs",{attrs:{options:{useUrlFragment:!1,defaultTabHash:t.settingsPage?"manual":"auto"},"cache-lifetime":"0"},on:{changed:t.onModeChanged}},[n("tab",{key:"auto",attrs:{id:"auto",name:t.t("mail","Auto")}},[n("label",{attrs:{for:"auto-name"}},[t._v(t._s(t.t("mail","Name")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.autoConfig.accountName,expression:"autoConfig.accountName"}],attrs:{id:"auto-name",type:"text",placeholder:t.t("mail","Name"),disabled:t.loading,autofocus:""},domProps:{value:t.autoConfig.accountName},on:{input:function(e){e.target.composing||t.$set(t.autoConfig,"accountName",e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"auto-address"}},[t._v(t._s(t.t("mail","Mail Address")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.autoConfig.emailAddress,expression:"autoConfig.emailAddress"}],attrs:{id:"auto-address",type:"email",placeholder:t.t("mail","Mail Address"),disabled:t.loading,required:""},domProps:{value:t.autoConfig.emailAddress},on:{input:function(e){e.target.composing||t.$set(t.autoConfig,"emailAddress",e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"auto-password"}},[t._v(t._s(t.t("mail","Password")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.autoConfig.password,expression:"autoConfig.password"}],attrs:{id:"auto-password",type:"password",placeholder:t.t("mail","Password"),disabled:t.loading,required:""},domProps:{value:t.autoConfig.password},on:{input:function(e){e.target.composing||t.$set(t.autoConfig,"password",e.target.value)}}})]),t._v(" "),n("tab",{key:"manual",attrs:{id:"manual",name:t.t("mail","Manual")}},[n("label",{attrs:{for:"man-name"}},[t._v(t._s(t.t("mail","Name")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.accountName,expression:"manualConfig.accountName"}],attrs:{id:"man-name",type:"text",placeholder:t.t("mail","Name"),disabled:t.loading},domProps:{value:t.manualConfig.accountName},on:{input:function(e){e.target.composing||t.$set(t.manualConfig,"accountName",e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"man-address"}},[t._v(t._s(t.t("mail","Mail Address")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.emailAddress,expression:"manualConfig.emailAddress"}],attrs:{id:"man-address",type:"email",placeholder:t.t("mail","Mail Address"),disabled:t.loading,required:""},domProps:{value:t.manualConfig.emailAddress},on:{input:function(e){e.target.composing||t.$set(t.manualConfig,"emailAddress",e.target.value)}}}),t._v(" "),n("h3",[t._v(t._s(t.t("mail","IMAP Settings")))]),t._v(" "),n("label",{attrs:{for:"man-imap-host"}},[t._v(t._s(t.t("mail","IMAP Host")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.imapHost,expression:"manualConfig.imapHost"}],attrs:{id:"man-imap-host",type:"text",placeholder:t.t("mail","IMAP Host"),disabled:t.loading,required:""},domProps:{value:t.manualConfig.imapHost},on:{input:function(e){e.target.composing||t.$set(t.manualConfig,"imapHost",e.target.value)}}}),t._v(" "),n("h4",[t._v(t._s(t.t("mail","IMAP Security")))]),t._v(" "),n("div",{staticClass:"flex-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.imapSslMode,expression:"manualConfig.imapSslMode"}],attrs:{id:"man-imap-sec-none",type:"radio",name:"man-imap-sec",disabled:t.loading,value:"none"},domProps:{checked:t._q(t.manualConfig.imapSslMode,"none")},on:{change:[function(e){return t.$set(t.manualConfig,"imapSslMode","none")},t.onImapSslModeChange]}}),t._v(" "),n("label",{staticClass:"button",class:{primary:"none"===t.manualConfig.imapSslMode},attrs:{for:"man-imap-sec-none"}},[t._v(t._s(t.t("mail","None")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.imapSslMode,expression:"manualConfig.imapSslMode"}],attrs:{id:"man-imap-sec-ssl",type:"radio",name:"man-imap-sec",disabled:t.loading,value:"ssl"},domProps:{checked:t._q(t.manualConfig.imapSslMode,"ssl")},on:{change:[function(e){return t.$set(t.manualConfig,"imapSslMode","ssl")},t.onImapSslModeChange]}}),t._v(" "),n("label",{staticClass:"button",class:{primary:"ssl"===t.manualConfig.imapSslMode},attrs:{for:"man-imap-sec-ssl"}},[t._v(t._s(t.t("mail","SSL/TLS")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.imapSslMode,expression:"manualConfig.imapSslMode"}],attrs:{id:"man-imap-sec-tls",type:"radio",name:"man-imap-sec",disabled:t.loading,value:"tls"},domProps:{checked:t._q(t.manualConfig.imapSslMode,"tls")},on:{change:[function(e){return t.$set(t.manualConfig,"imapSslMode","tls")},t.onImapSslModeChange]}}),t._v(" "),n("label",{staticClass:"button",class:{primary:"tls"===t.manualConfig.imapSslMode},attrs:{for:"man-imap-sec-tls"}},[t._v(t._s(t.t("mail","STARTTLS")))])]),t._v(" "),n("label",{attrs:{for:"man-imap-port"}},[t._v(t._s(t.t("mail","IMAP Port")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.imapPort,expression:"manualConfig.imapPort"}],attrs:{id:"man-imap-port",type:"number",placeholder:t.t("mail","IMAP Port"),disabled:t.loading,required:""},domProps:{value:t.manualConfig.imapPort},on:{input:function(e){e.target.composing||t.$set(t.manualConfig,"imapPort",e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"man-imap-user"}},[t._v(t._s(t.t("mail","IMAP User")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.imapUser,expression:"manualConfig.imapUser"}],attrs:{id:"man-imap-user",type:"text",placeholder:t.t("mail","IMAP User"),disabled:t.loading,required:""},domProps:{value:t.manualConfig.imapUser},on:{input:function(e){e.target.composing||t.$set(t.manualConfig,"imapUser",e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"man-imap-password"}},[t._v(t._s(t.t("mail","IMAP Password")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.imapPassword,expression:"manualConfig.imapPassword"}],attrs:{id:"man-imap-password",type:"password",placeholder:t.t("mail","IMAP Password"),disabled:t.loading,required:""},domProps:{value:t.manualConfig.imapPassword},on:{input:function(e){e.target.composing||t.$set(t.manualConfig,"imapPassword",e.target.value)}}}),t._v(" "),n("h3",[t._v(t._s(t.t("mail","SMTP Settings")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.smtpHost,expression:"manualConfig.smtpHost"}],ref:"smtpHost",attrs:{type:"text",name:"smtp-host",placeholder:t.t("mail","SMTP Host"),disabled:t.loading,required:""},domProps:{value:t.manualConfig.smtpHost},on:{input:function(e){e.target.composing||t.$set(t.manualConfig,"smtpHost",e.target.value)}}}),t._v(" "),n("h4",[t._v(t._s(t.t("mail","SMTP Security")))]),t._v(" "),n("div",{staticClass:"flex-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.smtpSslMode,expression:"manualConfig.smtpSslMode"}],attrs:{id:"man-smtp-sec-none",type:"radio",name:"man-smtp-sec",disabled:t.loading,value:"none"},domProps:{checked:t._q(t.manualConfig.smtpSslMode,"none")},on:{change:[function(e){return t.$set(t.manualConfig,"smtpSslMode","none")},t.onSmtpSslModeChange]}}),t._v(" "),n("label",{staticClass:"button",class:{primary:"none"===t.manualConfig.smtpSslMode},attrs:{for:"man-smtp-sec-none"}},[t._v(t._s(t.t("mail","None")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.smtpSslMode,expression:"manualConfig.smtpSslMode"}],attrs:{id:"man-smtp-sec-ssl",type:"radio",name:"man-smtp-sec",disabled:t.loading,value:"ssl"},domProps:{checked:t._q(t.manualConfig.smtpSslMode,"ssl")},on:{change:[function(e){return t.$set(t.manualConfig,"smtpSslMode","ssl")},t.onSmtpSslModeChange]}}),t._v(" "),n("label",{staticClass:"button",class:{primary:"ssl"===t.manualConfig.smtpSslMode},attrs:{for:"man-smtp-sec-ssl"}},[t._v(t._s(t.t("mail","SSL/TLS")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.smtpSslMode,expression:"manualConfig.smtpSslMode"}],attrs:{id:"man-smtp-sec-tls",type:"radio",name:"man-smtp-sec",disabled:t.loading,value:"tls"},domProps:{checked:t._q(t.manualConfig.smtpSslMode,"tls")},on:{change:[function(e){return t.$set(t.manualConfig,"smtpSslMode","tls")},t.onSmtpSslModeChange]}}),t._v(" "),n("label",{staticClass:"button",class:{primary:"tls"===t.manualConfig.smtpSslMode},attrs:{for:"man-smtp-sec-tls"}},[t._v(t._s(t.t("mail","STARTTLS")))])]),t._v(" "),n("label",{attrs:{for:"man-smtp-port"}},[t._v(t._s(t.t("mail","SMTP Port")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.smtpPort,expression:"manualConfig.smtpPort"}],attrs:{id:"man-smtp-port",type:"number",placeholder:t.t("mail","SMTP Port"),disabled:t.loading,required:""},domProps:{value:t.manualConfig.smtpPort},on:{input:function(e){e.target.composing||t.$set(t.manualConfig,"smtpPort",e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"man-smtp-user"}},[t._v(t._s(t.t("mail","SMTP User")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.smtpUser,expression:"manualConfig.smtpUser"}],attrs:{id:"man-smtp-user",type:"text",placeholder:t.t("mail","SMTP User"),disabled:t.loading,required:""},domProps:{value:t.manualConfig.smtpUser},on:{input:function(e){e.target.composing||t.$set(t.manualConfig,"smtpUser",e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"man-smtp-password"}},[t._v(t._s(t.t("mail","SMTP Password")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.manualConfig.smtpPassword,expression:"manualConfig.smtpPassword"}],attrs:{id:"man-smtp-password",type:"password",placeholder:t.t("mail","SMTP Password"),disabled:t.loading,required:""},domProps:{value:t.manualConfig.smtpPassword},on:{input:function(e){e.target.composing||t.$set(t.manualConfig,"smtpPassword",e.target.value)}}})])],1),t._v(" "),t._t("feedback"),t._v(" "),n("input",{staticClass:"primary",attrs:{type:"submit",disabled:t.loading},domProps:{value:t.submitButtonText},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}})],2)}),[],!1,null,"75fca5a6",null);n.a=d.exports},823:function(t,e,n){"use strict";var a=n(847),o=n.n(a),s=n(1071),i=n(1072),r=n(1077),u=n(1079),l=n(1080),c=n(1073),d=n(1083),m=n(23),p=n(18),f={name:"TextEditor",components:{ckeditor:o.a.component},props:{value:{type:String,required:!0},html:{type:Boolean,default:!1},placeholder:{type:String,default:""},focus:{type:Boolean,default:!1}},data:function(){return{text:"",ready:!1,editor:s.a,config:{placeholder:this.placeholder,plugins:this.html?[i.a,d.a,u.a,l.a,c.a,r.a]:[i.a,d.a],toolbar:{items:this.html?["bold","italic","blockquote","link","undo","redo"]:["undo","redo"]},language:"en"}}},beforeMount:function(){this.loadEditorTranslations(Object(m.getLanguage)())},methods:{loadEditorTranslations:function(t){var e=this;if("en"===t)return this.showEditor("en");n(783)("./".concat(t)).then((function(){return e.showEditor(t)})).catch((function(){return e.showEditor("en")}))},showEditor:function(t){this.html,this.config.language=t,this.ready=!0},onEditorReady:function(t){t.model.schema.on("checkChild",(function(t,e){e[0].endsWith("blockQuote")&&(t.stop(),t.return=!0)}),{priority:"highest"}),this.focus&&(p.a.debug("focusing TextEditor"),t.editing.view.focus()),this.text=this.value,p.a.debug("setting TextEditor contents to <".concat(this.text,">"))},onInput:function(){p.a.debug("TextEditor input changed to <".concat(this.text,">")),this.$emit("input",this.text)}}},v=(n(784),n(35)),g=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ready?n("ckeditor",{attrs:{config:t.config,editor:t.editor},on:{input:t.onInput,ready:t.onEditorReady},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}):t._e()}),[],!1,null,"967d5954",null);e.a=g.exports},895:function(t,e){}},0,[9]]);
//# sourceMappingURL=mail.11.43419a26a85e9679eae4.js.map