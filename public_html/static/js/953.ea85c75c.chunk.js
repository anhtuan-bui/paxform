"use strict";(self.webpackChunkpaxfolio=self.webpackChunkpaxfolio||[]).push([[953],{5711:function(e,n,t){t.d(n,{r:function(){return l}});var r,s=t(2791),o=["title","titleId"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function a(e,n){var t=e.title,a=e.titleId,l=c(e,o);return s.createElement("svg",i({viewBox:"0 0 11 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},l),t?s.createElement("title",{id:a},t):null,r||(r=s.createElement("path",{d:"M10.1465 0.8125L5.77148 5.1875L1.39648 0.8125",stroke:"#656F84",strokeOpacity:.5,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var l=s.forwardRef(a);t.p},7769:function(e,n,t){t(2791);n.Z=t.p+"static/media/pinterest.75520ebff61d4e56394ef4aa45f56ec6.svg"},1700:function(e,n,t){t(2791);n.Z=t.p+"static/media/share.831fa353514f389867abdddbd7cc79fb.svg"},6953:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(9439),s=t(2791),o=t(1159),i=t(6503),c=t(1938),a=t(7769),l=t(7029),d=t(1700),u=t(5711),m=t(401),h=t(3079),_=t(184);function f(e){var n=e.callback,t=function(){document.querySelector(".overlay").classList.remove("overlay--display"),n()};return(0,_.jsx)("div",{className:"overlay",onClick:function(e){return t()}})}var v=t(3173),p=t(5402),x=t(7689),j=t(2579),b=[{name:"facebook",icon:o.Z,link:"https://"},{name:"facebook",icon:i.Z,link:"https://"},{name:"facebook",icon:c.Z,link:"https://"},{name:"facebook",icon:a.Z,link:"https://"},{name:"facebook",icon:l.Z,link:"https://"},{name:"facebook",icon:d.Z,link:"https://"}];function g(){var e=(0,s.useState)(!1),n=(0,r.Z)(e,2),t=n[0],o=n[1],i=(0,s.useState)([]),c=(0,r.Z)(i,2),a=c[0],l=c[1],d=(0,s.useState)(""),g=(0,r.Z)(d,2),y=g[0],k=g[1],N=(0,s.useState)(!1),Z=(0,r.Z)(N,2),S=Z[0],L=Z[1],E=(0,x.TH)().pathname.split("/"),O=(0,v.a)(p.es,{variables:{id:E[E.length-1]}}),C=O.loading,I=O.data,T=null===I||void 0===I?void 0:I.resource,A=C?(0,_.jsx)(j.Z,{width:"85%"}):null===T||void 0===T?void 0:T.title,q=null===T||void 0===T?void 0:T.content,R=C?(0,_.jsx)(j.Z,{width:120}):new Date(null===T||void 0===T?void 0:T.date).toLocaleDateString("en-US",{month:"long",year:"numeric",day:"numeric"}),B=null===T||void 0===T?void 0:T.featuredImage.node.sourceUrl;a[0]&&!y&&k(a[0]);var D=function(e){return e.toLowerCase().split(" ").join("-")},H=function(e,n){window.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top-document.body.getBoundingClientRect().top-n})},U=function(e){var n="".concat(e,"--display"),t=document.querySelector(".".concat(e));S?null===t||void 0===t||t.classList.add(n):null!==t&&void 0!==t&&t.classList.contains(n)&&(null===t||void 0===t||t.classList.remove(n))},P=function(){window.innerWidth<=m.y.medium?o(!0):o(!1)},z=function(){var e=document.querySelector(".resource__detail").querySelectorAll("h2"),n=document.querySelectorAll(".table_of_content__item");e.forEach((function(e,t){var r;e.getBoundingClientRect().top<200&&(null===(r=n[t])||void 0===r||r.classList.add("table_of_content__item--border-blue"),n.forEach((function(e,n){n!==t&&e.classList.contains("table_of_content__item--border-blue")&&e.classList.remove("table_of_content__item--border-blue")})))}))},M=t?(0,_.jsxs)("section",{className:"resource__dropdown",children:[(0,_.jsx)("p",{className:"resource__dropdown-title resource__share-name",children:"IN THIS CASE STUDY"}),(0,_.jsxs)("div",{className:"resource__dropdown-select-box",children:[(0,_.jsxs)("div",{className:"resource__dropdown-select",onClick:function(){L(!S)},children:[(0,_.jsx)("p",{className:"resource__dropdown-select-value",children:y}),(0,_.jsx)(u.r,{className:"resource__arrow-down"})]}),(0,_.jsx)("div",{className:"resource__dropdown-options",children:a.map((function(e,n){return(0,_.jsx)("p",{className:"resource__dropdown-option",value:D(e),onClick:function(e){return function(e){var n=document.getElementById(e.target.getAttribute("value"));H(n,-50),L(!1),k(e.target.innerText)}(e)},children:e},n)}))})]}),(0,_.jsx)(f,{callback:function(){L(!1)}})]}):"",W=!t&&a.length>0?(0,_.jsxs)("div",{className:"table_of_content",children:[(0,_.jsx)("p",{className:"resource__share-name",children:"IN THIS CASE STUDY"}),(0,_.jsx)("ul",{className:"table_of_content__table",children:null===a||void 0===a?void 0:a.map((function(e,n){return(0,_.jsx)("li",{className:"table_of_content__item",value:D(e),onClick:function(e){return function(e){var n=document.getElementById(e.target.getAttribute("value"));H(n,-50)}(e)},children:e},n)}))})]}):"";return(0,s.useEffect)((function(){return function(){var e=document.querySelector(".resource__detail").querySelectorAll("h2");e.forEach((function(e){e.setAttribute("id",D(e.innerText))}));var n=Array.from(e,(function(e){return e.innerText}));a.length<n.length&&l(n)}(),z(),U("resource__dropdown-options"),U("overlay"),P(),window.addEventListener("scroll",z),window.addEventListener("resize",P),function(){window.removeEventListener("resize",P),window.removeEventListener("scroll",z)}})),(0,_.jsxs)("main",{className:"resource hero",background:"light",children:[(0,_.jsx)("div",{className:"container",children:(0,_.jsxs)("div",{className:"resource__container",children:[M,(0,_.jsxs)("section",{className:"resource__content",children:[(0,_.jsx)("p",{className:"resource__time",children:R}),(0,_.jsx)("h1",{className:"resource__title section_title",children:A}),B?(0,_.jsx)("img",{className:"resource__image",src:B,alt:"sample img"}):(0,_.jsx)("p",{children:(0,_.jsx)(j.Z,{height:400,style:{borderRadius:"20px"}})}),q?(0,_.jsx)("div",{className:"resource__detail",dangerouslySetInnerHTML:{__html:q}}):(0,_.jsx)(w,{})]}),(0,_.jsxs)("section",{className:"resource__sidebar",children:[(0,_.jsxs)("div",{className:"resource__share ".concat(a.length>0?"":"resource__share--sticky"),children:[(0,_.jsx)("p",{className:"resource__share-name",children:"Share"}),(0,_.jsx)("div",{className:"resource__social-medias",children:b.map((function(e,n){return(0,_.jsx)("div",{className:"resource__social-media",children:(0,_.jsx)("a",{className:"resource__social-media-link",href:e.link,children:(0,_.jsx)("img",{className:"resource__social-media-img",src:e.icon,alt:e.name})})},n)}))})]}),W]})]})}),(0,_.jsx)(h.Z,{variant:"footer"})]})}var w=function(){return(0,_.jsxs)("div",{className:"loading resource__detail",children:[(0,_.jsxs)("p",{children:[(0,_.jsx)(j.Z,{count:5}),(0,_.jsx)(j.Z,{width:"75%"})]}),(0,_.jsxs)("p",{children:[(0,_.jsx)(j.Z,{count:5}),(0,_.jsx)(j.Z,{width:"75%"})]}),(0,_.jsx)("p",{children:(0,_.jsx)(j.Z,{height:400,style:{borderRadius:"20px"}})}),(0,_.jsxs)("p",{children:[(0,_.jsx)(j.Z,{count:5}),(0,_.jsx)(j.Z,{width:"75%"})]}),(0,_.jsxs)("p",{children:[(0,_.jsx)(j.Z,{count:5}),(0,_.jsx)(j.Z,{width:"75%"})]}),(0,_.jsx)("p",{children:(0,_.jsx)(j.Z,{height:400,style:{borderRadius:"20px"}})}),(0,_.jsxs)("p",{children:[(0,_.jsx)(j.Z,{count:5}),(0,_.jsx)(j.Z,{width:"75%"})]}),(0,_.jsxs)("p",{children:[(0,_.jsx)(j.Z,{count:5}),(0,_.jsx)(j.Z,{width:"75%"})]})]})}}}]);
//# sourceMappingURL=953.ea85c75c.chunk.js.map