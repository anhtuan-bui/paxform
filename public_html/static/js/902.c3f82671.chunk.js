"use strict";(self.webpackChunkpaxfolio=self.webpackChunkpaxfolio||[]).push([[902],{4293:function(e,t,i){i.d(t,{Z:function(){return s}});var a=i(9439),r=i(2791),n=i(184),s=function(e){var t,i=e.list,s=(0,r.useState)(i),o=(0,a.Z)(s,1)[0],l=(0,r.useState)(0),c=(0,a.Z)(l,2),d=c[0],p=c[1],m=function(t){e.featureIndex&&(e.featureIndex(t),console.log("changed"))},g=function(){e.timeStart&&(e.timeStart(),console.log("start"))},h=function(){e.timeEnd&&e.timeEnd()},u=function(t,i){p(0),function(t){!0===e.titleClicked&&(h(),setTimeout((function(){m(t),g()}),1100))}(i),t.target.classList.add("accordion__item-title--active-".concat(e.titleHighlight?e.titleHighlight:"blue"));var a=t.target.nextElementSibling;document.querySelectorAll(".accordion__item-title").forEach((function(i){i.classList.contains("accordion__item-title--active-".concat(e.titleHighlight?e.titleHighlight:"blue"))&&i!==t.target&&i.classList.remove("accordion__item-title--active-".concat(e.titleHighlight?e.titleHighlight:"blue"))})),a.style.maxHeight?a.style.maxHeight=null:a.style.maxHeight=a.scrollHeight+"px",document.querySelectorAll(".accordion__item").forEach((function(e){e!==t.target.parentElement&&(e.lastChild.style.maxHeight=null)})),o.forEach((function(e,t){e.isOpened=i===t}))};return(0,r.useEffect)((function(){var a=document.querySelectorAll(".accordion__item-panel");return o.forEach((function(e,t){e.isOpened&&(a[t].style.maxHeight=a[t].scrollHeight+"px")})),function(){var a=(e.length?e.length:6e3)/4,r=0,n=document.querySelectorAll(".accordion__progress-bar"),s=document.querySelectorAll(".accordion__item-panel");t=setInterval((function(){if(p(d+1),o.forEach((function(e,t){!0===e.isOpened&&(n[r=t].style.width=d/a*100+"%")})),d>=1100&&h(),d>=a){p(0),i[r].isOpened=!1,s[r].style.maxHeight=null,e.titleHighlight?s[r].previousElementSibling.classList.remove("accordion__item-title--active-".concat(e.titleHighlight)):s[r].previousElementSibling.classList.remove("accordion__item-title--active-blue");var t=r>=i.length-1?0:r+1;i[t].isOpened=!0,o.forEach((function(e,i){e.isOpened=t===i})),m(t),g(),s[t].style.maxHeight=s[t].scrollHeight+"px",e.titleHighlight?s[t].previousElementSibling.classList.add("accordion__item-title--active-".concat(e.titleHighlight)):s[t].previousElementSibling.classList.add("accordion__item-title--active-blue")}}),1)}(),function(){clearInterval(t)}})),(0,n.jsx)(r.Fragment,{children:o.map((function(t,i){return(0,n.jsxs)("div",{className:"accordion__item ".concat("white"===e.fontColor?"accordion__item--white":""),children:[(0,n.jsx)("h2",{className:"accordion__item-title ".concat(t.isOpened?"accordion__item-title--active-".concat(e.titleHighlight?e.titleHighlight:"blue"):""),onClick:function(e){return u(e,i)},children:t.title}),(0,n.jsxs)("div",{className:"accordion__item-panel",children:[(0,n.jsx)("div",{className:"accordion__item-description ".concat("white"===e.fontColor?"accordion__item-description--white":""),children:(0,n.jsx)("p",{children:t.description})},"description-".concat(i)),(0,n.jsx)("div",{className:"accordion__progress",children:(0,n.jsx)("div",{className:"accordion__progress-bar accordion__progress-bar--".concat(e.progressBarColor?e.progressBarColor:"blue")})})]})]},i)}))})}},8937:function(e,t,i){i.d(t,{Z:function(){return g}});var a,r=i(2791),n=i(4913),s=["title","titleId"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function c(e,t){var i=e.title,n=e.titleId,c=l(e,s);return r.createElement("svg",o({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},c),i?r.createElement("title",{id:n},i):null,a||(a=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.64022 2.10951C5.21916 2.06329 5.76874 1.83558 6.21072 1.45881C6.70992 1.03365 7.34421 0.80014 7.99992 0.80014C8.65564 0.80014 9.28993 1.03365 9.78912 1.45881C10.2311 1.83558 10.7807 2.06329 11.3596 2.10951C12.0134 2.16176 12.6272 2.44518 13.091 2.90895C13.5548 3.37273 13.8382 3.98653 13.8904 4.64031C13.9363 5.21901 14.164 5.76891 14.5411 6.21081C14.9663 6.71001 15.1998 7.3443 15.1998 8.00001C15.1998 8.65573 14.9663 9.29002 14.5411 9.78921C14.1644 10.2312 13.9366 10.7808 13.8904 11.3597C13.8382 12.0135 13.5548 12.6273 13.091 13.0911C12.6272 13.5548 12.0134 13.8383 11.3596 13.8905C10.7807 13.9367 10.2311 14.1644 9.78912 14.5412C9.28993 14.9664 8.65564 15.1999 7.99992 15.1999C7.34421 15.1999 6.70992 14.9664 6.21072 14.5412C5.76874 14.1644 5.21916 13.9367 4.64022 13.8905C3.98643 13.8383 3.37263 13.5548 2.90886 13.0911C2.44509 12.6273 2.16167 12.0135 2.10942 11.3597C2.0632 10.7808 1.83549 10.2312 1.45872 9.78921C1.03355 9.29002 0.800049 8.65573 0.800049 8.00001C0.800049 7.3443 1.03355 6.71001 1.45872 6.21081C1.83549 5.76884 2.0632 5.21925 2.10942 4.64031C2.16167 3.98653 2.44509 3.37273 2.90886 2.90895C3.37263 2.44518 3.98643 2.16176 4.64022 2.10951V2.10951ZM11.3362 6.83631C11.5002 6.66657 11.5909 6.43923 11.5888 6.20325C11.5868 5.96728 11.4921 5.74155 11.3253 5.57468C11.1584 5.40781 10.9327 5.31316 10.6967 5.31111C10.4607 5.30906 10.2334 5.39977 10.0636 5.56371L7.09992 8.52741L5.93622 7.36371C5.76648 7.19977 5.53914 7.10906 5.30316 7.11111C5.06718 7.11316 4.84145 7.20781 4.67459 7.37468C4.50772 7.54155 4.41307 7.76728 4.41102 8.00325C4.40896 8.23923 4.49968 8.46657 4.66362 8.63631L6.46362 10.4363C6.6324 10.605 6.86128 10.6998 7.09992 10.6998C7.33857 10.6998 7.56745 10.605 7.73622 10.4363L11.3362 6.83631V6.83631Z",fill:"#AEB4BA"})))}var d=r.forwardRef(c),p=(i.p,i(8825)),m=i(184);function g(e){var t=e.plans,i=e.page,a="https://register.paxform.com/",s="https://play.google.com/store/apps/details?id=com.paxform&hl=en_AU&gl=US",o="https://apps.apple.com/app/paxform/id1565492350";return(0,m.jsx)("div",{className:"plans__pricing",children:t.map((function(e,t){return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)("div",{className:"pricing_box pricing_box--top ".concat(e.mainColor?"pricing_box--".concat(e.mainColor):""),children:(0,m.jsxs)("div",{className:"pricing_box__top",children:[(0,m.jsx)("div",{className:"pricing_box__dot ".concat(e.mainColor?"pricing_box__dot--".concat(e.mainColor):"")}),(0,m.jsx)("h2",{className:"pricing_box__title",children:e.title}),(0,m.jsx)("p",{className:"pricing_box__description",children:e.description})]})}),(0,m.jsxs)("div",{className:"pricing_box ".concat(e.mainColor?"pricing_box--".concat(e.mainColor):""),children:[(0,m.jsxs)("div",{className:"pricing_box__price",children:[(0,m.jsx)("span",{className:"pricing_box__price-bt",children:"number"===typeof e.price[0]?"US$".concat(e.price[0].toFixed(2)):e.price[0]}),(0,m.jsx)("span",{className:"pricing_box__price-forever",children:e.price[1]?" / ".concat(e.price[1].toLowerCase()):""})]}),"personal"===i?"green"===e.mainColor?(0,m.jsxs)("div",{children:[(0,m.jsx)(n.Z,{text:(0,p.t)("downloadAndroid"),type:"flat-green arrow",color:"white",href:s}),(0,m.jsx)(n.Z,{text:(0,p.t)("downloadApple"),type:"flat-green arrow",color:"white",href:o})]}):(0,m.jsxs)("div",{children:[(0,m.jsx)(n.Z,{text:(0,p.t)("downloadAndroid"),type:"outline arrow",color:"green",href:s}),(0,m.jsx)(n.Z,{text:(0,p.t)("downloadApple"),type:"outline arrow",color:"green",href:o})]}):"green"===e.mainColor?(0,m.jsx)(n.Z,{text:(0,p.t)("register"),type:"flat-green arrow",color:"white",href:a}):(0,m.jsx)(n.Z,{text:(0,p.t)("register"),type:"outline arrow",color:"green",href:a})]}),(0,m.jsx)("div",{className:"pricing_box pricing_box--bottom ".concat(e.mainColor?"pricing_box--".concat(e.mainColor):""),children:(0,m.jsxs)("div",{className:"pricing_box__bottom",children:[(0,m.jsx)("p",{className:"pricing_box__price-sub",children:(0,p.t)("businessPage.plans.included")}),(0,m.jsx)("ul",{children:e.features.map((function(t,i){return(0,m.jsxs)("li",{children:[(0,m.jsx)(d,{className:"tick ".concat(e.mainColor?"tick--".concat(e.mainColor):"")}),(0,m.jsx)("span",{children:t})]},i)}))})]})})]},t)}))})}},3965:function(e,t,i){i.r(t),i.d(t,{default:function(){return j}});var a=i(9439),r=i(2791),n=i(4913),s=i.p+"static/media/Hero Illustration.c2a4b4cabb8c05761e41.png",o=i(5569),l=i(6270),c=i(8937),d=i(4293),p=i(9230),m=i.p+"static/media/access.6a9902af17a37a738dbe.png",g=i.p+"static/media/fill.7b11d3c651bce834e30f.png",h=i.p+"static/media/chat.33bf4186e4aff271f21c.png",u=i.p+"static/media/disclosure.758b684495d264bace07.png",f=i.p+"static/media/secret.63ca6fe0e36dc2eca6da.png",_=i.p+"static/media/share.8b2dbfdf46a4d50750ac.png",x=i.p+"static/media/tired.c1864ff37adc54707f80.png",b=i(184);function j(){var e=(0,p.$G)().t,t=[{title:e("personalPage.features.title1"),description:e("personalPage.features.description1"),isOpened:!0,image:m},{title:e("personalPage.features.title2"),description:e("personalPage.features.description2"),isOpened:!1,image:g},{title:e("personalPage.features.title3"),description:e("personalPage.features.description3"),isOpened:!1,image:h},{title:e("personalPage.features.title4"),description:e("personalPage.features.description4"),isOpened:!1,image:_},{title:e("personalPage.features.title5"),description:e("personalPage.features.description5"),isOpened:!1,image:f},{title:e("personalPage.features.title6"),description:e("personalPage.features.description6"),isOpened:!1,image:u}],i=[{mainColor:"grey",title:e("free"),price:[0,""],description:e("personalPage.plans.description1"),features:Array.from(Array(9),(function(t,i){return e("personalPage.plans.freeFeatures.feature".concat(i+1))}))},{mainColor:"green",title:e("premium"),price:[49.9,""],description:e("personalPage.plans.description2"),features:Array.from(Array(9),(function(t,i){return e("personalPage.plans.premiumFeatures.feature".concat(i+1))}))},{mainColor:"blue",title:e("family"),price:[99.9,""],description:e("personalPage.plans.description3"),features:Array.from(Array(9),(function(t,i){return e("personalPage.plans.familyFeatures.feature".concat(i+1))}))}],j=(0,r.useState)(t[0].image),v=(0,a.Z)(j,2),C=v[0],N=v[1];return(0,b.jsxs)("main",{className:"personal",children:[(0,b.jsxs)("section",{className:"hero",children:[(0,b.jsxs)("div",{className:"container hero__wrapper",children:[(0,b.jsxs)("div",{className:"hero__content",children:[(0,b.jsx)("p",{className:"hero__name",children:e("personalPage.hero.name")}),(0,b.jsx)("h1",{className:"hero__title",children:e("personalPage.hero.title")}),(0,b.jsx)("p",{className:"hero__description",children:e("personalPage.hero.description")}),(0,b.jsx)("div",{className:"hero__button",children:(0,b.jsx)(n.Z,{text:e("personalPage.hero.seePlan"),type:"flat-white arrow",color:"green",href:"#personal-plan"})})]}),(0,b.jsx)("div",{className:"hero__image",children:(0,b.jsx)("img",{src:s,alt:"personal hero",className:"hero__image-large"})})]}),(0,b.jsx)("div",{className:"bottom_triangle bottom_triangle--low-blue"})]}),(0,b.jsxs)("section",{className:"flex_box",children:[(0,b.jsxs)("div",{className:"container flex_box__container",children:[(0,b.jsx)("div",{className:"flex_box__image",children:(0,b.jsx)("img",{src:x,alt:"fill out form"})}),(0,b.jsxs)("div",{className:"flex_box__content",children:[(0,b.jsx)("h1",{className:"flex_box__content-title",children:e("personalPage.flexBox.title")}),(0,b.jsx)("div",{className:"flex_box__content-description",children:e("personalPage.flexBox.description")})]})]}),(0,b.jsx)("div",{className:"bottom_triangle bottom_triangle--blue"})]}),(0,b.jsxs)("section",{className:"features",children:[(0,b.jsxs)("div",{className:"container",children:[(0,b.jsx)("p",{className:"features__name section_name",children:e("personalPage.featuresSection.name")}),(0,b.jsx)("h1",{className:"features__title",children:e("personalPage.featuresSection.title")}),(0,b.jsxs)("div",{className:"features__container",children:[(0,b.jsx)("div",{className:"features__image",children:(0,b.jsx)("img",{src:C,alt:"forms from Paxform"})}),(0,b.jsx)("div",{className:"features__accordion",children:(0,b.jsx)(d.Z,{list:t,fontColor:"white",progressBarColor:"dark-green",titleHighlight:"white",featureIndex:function(e){N(t[e].image)},timeStart:function(){var e=document.querySelector(".features__image");e.style.transform="translate(0)",e.style.opacity=1},timeEnd:function(){var e=document.querySelector(".features__image");e.style.transform="translate(20%)",e.style.opacity=0},titleClicked:!0})})]})]}),(0,b.jsx)("div",{className:"bottom_triangle bottom_triangle--white"})]}),(0,b.jsx)("section",{id:"personal-plan",className:"plans",children:(0,b.jsxs)("div",{className:"container plans__container",children:[(0,b.jsxs)("div",{className:"plans__top-title",children:[(0,b.jsx)("p",{className:"plans__name section_name",children:e("personalPage.planSection.name")}),(0,b.jsx)("h1",{className:"plans__title section_title",children:e("personalPage.planSection.title")})]}),(0,b.jsx)("div",{className:"plans__top",children:(0,b.jsx)("div",{className:"plans__top-button"})}),(0,b.jsx)(c.Z,{plans:i,page:"personal"})]})}),(0,b.jsxs)("section",{className:"testimonial",children:[(0,b.jsx)(o.Z,{}),(0,b.jsx)("div",{className:"bottom_triangle bottom_triangle--footer"})]}),(0,b.jsx)(l.Z,{})]})}}}]);
//# sourceMappingURL=902.c3f82671.chunk.js.map