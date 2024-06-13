(()=>{"use strict";var e="object"==typeof e?e:{};e.Widget=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var r,o,i,s=n(1),a=n(2),u=n(3),c=s.api,l=s.bridge,d=[],f=[],p=/^http(?:s?)/;function E(e){var t,n;for(t=0,n=f.length;t<n&&!1!==e(f[t]);t++);}function g(e){return e.contentWindow?e.contentWindow:e.contentDocument&&"parentWindow"in e.contentDocument?e.contentDocument.parentWindow:null}function S(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(e[t]);return n}function h(e,t,n){n.callbacks[e]=n.callbacks[e]||[],n.callbacks[e].push(t)}function v(e,t){var n=!0;return t.callbacks[e]=[],E((function(t){if((t.callbacks[e]||[]).length)return n=!1,!1})),n}function y(e,t,n){var r,o,i=g(n);if(!i.postMessage)return!1;r=n.getAttribute("src").split("?")[0],o=JSON.stringify({method:e,value:t}),"//"===r.substr(0,2)&&(r=window.location.protocol+r),r=r.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),i.postMessage(o,r)}function b(e){var t;return E((function(n){if(n.instance===e)return t=n,!1})),t}function _(e){var t;return E((function(n){if(g(n.element)===e)return t=n,!1})),t}function m(e,t){return function(n){var r,o=!!((r=n)&&r.constructor&&r.call&&r.apply),i=b(this),s=!o&&t?n:null,a=o&&!t?n:null;return a&&h(e,a,i),y(e,s,i.element),this}}function L(e,t,n){var r,o,i;for(r=0,o=t.length;r<o;r++)e[i=t[r]]=m(i,n)}function R(e,t,n){return e+"?url="+t+"&"+function(e){var t,n,r=[];for(t in e)e.hasOwnProperty(t)&&(n=e[t],r.push(t+"="+("start_track"===t?parseInt(n,10):n?"true":"false")));return r.join("&")}(n)}function O(e,t,n){var r,o,i=e.callbacks[t]||[];for(r=0,o=i.length;r<o;r++)i[r].apply(e.instance,n);(function(e){var t,n=!1;for(t in a)if(a.hasOwnProperty(t)&&a[t]===e){n=!0;break}return n}(t)||t===c.READY)&&(e.callbacks[t]=[])}function P(e){var t,n,r,o,i;try{n=JSON.parse(e.data)}catch(e){return!1}return t=_(e.source),r=n.method,o=n.value,(!t||A(e.origin)===A(t.domain))&&(t?(r===c.READY&&(t.isReady=!0,O(t,"__LATE_BINDING__"),v("__LATE_BINDING__",t)),r!==c.PLAY||t.playEventFired||(t.playEventFired=!0),r!==c.PLAY_PROGRESS||t.playEventFired||(t.playEventFired=!0,O(t,c.PLAY,[o])),i=[],void 0!==o&&i.push(o),void O(t,r,i)):(r===c.READY&&d.push(e.source),!1))}function A(e){return e.replace(p,"")}window.addEventListener?window.addEventListener("message",P,!1):window.attachEvent("onmessage",P),e.exports=i=function(e,t,n){var i;if((""===(i=e)||i&&i.charCodeAt&&i.substr)&&(e=document.getElementById(e)),!function(e){return!(!e||1!==e.nodeType||"IFRAME"!==e.nodeName.toUpperCase())}(e))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(n=n||{},e.src=R("http://wt.soundcloud.test:9200/",t,n));var s,a,u=_(g(e));return u&&u.instance?u.instance:(s=d.indexOf(g(e))>-1,a=new r(e),f.push(new o(a,e,s)),a)},i.Events=c,window.SC=window.SC||{},window.SC.Widget=i,o=function(e,t,n){this.instance=e,this.element=t,this.domain=function(e){var t,n,r,o="";for("//"===e.substr(0,2)&&(e=window.location.protocol+e),t=0,n=(r=e.split("/")).length;t<n&&t<3;t++)o+=r[t],t<2&&(o+="/");return o}(t.getAttribute("src")),this.isReady=!!n,this.callbacks={}},(r=function(){}).prototype={constructor:r,load:function(e,t){if(e){t=t||{};var n=this,r=b(this),o=r.element,i=o.src,s=i.substr(0,i.indexOf("?"));r.isReady=!1,r.playEventFired=!1,o.onload=function(){n.bind(c.READY,(function(){var e,n=r.callbacks;for(e in n)n.hasOwnProperty(e)&&e!==c.READY&&y(l.ADD_LISTENER,e,r.element);t.callback&&t.callback()}))},o.src=R(s,e,t)}},bind:function(e,t){var n=this,r=b(this);return r&&r.element&&(e===c.READY&&r.isReady?setTimeout(t,1):r.isReady?(h(e,t,r),y(l.ADD_LISTENER,e,r.element)):h("__LATE_BINDING__",(function(){n.bind(e,t)}),r)),this},unbind:function(e){var t,n=b(this);n&&n.element&&(t=v(e,n),e!==c.READY&&t&&y(l.REMOVE_LISTENER,e,n.element))}},L(r.prototype,S(a)),L(r.prototype,S(u),!0)},function(e,t){t.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},t.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}},function(e,t){e.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}},function(e,t){e.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}]);const t=e;function n(e){const t=Math.floor(e/1e3),n=Math.floor(t/3600),r=Math.floor(t%3600/60),o=t%60;return`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`}console.log("Hello World! (from track)"),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".sc-widget"),r=[];e.forEach((o=>{const i=t.Widget(o);r.push(i);const s=o.parentElement,a=s.querySelector(".duration"),u=s.querySelector(".progress"),c=s.querySelector(".progress-bar"),l=c.offsetWidth,d=s.querySelector(".progress-bar-fill"),f=s.querySelector(".play-button"),p=s.querySelector(".pause-button");f.addEventListener("click",(()=>{e.forEach((e=>{if(e!==i){const t=e.parentElement.querySelector(".play-button"),n=e.parentElement.querySelector(".pause-button");t.classList.contains("hidden")&&(t.classList.toggle("hidden"),n.classList.toggle("hidden"))}})),i.play(),f.classList.toggle("hidden"),p.classList.toggle("hidden")})),p.addEventListener("click",(()=>{i.pause(),p.classList.toggle("hidden"),f.classList.toggle("hidden")})),c.addEventListener("click",(e=>{const t=e.offsetX/l;i.getDuration((e=>{const n=e*t;i.seekTo(n)}))})),i.bind(t.Widget.Events.READY,(()=>{i.bind(t.Widget.Events.PLAY,(()=>{i.getCurrentSound((e=>{console.log(`Sound ${e.title} began to play`)}))})),i.bind(t.Widget.Events.PAUSE,(()=>{i.getCurrentSound((e=>{console.log(`Sound ${e.title} was paused`)}))})),i.bind(t.Widget.Events.PLAY_PROGRESS,(e=>{i.getPosition((e=>{u.innerText=`${n(e)}`})),d.style.width=100*e.relativePosition+"%"})),i.getVolume((e=>{console.log(`Current volume value is ${e}`)})),i.isPaused((()=>{console.log("Is paused")})),i.getDuration((e=>{a.innerText=`${n(e)}`})),i.setVolume(50)}))}))}))})();