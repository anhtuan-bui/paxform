"use strict";(self.webpackChunkpaxfolio=self.webpackChunkpaxfolio||[]).push([[893],{5569:function(e,i,s){s.d(i,{Z:function(){return g}});var a=s(5671),t=s(3144),l=s(136),n=s(2572),r=s(2791);var o=s.p+"static/media/left.482b7a8cfb145445f061ba6fd0059559.svg";var m=s.p+"static/media/right.860f22fa1256bcd17b01333cd0b9705b.svg",c=s(8563),d=s(2558),p=s(401),h=(s(2532),s(2326),s(4928),s(3173)),f=s(2579),_=s(5402),u=s(9230),x=s(9977),v=s(184),b={numberOftestimonialsPerView:3,autoplaySpeed:4e3},g=function(e){(0,l.Z)(s,e);var i=(0,n.Z)(s);function s(e){var t;return(0,a.Z)(this,s),(t=i.call(this,e)).testimonials=[],t.handleResize=function(){var e=window.innerWidth;e>=p.y.large?b={numberOftestimonialsPerView:4}:e<p.y.large&&e>=p.y.medium||e<p.y.medium&&e>=p.y.small?b={numberOftestimonialsPerView:2}:e<p.y.small&&(b={numberOftestimonialsPerView:1}),t.setState(b)},t.state=null,t}return(0,t.Z)(s,[{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.handleResize),this.setState(this.testimonials)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return(0,v.jsx)(j,{values:this.testimonials})}}]),s}(r.Component),j=function(){var e,i=(0,r.useRef)(),s=(0,u.$G)().t,a=(0,h.a)(_.l7,{variables:{language:(0,x.hi)(),first:10}}),t=a.loading,l=a.data,n=t?Array.from({length:4}):null===l||void 0===l||null===(e=l.testimonials)||void 0===e?void 0:e.nodes;return(0,v.jsx)("div",{className:"container",children:(0,v.jsxs)("div",{className:"testimonial__container",children:[(0,v.jsx)("p",{className:"testimonial__name section_name",children:s("testimonial.name")}),(0,v.jsx)("h2",{className:"testimonial__title",children:s("testimonial.title")}),(0,v.jsxs)("div",{className:"testimonial__swiper",children:[(0,v.jsx)(c.tq,{slidesPerView:b.numberOftestimonialsPerView,spaceBetween:24,slidesPerGroup:b.numberOftestimonialsPerView,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},autoHeight:!1,pagination:{clickable:!0},onBeforeInit:function(e){i.current=e},modules:[d.pt,d.tl,d.W_],className:"testimonial__slider",children:null===n||void 0===n?void 0:n.map((function(e,i){return(0,v.jsx)(c.o5,{children:(0,v.jsx)(N,{data:e})},i)}))}),(0,v.jsx)("div",{className:"slider__buttons--left",children:(0,v.jsx)("button",{onClick:function(){var e;return null===(e=i.current)||void 0===e?void 0:e.slidePrev()},children:(0,v.jsx)("img",{src:o,alt:"arrow left"})})}),(0,v.jsx)("div",{className:"slider__buttons--right",children:(0,v.jsx)("button",{onClick:function(){var e;return null===(e=i.current)||void 0===e?void 0:e.slideNext()},children:(0,v.jsx)("img",{src:m,alt:"arrow right"})})})]})]})})},N=function(e){var i=e.data,s=null===i||void 0===i?void 0:i.content,a=i?null===i||void 0===i?void 0:i.title:(0,v.jsx)(f.Z,{width:"40%"}),t=i?null===i||void 0===i?void 0:i.position:(0,v.jsx)(f.Z,{width:"50%"});return(0,v.jsxs)("div",{className:"testimonial_card",children:[s?(0,v.jsx)("div",{className:"testimonial_card__description",dangerouslySetInnerHTML:{__html:s}}):(0,v.jsxs)("div",{className:"testimonial_card__description",children:[(0,v.jsx)(f.Z,{count:5}),(0,v.jsx)(f.Z,{width:"75%"})]}),(0,v.jsxs)("div",{className:"testimonial_card__name-box",children:[(0,v.jsx)("h3",{className:"testimonial_card__name",children:a}),(0,v.jsx)("p",{className:"testimonial_card__position",children:t})]})]})}},6377:function(e,i,s){s.r(i),s.d(i,{default:function(){return B}});var a=s(5671),t=s(3144),l=s(7326),n=s(136),r=s(2572),o=s(2791),m=s(4913),c=s(8563),d=s(2558),p=s.p+"static/media/Hero Illustration.d389792ff61bd47407f6.png",h=s.p+"static/media/Business Illustration.757845ed053513a89809.png";var f=s.p+"static/media/Bg-bi.61700ddfb31724a4011c7676e6d5f8a2.svg",_=s.p+"static/media/Personal illustration.171746727b14a20db56e.png";var u=s.p+"static/media/Bg-personal.bba0acbb235f1db9c96babb09e169d39.svg";var x=s.p+"static/media/flipreach.3f184a17af4c9b4ff6c2edb6a6c3042b.svg";var v=s.p+"static/media/amazon.e7c5cd6fab3a6b295e65e45c2fd71b42.svg";var b=s.p+"static/media/flowbase.44dedd89764e9a1352f01f136f4be13d.svg";var g=s.p+"static/media/linkedin.fcb3bb1b5a14aa08c0e710ca2ba46807.svg";var j=s.p+"static/media/paypal.21d72e0dd294dbfe83db60533efc2606.svg";var N=s.p+"static/media/info.09a145e6a1867c4096c456e64beb4c6b.svg";var y=s.p+"static/media/simple forms.612f527756c9f97f8818f06011ec89e8.svg";var w=s.p+"static/media/electronically sign.eea6ad89253951f951c6067c7b1ca78b.svg";var P=s.p+"static/media/icon1-1.74fff56b0827e75f678c3846a8430fae.svg";var k=s.p+"static/media/icon1-2.6b825c1b365d71d4f71bb2a5c4e8d654.svg";var Z=s.p+"static/media/icon1-3.4577f8b9eec0cfd333507d0f4c05120b.svg";s.p;var z=s.p+"static/media/icon2-2.9f0138d4b1c147850ce070739777eea2.svg";s.p;s.p;var S=s.p+"static/media/simplify1.593ef3a2fce090c10b0939abc313a1f8.svg";var T=s.p+"static/media/simplify2.e13de96f80a70fb8f2fb071978ebfa3a.svg",D=s(3070),H=s(5569),I=s(6270),V=s(401),O=(s(2532),s(2326),s(4928),s(9230)),R=s(184),C={numberOfComapniesPerView:4,autoplaySpeed:4e3},L=function(e){(0,n.Z)(s,e);var i=(0,r.Z)(s);function s(e){var t;return(0,a.Z)(this,s),(t=i.call(this,e)).registerLink="https://register.dev.paxform.net/",t.state=C,t.handleResize=t.handleResize.bind((0,l.Z)(t)),t.handleHeroImageSize=t.handleHeroImageSize.bind((0,l.Z)(t)),t}return(0,t.Z)(s,[{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){var e=window.innerWidth;e>=V.y.large||e<V.y.large&&e>=V.y.medium?C={numberOfComapniesPerView:4}:(e<V.y.medium&&e>=V.y.small||e<V.y.small)&&(C={numberOfComapniesPerView:2}),this.handleHeroImageSize(),this.setState(C)}},{key:"handleHeroImageSize",value:function(){var e=document.querySelector(".hero__image-large"),i=e.clientHeight,s=e.clientWidth,a=document.querySelector(".hero__empty-box");a.style.minHeight=i+60+"px",a.style.height=i+60+"px",a.style.width=s+"px"}},{key:"render",value:function(){var e=this.props.t,i=[{image:P,title:e("home.businessPlatform.platformTitle1"),description:e("home.businessPlatform.platformDescription1")},{image:k,title:e("home.businessPlatform.platformTitle2"),description:e("home.businessPlatform.platformDescription2")},{image:Z,title:e("home.businessPlatform.platformTitle3"),description:e("home.businessPlatform.platformDescription3")},{image:Z,title:e("home.businessPlatform.platformTitle4"),description:e("home.businessPlatform.platformDescription4")}],s=[{image:N,title:e("home.personalPlatform.platformTitle1"),description:e("home.personalPlatform.platformDescription1")},{image:z,title:e("home.personalPlatform.platformTitle2"),description:e("home.personalPlatform.platformDescription2")},{image:y,title:e("home.personalPlatform.platformTitle3"),description:e("home.personalPlatform.platformDescription3")},{image:w,title:e("home.personalPlatform.platformTitle5"),description:e("home.personalPlatform.platformDescription5")}];return(0,R.jsxs)("main",{className:"home",children:[(0,R.jsxs)("section",{className:"hero",children:[(0,R.jsxs)("div",{className:"container hero__wrapper",children:[(0,R.jsxs)("div",{className:"hero__content",children:[(0,R.jsx)("h1",{className:"hero__title",dangerouslySetInnerHTML:{__html:e("home.hero.title")}}),(0,R.jsx)("p",{className:"hero__description",children:e("home.hero.description")}),(0,R.jsx)("div",{className:"hero__button",children:(0,R.jsx)(m.Z,{text:e("signUp"),type:"flat-green arrow",color:"white",href:this.registerLink})})]}),(0,R.jsx)("div",{className:"hero__empty-box"}),(0,R.jsx)("div",{className:"hero__image",children:(0,R.jsx)("img",{className:"hero__image-large",src:p,alt:"large hero illustrator"})})]}),(0,R.jsx)("div",{className:"bottom_triangle"})]}),(0,R.jsx)("section",{className:"slider",children:(0,R.jsx)("div",{className:"container ",children:(0,R.jsx)("div",{className:"slider__container",children:(0,R.jsxs)(c.tq,{spaceBetween:30,slidesPerView:C.numberOfComapniesPerView,loop:!0,loopFillGroupWithBlank:!0,autoplay:{delay:4e3},modules:[d.pt],className:"slider__swiper",children:[(0,R.jsx)(c.o5,{children:(0,R.jsx)("div",{className:"slider__image",children:(0,R.jsx)("img",{src:b,alt:"flowbase"})})}),(0,R.jsx)(c.o5,{children:(0,R.jsx)("div",{className:"slider__image",children:(0,R.jsx)("img",{src:x,alt:"flipreach"})})}),(0,R.jsx)(c.o5,{children:(0,R.jsx)("div",{className:"slider__image",children:(0,R.jsx)("img",{src:v,alt:"amazon"})})}),(0,R.jsx)(c.o5,{children:(0,R.jsx)("div",{className:"slider__image",children:(0,R.jsx)("img",{src:g,alt:"linkedin"})})}),(0,R.jsx)(c.o5,{children:(0,R.jsx)("div",{className:"slider__image",children:(0,R.jsx)("img",{src:j,alt:"paypal"})})})]})})})}),(0,R.jsxs)("section",{className:"platform",children:[(0,R.jsxs)("div",{className:"container platform__container",children:[(0,R.jsxs)("div",{className:"platform__top",children:[(0,R.jsxs)("div",{className:"platform__top-left",children:[(0,R.jsx)("p",{className:"platform__name",children:e("home.businessPlatform.name")}),(0,R.jsx)("h2",{className:"platform__title",children:e("home.businessPlatform.title")})]}),(0,R.jsx)("div",{className:"platform__top-right",children:(0,R.jsx)(m.Z,{type:"flat-green arrow",color:"white",text:e("home.businessPlatform.learnMoreAboutBusiness"),href:"/business"})})]}),(0,R.jsx)("div",{className:"business_platform__content",children:(0,R.jsxs)("div",{className:"business_platform__content-grid",children:[i.map((function(e,i){return(0,R.jsxs)("div",{className:"business_platform__content-item",children:[(0,R.jsx)("div",{className:"business_platform__content-item-image",children:(0,R.jsx)("img",{src:e.image,alt:"icon"})}),(0,R.jsx)("h3",{className:"business_platform__content-item-title",children:e.title}),(0,R.jsx)("p",{className:"business_platform__content-item-description",children:e.description})]},i)})),(0,R.jsx)("div",{className:"business_platform__image",children:(0,R.jsx)("img",{src:h,alt:"Business"})})]})})]}),(0,R.jsx)("img",{className:"image__background",src:f,alt:"","aria-hidden":"true"}),(0,R.jsx)("div",{className:"bottom_triangle bottom_triangle--dark-blue"})]}),(0,R.jsxs)("section",{className:"platform background--dark-blue platform__title--white",children:[(0,R.jsxs)("div",{className:"container platform__container",children:[(0,R.jsxs)("div",{className:"platform__top",children:[(0,R.jsxs)("div",{className:"platform__top-left",children:[(0,R.jsx)("p",{className:"platform__name platform__name--green",children:e("home.personalPlatform.name")}),(0,R.jsx)("h2",{className:"platform__title ",children:e("home.personalPlatform.title")})]}),(0,R.jsx)("div",{className:"platform__top-right",children:(0,R.jsx)(m.Z,{type:"outline arrow",color:"green",text:e("home.personalPlatform.learnMoreAboutPersonal"),href:"/personal"})})]}),(0,R.jsx)("div",{className:"personal_platform__content",children:(0,R.jsxs)("div",{className:"business_platform__content-grid",children:[s.map((function(e,i){return(0,R.jsxs)("div",{className:"personal_platform__content-item",children:[(0,R.jsx)("div",{className:"personal_platform__content-item-image",children:(0,R.jsx)("img",{src:e.image,alt:"icon"})}),(0,R.jsx)("h3",{className:"personal_platform__content-item-title",children:e.title}),(0,R.jsx)("p",{className:"personal_platform__content-item-description",children:e.description})]},i)})),(0,R.jsx)("div",{className:"personal_platform__image",children:(0,R.jsx)("img",{src:_,alt:"Personel"})})]})})]}),(0,R.jsx)("img",{className:"image__background-personal",src:u,alt:"","aria-hidden":"true"}),(0,R.jsx)("div",{className:"bottom_triangle bottom_triangle--light-blue"})]}),(0,R.jsx)(D.Z,{}),(0,R.jsxs)("section",{className:"testimonial",children:[(0,R.jsx)(H.Z,{}),(0,R.jsx)("div",{className:"bottom_triangle bottom_triangle--blue"})]}),(0,R.jsxs)("section",{className:"simplify",children:[(0,R.jsxs)("div",{className:"container simplify__container",children:[(0,R.jsx)("p",{className:"simplify__why section_name",children:e("home.simplicity.whyPaxform")}),(0,R.jsx)("h2",{className:"simplify__title",children:e("home.simplicity.title")}),(0,R.jsxs)("div",{className:"simplify_flexbox",children:[(0,R.jsxs)("div",{className:"simplify_flexbox__content",children:[(0,R.jsx)("h3",{className:"simplify_flexbox__content-title",children:e("home.simplicity.cardTitle1")}),(0,R.jsx)("p",{dangerouslySetInnerHTML:{__html:e("home.simplicity.cardDescription1")}})]}),(0,R.jsx)("div",{className:"simplify_flexbox__image",children:(0,R.jsx)("img",{src:S,alt:"all information"})})]}),(0,R.jsxs)("div",{className:"simplify_flexbox rtl",children:[(0,R.jsxs)("div",{className:"simplify_flexbox__content ltr",children:[(0,R.jsx)("h3",{className:"simplify_flexbox__content-title",children:e("home.simplicity.cardTitle2")}),(0,R.jsx)("p",{dangerouslySetInnerHTML:{__html:e("home.simplicity.cardDescription2")}})]}),(0,R.jsx)("div",{className:"simplify_flexbox__image",children:(0,R.jsx)("img",{src:T,alt:"most forms"})})]})]}),(0,R.jsx)("div",{className:"bottom_triangle bottom_triangle--light-blue"})]}),(0,R.jsx)(I.Z,{})]})}}]),s}(o.Component),B=(0,O.Zh)()(L)},4928:function(){},2326:function(){}}]);
//# sourceMappingURL=893.de61ebfd.chunk.js.map