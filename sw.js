importScripts("/precache-manifest.09ca812504d9eb165d30e98179da1e90.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

!function(e){function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var t={};r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(r){return e[r]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="/",r(r.s="9/Ks")}({"9/Ks":function(){console.log("Hello from service-worker.js"),importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),self.__precacheManifest=[].concat(self.__precacheManifest||[]);var e=e=>"navigate"===e.request.mode;workbox.routing.registerRoute(r=>{var{event:t}=r;return e(t)},new workbox.strategies.NetworkFirst({cacheName:workbox.core.cacheNames.precache,networkTimeoutSeconds:5,plugins:[new workbox.cacheableResponse.Plugin({statuses:[200]})]})),workbox.precaching.precacheAndRoute(self.__precacheManifest,{}),workbox.routing.setCatchHandler(r=>{var{event:t}=r;return e(t)?caches.match(workbox.precaching.getCacheKeyForURL("/index.html")):Response.error()})}});
//# sourceMappingURL=sw.js.map
