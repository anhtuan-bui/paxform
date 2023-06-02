"use strict";(self.webpackChunkpaxfolio=self.webpackChunkpaxfolio||[]).push([[974],{4293:function(e,i,t){t.d(i,{Z:function(){return o}});var n=t(4165),r=t(5861),l=t(9439),c=t(2791),a=t(184),o=function(e){var i,t=e.list,o=(0,c.useState)(t),s=(0,l.Z)(o,2),d=s[0],u=s[1],m=0,h=function(i){e.featureIndex&&(e.featureIndex(i),p())},p=function(){e.timeStart&&e.timeStart()},_=function(){e.timeEnd&&e.timeEnd()},f=function(i,n){m=0,function(i){!0===e.titleClicked&&(_(),setTimeout((function(){p(),h(i)}),1e3))}(n),i.target.classList.add("accordion__item-title--active-".concat(e.titleHighlight?e.titleHighlight:"blue"));var r=i.target.nextElementSibling;document.querySelectorAll(".accordion__item-title").forEach((function(t){t.classList.contains("accordion__item-title--active-".concat(e.titleHighlight?e.titleHighlight:"blue"))&&t!==i.target&&t.classList.remove("accordion__item-title--active-".concat(e.titleHighlight?e.titleHighlight:"blue"))})),r.style.maxHeight?r.style.maxHeight=null:r.style.maxHeight=r.scrollHeight+"px",document.querySelectorAll(".accordion__item").forEach((function(e){e!==i.target.parentElement&&(e.lastChild.style.maxHeight=null)})),d.forEach((function(e,i){e.isOpened=n===i})),u(t)},g=function(){var l=(0,r.Z)((0,n.Z)().mark((function r(){var l,c,a,o,s;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:l=e.length?e.length:4e3,c=l/4,a=0,o=document.querySelectorAll(".accordion__progress-bar"),s=document.querySelectorAll(".accordion__item-panel"),m=0,i=setInterval((function(){if(m+=1,d.forEach((function(e,i){!0===e.isOpened&&(o[a=i].style.width=m/c*100+"%")})),m>=800&&_(),m>=c){m=0,t[a].isOpened=!1,s[a].style.maxHeight=null,e.titleHighlight?s[a].previousElementSibling.classList.remove("accordion__item-title--active-".concat(e.titleHighlight)):s[a].previousElementSibling.classList.remove("accordion__item-title--active-blue");var i=a>=t.length-1?0:a+1;t[i].isOpened=!0,h(i),p(),s[i].style.maxHeight=s[i].scrollHeight+"px",e.titleHighlight?s[i].previousElementSibling.classList.add("accordion__item-title--active-".concat(e.titleHighlight)):s[i].previousElementSibling.classList.add("accordion__item-title--active-blue"),u(t)}}),1);case 7:case"end":return n.stop()}}),r)})));return function(){return l.apply(this,arguments)}}();return(0,c.useEffect)((function(){var e=document.querySelectorAll(".accordion__item-panel");return t.forEach((function(i,t){i.isOpened&&(h(t),e[t].style.maxHeight=e[t].scrollHeight+"px")})),g(),function(){clearInterval(i)}})),(0,a.jsx)(c.Fragment,{children:d.map((function(i,t){return(0,a.jsxs)("div",{className:"accordion__item ".concat("white"===e.fontColor?"accordion__item--white":""),children:[(0,a.jsx)("h2",{className:"accordion__item-title ".concat(i.isOpened?"accordion__item-title--active-".concat(e.titleHighlight?e.titleHighlight:"blue"):""),onClick:function(e){return f(e,t)},children:i.title}),(0,a.jsxs)("div",{className:"accordion__item-panel",children:[(0,a.jsx)("div",{className:"accordion__item-description ".concat("white"===e.fontColor?"accordion__item-description--white":""),children:(0,a.jsx)("p",{children:i.description})},"description-".concat(t)),(0,a.jsx)("div",{className:"accordion__progress",children:(0,a.jsx)("div",{className:"accordion__progress-bar accordion__progress-bar--".concat(e.progressBarColor?e.progressBarColor:"blue")})})]})]},t)}))})}},8937:function(e,i,t){t.d(i,{Z:function(){return h}});var n,r=t(2791),l=t(4913),c=["title","titleId"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function s(e,i){var t=e.title,l=e.titleId,s=o(e,c);return r.createElement("svg",a({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:i,"aria-labelledby":l},s),t?r.createElement("title",{id:l},t):null,n||(n=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.64022 2.10951C5.21916 2.06329 5.76874 1.83558 6.21072 1.45881C6.70992 1.03365 7.34421 0.80014 7.99992 0.80014C8.65564 0.80014 9.28993 1.03365 9.78912 1.45881C10.2311 1.83558 10.7807 2.06329 11.3596 2.10951C12.0134 2.16176 12.6272 2.44518 13.091 2.90895C13.5548 3.37273 13.8382 3.98653 13.8904 4.64031C13.9363 5.21901 14.164 5.76891 14.5411 6.21081C14.9663 6.71001 15.1998 7.3443 15.1998 8.00001C15.1998 8.65573 14.9663 9.29002 14.5411 9.78921C14.1644 10.2312 13.9366 10.7808 13.8904 11.3597C13.8382 12.0135 13.5548 12.6273 13.091 13.0911C12.6272 13.5548 12.0134 13.8383 11.3596 13.8905C10.7807 13.9367 10.2311 14.1644 9.78912 14.5412C9.28993 14.9664 8.65564 15.1999 7.99992 15.1999C7.34421 15.1999 6.70992 14.9664 6.21072 14.5412C5.76874 14.1644 5.21916 13.9367 4.64022 13.8905C3.98643 13.8383 3.37263 13.5548 2.90886 13.0911C2.44509 12.6273 2.16167 12.0135 2.10942 11.3597C2.0632 10.7808 1.83549 10.2312 1.45872 9.78921C1.03355 9.29002 0.800049 8.65573 0.800049 8.00001C0.800049 7.3443 1.03355 6.71001 1.45872 6.21081C1.83549 5.76884 2.0632 5.21925 2.10942 4.64031C2.16167 3.98653 2.44509 3.37273 2.90886 2.90895C3.37263 2.44518 3.98643 2.16176 4.64022 2.10951V2.10951ZM11.3362 6.83631C11.5002 6.66657 11.5909 6.43923 11.5888 6.20325C11.5868 5.96728 11.4921 5.74155 11.3253 5.57468C11.1584 5.40781 10.9327 5.31316 10.6967 5.31111C10.4607 5.30906 10.2334 5.39977 10.0636 5.56371L7.09992 8.52741L5.93622 7.36371C5.76648 7.19977 5.53914 7.10906 5.30316 7.11111C5.06718 7.11316 4.84145 7.20781 4.67459 7.37468C4.50772 7.54155 4.41307 7.76728 4.41102 8.00325C4.40896 8.23923 4.49968 8.46657 4.66362 8.63631L6.46362 10.4363C6.6324 10.605 6.86128 10.6998 7.09992 10.6998C7.33857 10.6998 7.56745 10.605 7.73622 10.4363L11.3362 6.83631V6.83631Z",fill:"#AEB4BA"})))}var d=r.forwardRef(s),u=(t.p,t(8825)),m=t(184);function h(e){var i=e.plans;return(0,m.jsx)("div",{className:"plans__pricing",children:i.map((function(e,i){return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)("div",{className:"pricing_box pricing_box--top ".concat(e.mainColor?"pricing_box--".concat(e.mainColor):""),children:(0,m.jsxs)("div",{className:"pricing_box__top",children:[(0,m.jsx)("div",{className:"pricing_box__dot ".concat(e.mainColor?"pricing_box__dot--".concat(e.mainColor):"")}),(0,m.jsx)("h2",{className:"pricing_box__title",children:e.title}),(0,m.jsx)("p",{className:"pricing_box__description",children:e.description}),(0,m.jsxs)("div",{className:"pricing_box__price",children:[(0,m.jsx)("span",{className:"pricing_box__price-bt",children:"number"===typeof e.price[0]?"$".concat(e.price[0]):e.price[0]}),(0,m.jsx)("span",{className:"pricing_box__price-forever",children:"forever"===e.price[1]?"/forever":""})]})]})}),(0,m.jsx)("div",{className:"pricing_box ".concat(e.mainColor?"pricing_box--".concat(e.mainColor):""),children:"green"===e.mainColor?(0,m.jsx)(l.Z,{text:(0,u.t)("getStartedBtn"),type:"flat-green arrow",color:"white",href:"/pricing"}):(0,m.jsx)(l.Z,{text:(0,u.t)("getStartedBtn"),type:"outline arrow",color:"green",href:"https://register.dev.paxform.net/"})}),(0,m.jsx)("div",{className:"pricing_box pricing_box--bottom ".concat(e.mainColor?"pricing_box--".concat(e.mainColor):""),children:(0,m.jsxs)("div",{className:"pricing_box__bottom",children:[(0,m.jsx)("p",{className:"pricing_box__price-sub",children:(0,u.t)("businessPage.plans.included")}),(0,m.jsx)("ul",{children:e.features.map((function(i,t){return(0,m.jsxs)("li",{children:[(0,m.jsx)(d,{className:"tick ".concat(e.mainColor?"tick--".concat(e.mainColor):"")}),(0,m.jsx)("span",{children:i})]},t)}))})]})})]},i)}))})}},5569:function(e,i,t){t.d(i,{Z:function(){return b}});var n=t(5671),r=t(3144),l=t(136),c=t(2572),a=t(2791);var o=t.p+"static/media/left.482b7a8cfb145445f061ba6fd0059559.svg";var s=t.p+"static/media/right.860f22fa1256bcd17b01333cd0b9705b.svg",d=t(8563),u=t(2558),m=t(401),h=(t(2532),t(2326),t(4928),t(3173)),p=t(2579),_=t(5402),f=t(9230),g=t(9977),v=t(184),x={numberOftestimonialsPerView:3,autoplaySpeed:4e3},b=function(e){(0,l.Z)(t,e);var i=(0,c.Z)(t);function t(e){var r;return(0,n.Z)(this,t),(r=i.call(this,e)).testimonials=[],r.handleResize=function(){var e=window.innerWidth;e>=m.y.large?x={numberOftestimonialsPerView:4}:e<m.y.large&&e>=m.y.medium||e<m.y.medium&&e>=m.y.small?x={numberOftestimonialsPerView:2}:e<m.y.small&&(x={numberOftestimonialsPerView:1}),r.setState(x)},r.state=null,r}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.handleResize),this.setState(this.testimonials)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return(0,v.jsx)(j,{values:this.testimonials})}}]),t}(a.Component),j=function(){var e,i=(0,a.useRef)(),t=(0,f.$G)().t,n=(0,h.a)(_.l7,{variables:{language:(0,g.hi)(),first:10}}),r=n.loading,l=n.data,c=r?Array.from({length:4}):null===l||void 0===l||null===(e=l.testimonials)||void 0===e?void 0:e.nodes;return(0,v.jsx)("div",{className:"container",children:(0,v.jsxs)("div",{className:"testimonial__container",children:[(0,v.jsx)("p",{className:"testimonial__name section_name",children:t("testimonial.name")}),(0,v.jsx)("h2",{className:"testimonial__title",children:t("testimonial.title")}),(0,v.jsxs)("div",{className:"testimonial__swiper",children:[(0,v.jsx)(d.tq,{slidesPerView:x.numberOftestimonialsPerView,spaceBetween:24,slidesPerGroup:x.numberOftestimonialsPerView,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},autoHeight:!1,pagination:{clickable:!0},onBeforeInit:function(e){i.current=e},modules:[u.pt,u.tl,u.W_],className:"testimonial__slider",children:null===c||void 0===c?void 0:c.map((function(e,i){return(0,v.jsx)(d.o5,{children:(0,v.jsx)(C,{data:e})},i)}))}),(0,v.jsx)("div",{className:"slider__buttons--left",children:(0,v.jsx)("button",{onClick:function(){var e;return null===(e=i.current)||void 0===e?void 0:e.slidePrev()},children:(0,v.jsx)("img",{src:o,alt:"arrow left"})})}),(0,v.jsx)("div",{className:"slider__buttons--right",children:(0,v.jsx)("button",{onClick:function(){var e;return null===(e=i.current)||void 0===e?void 0:e.slideNext()},children:(0,v.jsx)("img",{src:s,alt:"arrow right"})})})]})]})})},C=function(e){var i=e.data,t=null===i||void 0===i?void 0:i.content,n=i?null===i||void 0===i?void 0:i.title:(0,v.jsx)(p.Z,{width:"40%"}),r=i?null===i||void 0===i?void 0:i.position:(0,v.jsx)(p.Z,{width:"50%"});return(0,v.jsxs)("div",{className:"testimonial_card",children:[t?(0,v.jsx)("div",{className:"testimonial_card__description",dangerouslySetInnerHTML:{__html:t}}):(0,v.jsxs)("div",{className:"testimonial_card__description",children:[(0,v.jsx)(p.Z,{count:5}),(0,v.jsx)(p.Z,{width:"75%"})]}),(0,v.jsxs)("div",{className:"testimonial_card__name-box",children:[(0,v.jsx)("h3",{className:"testimonial_card__name",children:n}),(0,v.jsx)("p",{className:"testimonial_card__position",children:r})]})]})}},4928:function(){},2326:function(){}}]);
//# sourceMappingURL=974.0575717a.chunk.js.map