(()=>{var t={9662:(t,e,r)=>{"use strict";var n=r(614),o=r(6330),s=TypeError;t.exports=function(t){if(n(t))return t;throw new s(o(t)+" is not a function")}},9670:(t,e,r)=>{"use strict";var n=r(111),o=String,s=TypeError;t.exports=function(t){if(n(t))return t;throw new s(o(t)+" is not an object")}},1318:(t,e,r)=>{"use strict";var n=r(5656),o=r(1400),s=r(6244),i=function(t){return function(e,r,i){var c,u=n(e),a=s(u),f=o(i,a);if(t&&r!=r){for(;a>f;)if((c=u[f++])!=c)return!0}else for(;a>f;f++)if((t||f in u)&&u[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},4326:(t,e,r)=>{"use strict";var n=r(1702),o=n({}.toString),s=n("".slice);t.exports=function(t){return s(o(t),8,-1)}},648:(t,e,r)=>{"use strict";var n=r(1694),o=r(614),s=r(4326),i=r(5112)("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}());t.exports=n?s:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=c(t),i))?r:u?s(e):"Object"===(n=s(e))&&o(e.callee)?"Arguments":n}},9920:(t,e,r)=>{"use strict";var n=r(2597),o=r(3887),s=r(1236),i=r(3070);t.exports=function(t,e,r){for(var c=o(e),u=i.f,a=s.f,f=0;f<c.length;f++){var l=c[f];n(t,l)||r&&n(r,l)||u(t,l,a(e,l))}}},4964:(t,e,r)=>{"use strict";var n=r(5112)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(t){}}return!1}},8880:(t,e,r)=>{"use strict";var n=r(9781),o=r(3070),s=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,s(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:(t,e,r)=>{"use strict";var n=r(614),o=r(3070),s=r(6339),i=r(3072);t.exports=function(t,e,r,c){c||(c={});var u=c.enumerable,a=void 0!==c.name?c.name:e;if(n(r)&&s(r,a,c),c.global)u?t[e]=r:i(e,r);else{try{c.unsafe?t[e]&&(u=!0):delete t[e]}catch(t){}u?t[e]=r:o.f(t,e,{value:r,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},3072:(t,e,r)=>{"use strict";var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},9781:(t,e,r)=>{"use strict";var n=r(7293);t.exports=!n((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:t=>{"use strict";var e="object"==typeof document&&document.all,r=void 0===e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:r}},317:(t,e,r)=>{"use strict";var n=r(7854),o=r(111),s=n.document,i=o(s)&&o(s.createElement);t.exports=function(t){return i?s.createElement(t):{}}},8113:t=>{"use strict";t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:(t,e,r)=>{"use strict";var n,o,s=r(7854),i=r(8113),c=s.process,u=s.Deno,a=c&&c.versions||u&&u.version,f=a&&a.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{"use strict";var n=r(7854),o=r(1236).f,s=r(8880),i=r(8052),c=r(3072),u=r(9920),a=r(4705);t.exports=function(t,e){var r,f,l,p,v,d=t.target,g=t.global,h=t.stat;if(r=g?n:h?n[d]||c(d,{}):(n[d]||{}).prototype)for(f in e){if(p=e[f],l=t.dontCallGetSet?(v=o(r,f))&&v.value:r[f],!a(g?f:d+(h?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&s(p,"sham",!0),i(r,f,p,t)}}},7293:t=>{"use strict";t.exports=function(t){try{return!!t()}catch(t){return!0}}},4374:(t,e,r)=>{"use strict";var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,e,r)=>{"use strict";var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,e,r)=>{"use strict";var n=r(9781),o=r(2597),s=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,c=o(s,"name"),u=c&&"something"===function(){}.name,a=c&&(!n||n&&i(s,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:a}},1470:(t,e,r)=>{"use strict";var n=r(4326),o=r(1702);t.exports=function(t){if("Function"===n(t))return o(t)}},1702:(t,e,r)=>{"use strict";var n=r(4374),o=Function.prototype,s=o.call,i=n&&o.bind.bind(s,s);t.exports=n?i:function(t){return function(){return s.apply(t,arguments)}}},5005:(t,e,r)=>{"use strict";var n=r(7854),o=r(614);t.exports=function(t,e){return arguments.length<2?(r=n[t],o(r)?r:void 0):n[t]&&n[t][e];var r}},8173:(t,e,r)=>{"use strict";var n=r(9662),o=r(8554);t.exports=function(t,e){var r=t[e];return o(r)?void 0:n(r)}},7854:function(t,e,r){"use strict";var n=function(t){return t&&t.Math===Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||this||Function("return this")()},2597:(t,e,r)=>{"use strict";var n=r(1702),o=r(7908),s=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(o(t),e)}},3501:t=>{"use strict";t.exports={}},4664:(t,e,r)=>{"use strict";var n=r(9781),o=r(7293),s=r(317);t.exports=!n&&!o((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{"use strict";var n=r(1702),o=r(7293),s=r(4326),i=Object,c=n("".split);t.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?c(t,""):i(t)}:i},2788:(t,e,r)=>{"use strict";var n=r(1702),o=r(614),s=r(5465),i=n(Function.toString);o(s.inspectSource)||(s.inspectSource=function(t){return i(t)}),t.exports=s.inspectSource},9909:(t,e,r)=>{"use strict";var n,o,s,i=r(4811),c=r(7854),u=r(111),a=r(8880),f=r(2597),l=r(5465),p=r(6200),v=r(3501),d="Object already initialized",g=c.TypeError,h=c.WeakMap;if(i||l.state){var m=l.state||(l.state=new h);m.get=m.get,m.has=m.has,m.set=m.set,n=function(t,e){if(m.has(t))throw new g(d);return e.facade=t,m.set(t,e),e},o=function(t){return m.get(t)||{}},s=function(t){return m.has(t)}}else{var y=p("state");v[y]=!0,n=function(t,e){if(f(t,y))throw new g(d);return e.facade=t,a(t,y,e),e},o=function(t){return f(t,y)?t[y]:{}},s=function(t){return f(t,y)}}t.exports={set:n,get:o,has:s,enforce:function(t){return s(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return r}}}},614:(t,e,r)=>{"use strict";var n=r(4154),o=n.all;t.exports=n.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4705:(t,e,r)=>{"use strict";var n=r(7293),o=r(614),s=/#|\.prototype\./,i=function(t,e){var r=u[c(t)];return r===f||r!==a&&(o(e)?n(e):!!e)},c=i.normalize=function(t){return String(t).replace(s,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},8554:t=>{"use strict";t.exports=function(t){return null==t}},111:(t,e,r)=>{"use strict";var n=r(614),o=r(4154),s=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===s}:function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{"use strict";t.exports=!1},7850:(t,e,r)=>{"use strict";var n=r(111),o=r(4326),s=r(5112)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"===o(t))}},2190:(t,e,r)=>{"use strict";var n=r(5005),o=r(614),s=r(7976),i=r(3307),c=Object;t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return o(e)&&s(e.prototype,c(t))}},6244:(t,e,r)=>{"use strict";var n=r(7466);t.exports=function(t){return n(t.length)}},6339:(t,e,r)=>{"use strict";var n=r(1702),o=r(7293),s=r(614),i=r(2597),c=r(9781),u=r(6530).CONFIGURABLE,a=r(2788),f=r(9909),l=f.enforce,p=f.get,v=String,d=Object.defineProperty,g=n("".slice),h=n("".replace),m=n([].join),y=c&&!o((function(){return 8!==d((function(){}),"length",{value:8}).length})),C=String(String).split("String"),b=t.exports=function(t,e,r){"Symbol("===g(v(e),0,7)&&(e="["+h(v(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!i(t,"name")||u&&t.name!==e)&&(c?d(t,"name",{value:e,configurable:!0}):t.name=e),y&&r&&i(r,"arity")&&t.length!==r.arity&&d(t,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?c&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=l(t);return i(n,"source")||(n.source=m(C,"string"==typeof e?e:"")),t};Function.prototype.toString=b((function(){return s(this)&&p(this).source||a(this)}),"toString")},4758:t=>{"use strict";var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},3929:(t,e,r)=>{"use strict";var n=r(7850),o=TypeError;t.exports=function(t){if(n(t))throw new o("The method doesn't accept regular expressions");return t}},3070:(t,e,r)=>{"use strict";var n=r(9781),o=r(4664),s=r(3353),i=r(9670),c=r(4948),u=TypeError,a=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";e.f=n?s?function(t,e,r){if(i(t),e=c(e),i(r),"function"==typeof t&&"prototype"===e&&"value"in r&&v in r&&!r[v]){var n=f(t,e);n&&n[v]&&(t[e]=r.value,r={configurable:p in r?r[p]:n[p],enumerable:l in r?r[l]:n[l],writable:!1})}return a(t,e,r)}:a:function(t,e,r){if(i(t),e=c(e),i(r),o)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new u("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{"use strict";var n=r(9781),o=r(6916),s=r(5296),i=r(9114),c=r(5656),u=r(4948),a=r(2597),f=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=c(t),e=u(e),f)try{return l(t,e)}catch(t){}if(a(t,e))return i(!o(s.f,t,e),t[e])}},8006:(t,e,r)=>{"use strict";var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{"use strict";e.f=Object.getOwnPropertySymbols},7976:(t,e,r)=>{"use strict";var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{"use strict";var n=r(1702),o=r(2597),s=r(5656),i=r(1318).indexOf,c=r(3501),u=n([].push);t.exports=function(t,e){var r,n=s(t),a=0,f=[];for(r in n)!o(c,r)&&o(n,r)&&u(f,r);for(;e.length>a;)o(n,r=e[a++])&&(~i(f,r)||u(f,r));return f}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},2140:(t,e,r)=>{"use strict";var n=r(6916),o=r(614),s=r(111),i=TypeError;t.exports=function(t,e){var r,c;if("string"===e&&o(r=t.toString)&&!s(c=n(r,t)))return c;if(o(r=t.valueOf)&&!s(c=n(r,t)))return c;if("string"!==e&&o(r=t.toString)&&!s(c=n(r,t)))return c;throw new i("Can't convert object to primitive value")}},3887:(t,e,r)=>{"use strict";var n=r(5005),o=r(1702),s=r(8006),i=r(5181),c=r(9670),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=s.f(c(t)),r=i.f;return r?u(e,r(t)):e}},4488:(t,e,r)=>{"use strict";var n=r(8554),o=TypeError;t.exports=function(t){if(n(t))throw new o("Can't call method on "+t);return t}},6200:(t,e,r)=>{"use strict";var n=r(2309),o=r(9711),s=n("keys");t.exports=function(t){return s[t]||(s[t]=o(t))}},5465:(t,e,r)=>{"use strict";var n=r(7854),o=r(3072),s="__core-js_shared__",i=n[s]||o(s,{});t.exports=i},2309:(t,e,r)=>{"use strict";var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.33.0",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:(t,e,r)=>{"use strict";var n=r(7392),o=r(7293),s=r(7854).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},1400:(t,e,r)=>{"use strict";var n=r(9303),o=Math.max,s=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):s(r,e)}},5656:(t,e,r)=>{"use strict";var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:(t,e,r)=>{"use strict";var n=r(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:n(e)}},7466:(t,e,r)=>{"use strict";var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{"use strict";var n=r(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:(t,e,r)=>{"use strict";var n=r(6916),o=r(111),s=r(2190),i=r(8173),c=r(2140),u=r(5112),a=TypeError,f=u("toPrimitive");t.exports=function(t,e){if(!o(t)||s(t))return t;var r,u=i(t,f);if(u){if(void 0===e&&(e="default"),r=n(u,t,e),!o(r)||s(r))return r;throw new a("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:(t,e,r)=>{"use strict";var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{"use strict";var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,e,r)=>{"use strict";var n=r(648),o=String;t.exports=function(t){if("Symbol"===n(t))throw new TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:t=>{"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{"use strict";var n=r(1702),o=0,s=Math.random(),i=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+i(++o+s,36)}},3307:(t,e,r)=>{"use strict";var n=r(6293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,r)=>{"use strict";var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:(t,e,r)=>{"use strict";var n=r(7854),o=r(614),s=n.WeakMap;t.exports=o(s)&&/native code/.test(String(s))},5112:(t,e,r)=>{"use strict";var n=r(7854),o=r(2309),s=r(2597),i=r(9711),c=r(6293),u=r(3307),a=n.Symbol,f=o("wks"),l=u?a.for||a:a&&a.withoutSetter||i;t.exports=function(t){return s(f,t)||(f[t]=c&&s(a,t)?a[t]:l("Symbol."+t)),f[t]}},3157:(t,e,r)=>{"use strict";var n,o=r(2109),s=r(1470),i=r(1236).f,c=r(7466),u=r(1340),a=r(3929),f=r(4488),l=r(4964),p=r(1913),v=s("".startsWith),d=s("".slice),g=Math.min,h=l("startsWith");o({target:"String",proto:!0,forced:!!(p||h||(n=i(String.prototype,"startsWith"),!n||n.writable))&&!h},{startsWith:function(t){var e=u(f(this));a(t);var r=c(g(arguments.length>1?arguments[1]:void 0,e.length)),n=u(t);return v?v(e,n,r):d(e,r,r+n.length)===n}})},1227:(t,e,r)=>{e.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;e.splice(1,0,r,"color: inherit");let n=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(t=>{"%%"!==t&&(n++,"%c"===t&&(o=n))})),e.splice(o,0,r)},e.save=function(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug")}catch(t){}},e.load=function(){let t;try{t=e.storage.getItem("debug")}catch(t){}!t&&"undefined"!=typeof process&&"env"in process&&(t=process.env.DEBUG);return t},e.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage=function(){try{return localStorage}catch(t){}}(),e.destroy=(()=>{let t=!1;return()=>{t||(t=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.log=console.debug||console.log||(()=>{}),t.exports=r(2447)(e);const{formatters:n}=t.exports;n.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}},2447:(t,e,r)=>{t.exports=function(t){function e(t){let r,o,s,i=null;function c(...t){if(!c.enabled)return;const n=c,o=Number(new Date),s=o-(r||o);n.diff=s,n.prev=r,n.curr=o,r=o,t[0]=e.coerce(t[0]),"string"!=typeof t[0]&&t.unshift("%O");let i=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,((r,o)=>{if("%%"===r)return"%";i++;const s=e.formatters[o];if("function"==typeof s){const e=t[i];r=s.call(n,e),t.splice(i,1),i--}return r})),e.formatArgs.call(n,t);(n.log||e.log).apply(n,t)}return c.namespace=t,c.useColors=e.useColors(),c.color=e.selectColor(t),c.extend=n,c.destroy=e.destroy,Object.defineProperty(c,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==i?i:(o!==e.namespaces&&(o=e.namespaces,s=e.enabled(t)),s),set:t=>{i=t}}),"function"==typeof e.init&&e.init(c),c}function n(t,r){const n=e(this.namespace+(void 0===r?":":r)+t);return n.log=this.log,n}function o(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}return e.debug=e,e.default=e,e.coerce=function(t){if(t instanceof Error)return t.stack||t.message;return t},e.disable=function(){const t=[...e.names.map(o),...e.skips.map(o).map((t=>"-"+t))].join(",");return e.enable(""),t},e.enable=function(t){let r;e.save(t),e.namespaces=t,e.names=[],e.skips=[];const n=("string"==typeof t?t:"").split(/[\s,]+/),o=n.length;for(r=0;r<o;r++)n[r]&&("-"===(t=n[r].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.slice(1)+"$")):e.names.push(new RegExp("^"+t+"$")))},e.enabled=function(t){if("*"===t[t.length-1])return!0;let r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1},e.humanize=r(7824),e.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(t).forEach((r=>{e[r]=t[r]})),e.names=[],e.skips=[],e.formatters={},e.selectColor=function(t){let r=0;for(let e=0;e<t.length;e++)r=(r<<5)-r+t.charCodeAt(e),r|=0;return e.colors[Math.abs(r)%e.colors.length]},e.enable(e.load()),e}},7824:t=>{var e=1e3,r=60*e,n=60*r,o=24*n,s=7*o,i=365.25*o;function c(t,e,r,n){var o=e>=1.5*r;return Math.round(t/r)+" "+n+(o?"s":"")}t.exports=function(t,u){u=u||{};var a=typeof t;if("string"===a&&t.length>0)return function(t){if((t=String(t)).length>100)return;var c=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(!c)return;var u=parseFloat(c[1]);switch((c[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return u*i;case"weeks":case"week":case"w":return u*s;case"days":case"day":case"d":return u*o;case"hours":case"hour":case"hrs":case"hr":case"h":return u*n;case"minutes":case"minute":case"mins":case"min":case"m":return u*r;case"seconds":case"second":case"secs":case"sec":case"s":return u*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}(t);if("number"===a&&isFinite(t))return u.long?function(t){var s=Math.abs(t);if(s>=o)return c(t,s,o,"day");if(s>=n)return c(t,s,n,"hour");if(s>=r)return c(t,s,r,"minute");if(s>=e)return c(t,s,e,"second");return t+" ms"}(t):function(t){var s=Math.abs(t);if(s>=o)return Math.round(t/o)+"d";if(s>=n)return Math.round(t/n)+"h";if(s>=r)return Math.round(t/r)+"m";if(s>=e)return Math.round(t/e)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,r),s.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";r(3157);var t=r(1227)("@modernpoacher/modernpoacher");t("`modernpoacher` is awake");var e=window.$,n=void 0===e?function(){t("`jQuery` is not available")}:e,o=function(t){var e=t.currentTarget;return n(e).attr("href")};function s(){var t=window.location;return(void 0===t?{}:t).href}function i(e){t("🚀");var r,n=window.gtag;n&&((r=o(e)).startsWith("mailto")?n("event","email_link_click",{on:s(),to:r}):(e.preventDefault(),n("event","link_click",{from:s(),to:r,event_callback:function(){t("👍"),function(t){var e;s()!==t&&((void 0===(e=window.location)?{}:e).href=t)}(r)},event_timeout:125})))}n((function(){n("section a").on("click",i)}))})()})();
//# sourceMappingURL=app.js.map