(()=>{"use strict";var e,r={47:()=>{const e=window.wp.blocks,r=window.React,o=window.wp.blockEditor,t=[["core/post-title",{placeholder:"Post Title",className:"text-headlineLarge leading-none"}],["core/post-featured-image",{width:"400px"}],["core/post-excerpt",{placeholder:"Released on May 2021"}],["manonemusic/track",{}]],n=JSON.parse('{"UU":"manonemusic/content-release"}');(0,e.registerBlockType)(n.UU,{edit:function(){const e=(0,o.useBlockProps)();return(0,r.createElement)("div",{...e},(0,r.createElement)(o.InnerBlocks,{template:t,directInsert:!0}))},save:function(){const e=o.useBlockProps.save(),t=o.useInnerBlocksProps.save(e);return(0,r.createElement)("div",{...e},(0,r.createElement)("div",{...t}))}})}},o={};function t(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return r[e](a,a.exports,t),a.exports}t.m=r,e=[],t.O=(r,o,n,a)=>{if(!o){var s=1/0;for(p=0;p<e.length;p++){for(var[o,n,a]=e[p],c=!0,i=0;i<o.length;i++)(!1&a||s>=a)&&Object.keys(t.O).every((e=>t.O[e](o[i])))?o.splice(i--,1):(c=!1,a<s&&(s=a));if(c){e.splice(p--,1);var l=n();void 0!==l&&(r=l)}}return r}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,n,a]},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={683:0,403:0};t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[s,c,i]=o,l=0;if(s.some((r=>0!==e[r]))){for(n in c)t.o(c,n)&&(t.m[n]=c[n]);if(i)var p=i(t)}for(r&&r(o);l<s.length;l++)a=s[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(p)},o=globalThis.webpackChunkmanonemusic=globalThis.webpackChunkmanonemusic||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var n=t.O(void 0,[403],(()=>t(47)));n=t.O(n)})();