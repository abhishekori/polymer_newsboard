var firebase=null;(function(){function t(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function e(t,e,n,o){var r,i=arguments.length,c=3>i?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if(r=l.Reflect,"object"==typeof r&&"function"==typeof r.decorate)c=r.decorate(t,e,n,o);else for(var a=t.length-1;0<=a;a--)(r=t[a])&&(c=(3>i?r(c):3<i?r(e,n,c):r(e,n))||c);return 3<i&&c&&Object.defineProperty(e,n,c),c}function n(t,e){var n=l.Reflect;if("object"==typeof n&&"function"==typeof n.metadata)return n.metadata(t,e)}function o(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(var n in e)e.hasOwnProperty(n)&&(t[n]=o(t[n],e[n]));return t}function r(t,e){return t=new yt(t,e),t.subscribe.bind(t)}function i(t){if("object"!=typeof t||null===t)return!1;var e;e=["next","error","complete"],v();var n=e[Symbol.iterator];for(e=n?n.call(e):m(e),n=e.next();!n.done;n=e.next())if(n=n.value,n in t&&"function"==typeof t[n])return!0;return!1}function c(){}function a(){function t(t){t=t||"[DEFAULT]";var e=i[t];return void 0===e&&u("noApp",{name:t}),e}function e(t,e){Object.keys(c).forEach(function(o){o=n(t,o),null!==o&&s[o]&&s[o](e,t)})}function n(t,e){if("serverAuth"===e)return null;var n=e;return t=t.options,"auth"===e&&(t.serviceAccount||t.credential)&&(n="serverAuth","serverAuth"in c||u("serverAuthMissing")),n}var i={},c={},s={},l={__esModule:!0,initializeApp:function(t,n){return void 0===n?n="[DEFAULT]":"string"==typeof n&&""!==n||u("bad-app-name",{name:n+""}),void 0!==i[n]&&u("dupApp",{name:n}),t=new Et(t,n,l),i[n]=t,e(t,"create"),void 0!=t.INTERNAL&&void 0!=t.INTERNAL.getToken||o(t,{INTERNAL:{getToken:function(){return At.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}}),t},app:t,apps:null,Promise:At,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(e,n,r,i){return c[e]&&u("dupService",{name:e}),c[e]=n,i&&(s[e]=i),n=function(n){return void 0===n&&(n=t()),n[e]()},void 0!==r&&o(n,r),l[e]=n},createFirebaseNamespace:a,extendNamespace:function(t){o(l,t)},createSubscribe:r,ErrorFactory:wt,removeApp:function(t){e(i[t],"delete"),delete i[t]},factories:c,useAsService:n,Promise:q,deepExtend:o}};return l.default=l,Object.defineProperty(l,"apps",{get:function(){return Object.keys(i).map(function(t){return i[t]})}}),t.App=Et,l}function u(t,e){throw Error(s(t,e))}function s(t,e){return e=e||{},e={noApp:"No Firebase App '"+e.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+e.name+"'.",dupApp:"Firebase App named '"+e.name+"' already exists.",deleted:"Firebase App named '"+e.name+"' already deleted.",dupService:"Firebase Service named '"+e.name+"' already registered.",serverAuthMissing:"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain."}[t],void 0===e?"Application Error: ("+t+")":e}var l,f="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},p="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,h=function(){h=function(){},p.Symbol||(p.Symbol=y)},d=0,y=function(t){return"jscomp_symbol_"+(t||"")+d++},v=function(){h();var t=p.Symbol.iterator;t||(t=p.Symbol.iterator=p.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&f(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return m(this)}}),v=function(){}},m=function(t){var e=0;return b(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},b=function(t){return v(),t={next:t},t[p.Symbol.iterator]=function(){return this},t},g=this,w=function(){},A=function(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var n=Object.prototype.toString.call(t);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof t.length&&"undefined"!=typeof t.splice&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||"undefined"!=typeof t.call&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&"undefined"==typeof t.call)return"object";return e},E=function(t){return"function"==A(t)},x=function(t,e,n){return t.call.apply(t.bind,arguments)},j=function(t,e,n){if(!t)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,o),t.apply(e,n)}}return function(){return t.apply(e,arguments)}},S=function(t,e,n){return S=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x:j,S.apply(null,arguments)},O=function(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}},T=function(t,e){function n(){}n.prototype=e.prototype,t.ba=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.aa=function(t,n,o){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}};l="undefined"!=typeof window?window:"undefined"!=typeof self?self:global;var I=function(t,e){return function(n,o){e(n,o,t)}},N=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function c(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(c,a)}u((o=o.apply(t,e)).next())})};"undefined"!=typeof l.M&&l.M||(l.__extends=t,l.__decorate=e,l.__metadata=n,l.__param=I,l.__awaiter=N);var k=function(t){if(Error.captureStackTrace)Error.captureStackTrace(this,k);else{var e=Error().stack;e&&(this.stack=e)}t&&(this.message=String(t))};T(k,Error),k.prototype.name="CustomError";var _=function(t,e){for(var n=t.split("%s"),o="",r=Array.prototype.slice.call(arguments,1);r.length&&1<n.length;)o+=n.shift()+r.shift();return o+n.join("%s")},P=function(t,e){e.unshift(t),k.call(this,_.apply(null,e)),e.shift()};T(P,k),P.prototype.name="AssertionError";var F=function(t,e,n,o){var r="Assertion failed";if(n)var r=r+(": "+n),i=o;else t&&(r+=": "+t,i=e);throw new P(""+r,i||[])},R=function(t,e,n){t||F("",null,e,Array.prototype.slice.call(arguments,2))},L=function(t,e,n){E(t)||F("Expected function but got %s: %s.",[A(t),t],e,Array.prototype.slice.call(arguments,2))},D=function(t,e,n){this.T=n,this.N=t,this.U=e,this.s=0,this.o=null};D.prototype.get=function(){var t;return 0<this.s?(this.s--,t=this.o,this.o=t.next,t.next=null):t=this.N(),t},D.prototype.put=function(t){this.U(t),this.s<this.T&&(this.s++,t.next=this.o,this.o=t)};var M;t:{var C=g.navigator;if(C){var K=C.userAgent;if(K){M=K;break t}}M=""}var W,z=function(t){g.setTimeout(function(){throw t},0)},$=function(){var t=g.MessageChannel;if("undefined"==typeof t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&-1==M.indexOf("Presto")&&(t=function(){var t=document.createElement("IFRAME");t.style.display="none",t.src="",document.documentElement.appendChild(t);var e=t.contentWindow,t=e.document;t.open(),t.write(""),t.close();var n="callImmediate"+Math.random(),o="file:"==e.location.protocol?"*":e.location.protocol+"//"+e.location.host,t=S(function(t){"*"!=o&&t.origin!=o||t.data!=n||this.port1.onmessage()},this);e.addEventListener("message",t,!1),this.port1={},this.port2={postMessage:function(){e.postMessage(n,o)}}}),"undefined"!=typeof t&&-1==M.indexOf("Trident")&&-1==M.indexOf("MSIE")){var e=new t,n={},o=n;return e.port1.onmessage=function(){if(void 0!==n.next){n=n.next;var t=n.G;n.G=null,t()}},function(t){o.next={G:t},o=o.next,e.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(t){var e=document.createElement("SCRIPT");e.onreadystatechange=function(){e.onreadystatechange=null,e.parentNode.removeChild(e),e=null,t(),t=null},document.documentElement.appendChild(e)}:function(t){g.setTimeout(t,0)}},B=function(){this.v=this.f=null},U=new D(function(){return new V},function(t){t.reset()},100);B.prototype.add=function(t,e){var n=U.get();n.set(t,e),this.v?this.v.next=n:(R(!this.f),this.f=n),this.v=n},B.prototype.remove=function(){var t=null;return this.f&&(t=this.f,this.f=this.f.next,this.f||(this.v=null),t.next=null),t};var V=function(){this.next=this.scope=this.B=null};V.prototype.set=function(t,e){this.B=t,this.scope=e,this.next=null},V.prototype.reset=function(){this.next=this.scope=this.B=null};var G,H=function(t,e){G||J(),Y||(G(),Y=!0),X.add(t,e)},J=function(){if(-1!=String(g.Promise).indexOf("[native code]")){var t=g.Promise.resolve(void 0);G=function(){t.then(Z)}}else G=function(){var t=Z;!E(g.setImmediate)||g.Window&&g.Window.prototype&&-1==M.indexOf("Edge")&&g.Window.prototype.setImmediate==g.setImmediate?(W||(W=$()),W(t)):g.setImmediate(t)}},Y=!1,X=new B,Z=function(){for(var t;t=X.remove();){try{t.B.call(t.scope)}catch(t){z(t)}U.put(t)}Y=!1},q=function(t,e){if(this.b=0,this.L=void 0,this.j=this.g=this.u=null,this.m=this.A=!1,t!=w)try{var n=this;t.call(e,function(t){it(n,2,t)},function(t){try{if(t instanceof Error)throw t;throw Error("Promise rejected.")}catch(t){}it(n,3,t)})}catch(t){it(this,3,t)}},Q=function(){this.next=this.context=this.h=this.c=this.child=null,this.w=!1};Q.prototype.reset=function(){this.context=this.h=this.c=this.child=null,this.w=!1};var tt=new D(function(){return new Q},function(t){t.reset()},100),et=function(t,e,n){var o=tt.get();return o.c=t,o.h=e,o.context=n,o},nt=function(t,e,n){ct(t,e,n,null)||H(O(e,t))};q.prototype.then=function(t,e,n){return null!=t&&L(t,"opt_onFulfilled should be a function."),null!=e&&L(e,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),rt(this,E(t)?t:null,E(e)?e:null,n)},q.prototype.then=q.prototype.then,q.prototype.$goog_Thenable=!0,q.prototype.X=function(t,e){return rt(this,null,t,e)};var ot=function(t,e){t.g||2!=t.b&&3!=t.b||ut(t),R(null!=e.c),t.j?t.j.next=e:t.g=e,t.j=e},rt=function(t,e,n,o){var r=et(null,null,null);return r.child=new q(function(t,i){r.c=e?function(n){try{var r=e.call(o,n);t(r)}catch(t){i(t)}}:t,r.h=n?function(e){try{var r=n.call(o,e);t(r)}catch(t){i(t)}}:i}),r.child.u=t,ot(t,r),r.child};q.prototype.Y=function(t){R(1==this.b),this.b=0,it(this,2,t)},q.prototype.Z=function(t){R(1==this.b),this.b=0,it(this,3,t)};var it=function(t,e,n){0==t.b&&(t===n&&(e=3,n=new TypeError("Promise cannot resolve to itself")),t.b=1,ct(n,t.Y,t.Z,t)||(t.L=n,t.b=e,t.u=null,ut(t),3!=e||ft(t,n)))},ct=function(t,e,n,o){if(t instanceof q)return null!=e&&L(e,"opt_onFulfilled should be a function."),null!=n&&L(n,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),ot(t,et(e||w,n||null,o)),!0;var r;if(t)try{r=!!t.$goog_Thenable}catch(t){r=!1}else r=!1;if(r)return t.then(e,n,o),!0;if(r=typeof t,"object"==r&&null!=t||"function"==r)try{var i=t.then;if(E(i))return at(t,i,e,n,o),!0}catch(t){return n.call(o,t),!0}return!1},at=function(t,e,n,o,r){var i=!1,c=function(t){i||(i=!0,n.call(r,t))},a=function(t){i||(i=!0,o.call(r,t))};try{e.call(t,c,a)}catch(t){a(t)}},ut=function(t){t.A||(t.A=!0,H(t.P,t))},st=function(t){var e=null;return t.g&&(e=t.g,t.g=e.next,e.next=null),t.g||(t.j=null),null!=e&&R(null!=e.c),e};q.prototype.P=function(){for(var t;t=st(this);){var e=this.b,n=this.L;if(3==e&&t.h&&!t.w){var o;for(o=this;o&&o.m;o=o.u)o.m=!1}if(t.child)t.child.u=null,lt(t,e,n);else try{t.w?t.c.call(t.context):lt(t,e,n)}catch(t){pt.call(null,t)}tt.put(t)}this.A=!1};var lt=function(t,e,n){2==e?t.c.call(t.context,n):t.h&&t.h.call(t.context,n)},ft=function(t,e){t.m=!0,H(function(){t.m&&pt.call(null,e)})},pt=z;q.all=function(t){return new q(function(e,n){var o=t.length,r=[];if(o)for(var i,c=function(t,n){o--,r[t]=n,0==o&&e(r)},a=function(t){n(t)},u=0;u<t.length;u++)i=t[u],nt(i,O(c,u),a);else e(r)})},q.resolve=function(t){if(t instanceof q)return t;var e=new q(w);return it(e,2,t),e},q.reject=function(t){return new q(function(e,n){n(t)})},q.prototype.catch=q.prototype.X;var ht=q;"undefined"!=typeof Promise&&(ht=Promise);var dt=ht,yt=function(t,e){var n=this;this.a=[],this.K=0,this.task=dt.resolve(),this.l=!1,this.D=e,this.task.then(function(){t(n)}).catch(function(t){n.error(t)})};yt.prototype.next=function(t){vt(this,function(e){e.next(t)})},yt.prototype.error=function(t){vt(this,function(e){e.error(t)}),this.close(t)},yt.prototype.complete=function(){vt(this,function(t){t.complete()}),this.close()},yt.prototype.subscribe=function(t,e,n){var o,r=this;if(void 0===t&&void 0===e&&void 0===n)throw Error("Missing Observer.");return o=i(t)?t:{next:t,error:e,complete:n},void 0===o.next&&(o.next=c),void 0===o.error&&(o.error=c),void 0===o.complete&&(o.complete=c),t=this.$.bind(this,this.a.length),this.l&&this.task.then(function(){try{r.H?o.error(r.H):o.complete()}catch(t){}}),this.a.push(o),t},yt.prototype.$=function(t){void 0!==this.a&&void 0!==this.a[t]&&(delete this.a[t],--this.K,0===this.K&&void 0!==this.D&&this.D(this))};var vt=function(t,e){if(!t.l)for(var n=0;n<t.a.length;n++)mt(t,n,e)},mt=function(t,e,n){t.task.then(function(){if(void 0!==t.a&&void 0!==t.a[e])try{n(t.a[e])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})};yt.prototype.close=function(t){var e=this;this.l||(this.l=!0,void 0!==t&&(this.H=t),this.task.then(function(){e.a=void 0,e.D=void 0}))};var bt=Error.captureStackTrace,gt=function(t,e){if(this.code=t,this.message=e,bt)bt(this,wt.prototype.create);else{var n=Error.apply(this,arguments);this.name="FirebaseError",Object.defineProperty(this,"stack",{get:function(){return n.stack}})}};gt.prototype=Object.create(Error.prototype),gt.prototype.constructor=gt,gt.prototype.name="FirebaseError";var wt=function(t,e,n){this.V=t,this.W=e,this.O=n,this.pattern=/\{\$([^}]+)}/g};wt.prototype.create=function(t,e){void 0===e&&(e={});var n=this.O[t];t=this.V+"/"+t;var o,n=void 0===n?"Error":n.replace(this.pattern,function(t,n){return t=e[n],void 0!==t?t.toString():"<"+n+"?>"}),n=this.W+": "+n+" ("+t+").",n=new gt(t,n);for(o in e)e.hasOwnProperty(o)&&"_"!==o.slice(-1)&&(n[o]=e[o]);return n};var At=ht,Et=function(t,e,n){var r=this;this.I=n,this.J=!1,this.i={},this.C=e,this.F=o(void 0,t),t="serviceAccount"in this.F,("credential"in this.F||t)&&"undefined"!=typeof console&&console.log("The '"+(t?"serviceAccount":"credential")+"' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started."),Object.keys(n.INTERNAL.factories).forEach(function(t){var e=n.INTERNAL.useAsService(r,t);null!==e&&(e=r.S.bind(r,e),r[t]=e)})};Et.prototype.delete=function(){var t=this;return new At(function(e){xt(t),e()}).then(function(){return t.I.INTERNAL.removeApp(t.C),At.all(Object.keys(t.i).map(function(e){return t.i[e].INTERNAL.delete()}))}).then(function(){t.J=!0,t.i={}})},Et.prototype.S=function(t){return xt(this),void 0===this.i[t]&&(this.i[t]=this.I.INTERNAL.factories[t](this,this.R.bind(this))),this.i[t]},Et.prototype.R=function(t){o(this,t)};var xt=function(t){t.J&&u(s("deleted",{name:t.C}))};p.Object.defineProperties(Et.prototype,{name:{configurable:!0,enumerable:!0,get:function(){return xt(this),this.C}},options:{configurable:!0,enumerable:!0,get:function(){return xt(this),this.F}}}),Et.prototype.name&&Et.prototype.options||Et.prototype.delete||console.log("dc"),"undefined"!=typeof firebase&&(firebase=a())}).call(this),firebase.SDK_VERSION="3.6.6";