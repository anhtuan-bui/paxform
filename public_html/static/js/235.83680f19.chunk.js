"use strict";(self.webpackChunkpaxfolio=self.webpackChunkpaxfolio||[]).push([[235],{1646:function(e,t,i){i(2791);t.Z=i.p+"static/media/repeatly illustration.3f6d4b4d5f9ec330ea6a1e8f6abaf29d.svg"},4293:function(e,t,i){i.d(t,{Z:function(){return o}});var n=i(4165),r=i(5861),a=i(9439),l=i(2791),s=i(184),o=function(e){var t,i=e.list,o=(0,l.useState)(i),c=(0,a.Z)(o,2),d=c[0],u=c[1],m=0,_=function(){var a=(0,r.Z)((0,n.Z)().mark((function r(){var a,l,s,o,c;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=e.length?e.length:4e3,l=a/4,s=0,o=document.querySelectorAll(".accordion__progress-bar"),c=document.querySelectorAll(".accordion__item-panel"),m=0,t=setInterval((function(){if(m+=1,d.forEach((function(e,t){!0===e.isOpened&&(o[s=t].style.width=m/l*100+"%")})),m>=l){m=0,i[s].isOpened=!1,c[s].style.maxHeight=null,e.titleHighlight?c[s].previousElementSibling.classList.remove("accordion__item-title--active-".concat(e.titleHighlight)):c[s].previousElementSibling.classList.remove("accordion__item-title--active-blue");var t=s>=i.length-1?0:s+1;i[t].isOpened=!0,c[t].style.maxHeight=c[t].scrollHeight+"px",e.titleHighlight?c[t].previousElementSibling.classList.add("accordion__item-title--active-".concat(e.titleHighlight)):c[t].previousElementSibling.classList.add("accordion__item-title--active-blue"),u(i)}}),1);case 7:case"end":return n.stop()}}),r)})));return function(){return a.apply(this,arguments)}}();return(0,l.useEffect)((function(){var e=document.querySelectorAll(".accordion__item-panel");return i.forEach((function(t,i){t.isOpened&&(e[i].style.maxHeight=e[i].scrollHeight+"px")})),_(),function(){clearInterval(t)}})),(0,s.jsx)(l.Fragment,{children:d.map((function(t,n){return(0,s.jsxs)("div",{className:"accordion__item ".concat("white"===e.fontColor?"accordion__item--white":""),children:[(0,s.jsx)("h2",{className:"accordion__item-title ".concat(t.isOpened?"accordion__item-title--active-".concat(e.titleHighlight?e.titleHighlight:"blue"):""),onClick:function(t){return function(t,n){m=0,t.target.classList.add("accordion__item-title--active-".concat(e.titleHighlight?e.titleHighlight:"blue"));var r=t.target.nextElementSibling;document.querySelectorAll(".accordion__item-title").forEach((function(i){i.classList.contains("accordion__item-title--active-".concat(e.titleHighlight?e.titleHighlight:"blue"))&&i!==t.target&&i.classList.remove("accordion__item-title--active-".concat(e.titleHighlight?e.titleHighlight:"blue"))})),r.style.maxHeight?r.style.maxHeight=null:r.style.maxHeight=r.scrollHeight+"px",document.querySelectorAll(".accordion__item").forEach((function(e){e!==t.target.parentElement&&(e.lastChild.style.maxHeight=null)})),d.forEach((function(e,t){e.isOpened=n===t})),u(i)}(t,n)},children:t.title}),(0,s.jsxs)("div",{className:"accordion__item-panel",children:[(0,s.jsx)("div",{className:"accordion__item-description ".concat("white"===e.fontColor?"accordion__item-description--white":""),children:(0,s.jsx)("p",{children:t.description})},"description-".concat(n)),(0,s.jsx)("div",{className:"accordion__progress",children:(0,s.jsx)("div",{className:"accordion__progress-bar accordion__progress-bar--".concat(e.progressBarColor?e.progressBarColor:"blue")})})]})]},n)}))})}},7105:function(e,t,i){i.d(t,{Z:function(){return o}});i(2791);var n=i(4913),r=i(1058),a=i(3173),l=i(5402),s=i(184);function o(e){var t,i=e.triangleColor,o=(0,a.a)(l.fx,{variables:{first:4}}),c=o.loading,d=o.data,u=c?Array.from({length:4}):null===d||void 0===d||null===(t=d.posts)||void 0===t?void 0:t.nodes;return(0,s.jsxs)("section",{className:"platform background--dark-blue platform__title--white",children:[(0,s.jsxs)("div",{className:"container platform__container",children:[(0,s.jsxs)("div",{className:"platform__top",children:[(0,s.jsxs)("div",{className:"platform__top-left",children:[(0,s.jsx)("p",{className:"platform__name platform__name--green section_name",children:"PAXFORM BLOG"}),(0,s.jsx)("h2",{className:"platform__title section_title",children:"Latest Blog\u2019s from Paxform."})]}),(0,s.jsx)("div",{className:"platform__top-right",children:(0,s.jsx)(n.Z,{type:"outline arrow",text:"See All Blog Post"})})]}),(0,s.jsx)("div",{className:"platform__content",children:u.map((function(e,t){return(0,s.jsx)(r.Z,{data:e,readLink:!0,background:"dark",term:"blogs",loading:c},t)}))})]}),(0,s.jsx)("div",{className:"bottom_triangle bottom_triangle--".concat(i)})]})}},8937:function(e,t,i){i.d(t,{Z:function(){return m}});var n,r=i(2791),a=i(4913),l=["title","titleId"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function c(e,t){var i=e.title,a=e.titleId,c=o(e,l);return r.createElement("svg",s({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),i?r.createElement("title",{id:a},i):null,n||(n=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.64022 2.10951C5.21916 2.06329 5.76874 1.83558 6.21072 1.45881C6.70992 1.03365 7.34421 0.80014 7.99992 0.80014C8.65564 0.80014 9.28993 1.03365 9.78912 1.45881C10.2311 1.83558 10.7807 2.06329 11.3596 2.10951C12.0134 2.16176 12.6272 2.44518 13.091 2.90895C13.5548 3.37273 13.8382 3.98653 13.8904 4.64031C13.9363 5.21901 14.164 5.76891 14.5411 6.21081C14.9663 6.71001 15.1998 7.3443 15.1998 8.00001C15.1998 8.65573 14.9663 9.29002 14.5411 9.78921C14.1644 10.2312 13.9366 10.7808 13.8904 11.3597C13.8382 12.0135 13.5548 12.6273 13.091 13.0911C12.6272 13.5548 12.0134 13.8383 11.3596 13.8905C10.7807 13.9367 10.2311 14.1644 9.78912 14.5412C9.28993 14.9664 8.65564 15.1999 7.99992 15.1999C7.34421 15.1999 6.70992 14.9664 6.21072 14.5412C5.76874 14.1644 5.21916 13.9367 4.64022 13.8905C3.98643 13.8383 3.37263 13.5548 2.90886 13.0911C2.44509 12.6273 2.16167 12.0135 2.10942 11.3597C2.0632 10.7808 1.83549 10.2312 1.45872 9.78921C1.03355 9.29002 0.800049 8.65573 0.800049 8.00001C0.800049 7.3443 1.03355 6.71001 1.45872 6.21081C1.83549 5.76884 2.0632 5.21925 2.10942 4.64031C2.16167 3.98653 2.44509 3.37273 2.90886 2.90895C3.37263 2.44518 3.98643 2.16176 4.64022 2.10951V2.10951ZM11.3362 6.83631C11.5002 6.66657 11.5909 6.43923 11.5888 6.20325C11.5868 5.96728 11.4921 5.74155 11.3253 5.57468C11.1584 5.40781 10.9327 5.31316 10.6967 5.31111C10.4607 5.30906 10.2334 5.39977 10.0636 5.56371L7.09992 8.52741L5.93622 7.36371C5.76648 7.19977 5.53914 7.10906 5.30316 7.11111C5.06718 7.11316 4.84145 7.20781 4.67459 7.37468C4.50772 7.54155 4.41307 7.76728 4.41102 8.00325C4.40896 8.23923 4.49968 8.46657 4.66362 8.63631L6.46362 10.4363C6.6324 10.605 6.86128 10.6998 7.09992 10.6998C7.33857 10.6998 7.56745 10.605 7.73622 10.4363L11.3362 6.83631V6.83631Z",fill:"#AEB4BA"})))}var d=r.forwardRef(c),u=(i.p,i(184));function m(e){var t=e.plans;return(0,u.jsx)("div",{className:"plans__pricing",children:t.map((function(e,t){return(0,u.jsxs)("div",{className:"pricing_box ".concat(e.mainColor?"pricing_box--".concat(e.mainColor):""),children:[(0,u.jsxs)("div",{className:"pricing_box__top",children:[(0,u.jsx)("div",{className:"pricing_box__dot ".concat(e.mainColor?"pricing_box__dot--".concat(e.mainColor):"")}),(0,u.jsx)("h2",{className:"pricing_box__title",children:e.title}),(0,u.jsx)("p",{className:"pricing_box__description",children:e.description}),(0,u.jsxs)("div",{className:"pricing_box__price",children:[(0,u.jsx)("span",{className:"pricing_box__price-bt",children:"number"===typeof e.price[0]?"$".concat(e.price[0]):e.price[0]}),(0,u.jsx)("span",{className:"pricing_box__price-forever",children:"forever"===e.price[1]?"/forever":""})]})]}),(0,u.jsxs)("div",{className:"pricing_box__bottom",children:["green"===e.mainColor?(0,u.jsx)(a.Z,{text:"Get Started",type:"flat-green arrow",color:"white"}):(0,u.jsx)(a.Z,{text:"Get Started",type:"outline arrow",color:"green"}),(0,u.jsx)("p",{className:"pricing_box__price-sub",children:"What\u2019s included"}),(0,u.jsx)("ul",{children:e.features.map((function(t,i){return(0,u.jsxs)("li",{children:[(0,u.jsx)(d,{className:"tick ".concat(e.mainColor?"tick--".concat(e.mainColor):"")}),(0,u.jsx)("span",{children:t})]},i)}))})]})]},t)}))})}},7112:function(e,t,i){i.d(t,{Z:function(){return u}});var n=i(5671),r=i(3144),a=i(136),l=i(9388),s=i(2791),o=i(1087),c=i(7923),d=i(184),u=function(e){(0,a.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i,[{key:"render",value:function(){return(0,d.jsxs)(o.rU,{className:"read_article",to:this.props.to,children:[(0,d.jsx)("span",{children:"Read Article"}),(0,d.jsx)(c.r,{className:"read_article__arrow"})]})}}]),i}(s.Component)},1058:function(e,t,i){i.d(t,{Z:function(){return l}});var n=i(2579),r=i(7112),a=i(184),l=function(e){var t,i,l,s,o,c=e.data,d=e.readLink,u=e.className,m=e.loading,_=e.term,h=e.background,p=new DOMParser,f=c?null===c||void 0===c||null===(t=c.resourceCategories)||void 0===t||null===(i=t.nodes[0])||void 0===i?void 0:i.name:(0,a.jsx)(n.Z,{width:"50%"}),v=c?null===c||void 0===c?void 0:c.title:(0,a.jsx)(n.Z,{count:2}),g=null===c||void 0===c?void 0:c.slug,x=c?null===(l=p.parseFromString(null===c||void 0===c?void 0:c.content,"text/html").getElementsByTagName("p")[0])||void 0===l?void 0:l.innerText:(0,a.jsx)(n.Z,{count:3}),b=null===c||void 0===c||null===(s=c.featuredImage)||void 0===s||null===(o=s.node)||void 0===o?void 0:o.sourceUrl,j="/".concat(_,"/").concat(g),C=m?(0,a.jsx)(n.Z,{width:"75%"}):(0,a.jsx)(r.Z,{to:j}),N=h?"related_card__title--".concat(h):"";return(0,a.jsxs)("div",{className:"related_card",children:[(0,a.jsxs)("div",{className:"related_card__top",children:[b?(0,a.jsx)("div",{className:"".concat(u||""," related_card__image"),children:(0,a.jsx)("img",{src:b,alt:"first story"})}):(0,a.jsx)(n.Z,{height:180,style:{borderRadius:"20px"}}),f?(0,a.jsx)("p",{className:"related_card__category",children:f}):"",v?(0,a.jsx)("h2",{className:"related_card__title ".concat(N),children:(0,a.jsx)("a",{className:"related_card__title-link",href:j,children:v})}):"",x?(0,a.jsx)("p",{className:"related_card__description",children:x}):""]}),(0,a.jsx)("div",{className:"related_card__bottom",children:d?C:""})]})}},5569:function(e,t,i){i.d(t,{Z:function(){return b}});var n=i(5671),r=i(3144),a=i(136),l=i(9388),s=i(168),o=i(2791);var c=i.p+"static/media/left.482b7a8cfb145445f061ba6fd0059559.svg";var d,u=i.p+"static/media/right.860f22fa1256bcd17b01333cd0b9705b.svg",m=i(8563),_=i(2558),h=i(401),p=(i(2532),i(2326),i(4928),i(7743)),f=i(3173),v=i(184),g=(0,p.Ps)(d||(d=(0,s.Z)(["\n  query GetAllTestimonials {\n    testimonials {\n      nodes {\n        title\n        content\n        position\n      }\n    }\n  }\n"]))),x={numberOftestimonialsPerView:3,autoplaySpeed:4e3},b=function(e){(0,a.Z)(i,e);var t=(0,l.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).testimonials=[],r.handleResize=function(){var e=window.innerWidth;e>=h.y.large?x={numberOftestimonialsPerView:3}:e<h.y.large&&e>=h.y.medium||e<h.y.medium&&e>=h.y.small?x={numberOftestimonialsPerView:2}:e<h.y.small&&(x={numberOftestimonialsPerView:1}),r.setState(x)},r.state=null,r}return(0,r.Z)(i,[{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.handleResize),this.setState(this.testimonials)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return(0,v.jsx)(j,{values:this.testimonials})}}]),i}(o.Component),j=function(e){var t=(0,o.useRef)(),i=(0,f.a)(g),n=i.loading,r=i.error,a=i.data;if(n)return(0,v.jsx)("div",{children:"Loading..."});if(r)return(0,v.jsxs)("div",{children:["Error: ",r]});var l=a.testimonials.nodes;return(0,v.jsx)("div",{className:"container",children:(0,v.jsxs)("div",{className:"testimonial__container",children:[(0,v.jsx)("p",{className:"testimonial__name section_name",children:"TESTIMONIAL"}),(0,v.jsx)("h2",{className:"testimonial__title",children:"What people are saying about Paxform"}),(0,v.jsxs)("div",{className:"testimonial__swiper",children:[(0,v.jsx)(m.tq,{slidesPerView:x.numberOftestimonialsPerView,spaceBetween:24,slidesPerGroup:x.numberOftestimonialsPerView,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},autoHeight:!1,pagination:{clickable:!0},onBeforeInit:function(e){t.current=e},modules:[_.pt,_.tl,_.W_],className:"testimonial__slider",children:l.map((function(e,t){return(0,v.jsx)(m.o5,{children:(0,v.jsxs)("div",{className:"testimonial_card",children:[(0,v.jsx)("div",{className:"testimonial_card__description",dangerouslySetInnerHTML:{__html:e.content}}),(0,v.jsxs)("div",{className:"testimonial_card__name-box",children:[(0,v.jsx)("h3",{className:"testimonial_card__name",children:e.title}),(0,v.jsx)("p",{className:"testimonial_card__position",children:e.position})]})]})},t)}))}),(0,v.jsx)("div",{className:"slider__buttons--left",children:(0,v.jsx)("button",{onClick:function(){var e;return null===(e=t.current)||void 0===e?void 0:e.slidePrev()},children:(0,v.jsx)("img",{src:c,alt:"arrow left"})})}),(0,v.jsx)("div",{className:"slider__buttons--right",children:(0,v.jsx)("button",{onClick:function(){var e;return null===(e=t.current)||void 0===e?void 0:e.slideNext()},children:(0,v.jsx)("img",{src:u,alt:"arrow right"})})})]})]})})}},4928:function(){},2326:function(){},6743:function(e,t,i){e.exports=i.p+"static/media/Hero Illustration.c2a4b4cabb8c05761e41.png"}}]);
//# sourceMappingURL=235.83680f19.chunk.js.map