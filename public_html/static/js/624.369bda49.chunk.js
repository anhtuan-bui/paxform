"use strict";(self.webpackChunkpaxfolio=self.webpackChunkpaxfolio||[]).push([[624],{5081:function(e,l,a){a.d(l,{Z:function(){return t}});a(2791);var n=a(2579),i=a(184);function t(e){var l,a,t,o=null===(l=e.author)||void 0===l?void 0:l.node,r=null!==o&&void 0!==o&&o.firstName||null!==o&&void 0!==o&&o.lastName?"".concat(null!==o&&void 0!==o&&o.firstName?null===o||void 0===o?void 0:o.firstName:""," ").concat(null!==o&&void 0!==o&&o.lastName?null===o||void 0===o?void 0:o.lastName:""):null!==o&&void 0!==o&&o.name?"@".concat(null===o||void 0===o?void 0:o.username):"",s=null===o||void 0===o?void 0:o.avatar.url,d=r||(0,i.jsx)(n.Z,{width:100}),c=o?null===o||void 0===o||null===(a=o.roles)||void 0===a||null===(t=a.nodes[0])||void 0===t?void 0:t.displayName:(0,i.jsx)(n.Z,{width:75});return(0,i.jsxs)("div",{className:"author ".concat(e.className?e.className:""),children:[o?(0,i.jsx)("div",{className:"author__avatar",children:(0,i.jsx)("img",{src:s,alt:"author avatar"})}):(0,i.jsx)(n.Z,{width:50,height:50,style:{borderRadius:"50%"}}),(0,i.jsxs)("div",{className:"author_info",children:[(0,i.jsx)("h4",{className:"author__name",children:d}),(0,i.jsx)("p",{className:"author__occupation",children:c})]})]})}},7105:function(e,l,a){a.d(l,{Z:function(){return c}});a(2791);var n=a(4913),i=a(1058),t=a(3173),o=(a(5862),a(5402)),r=a(9230),s=a(9977),d=a(184);function c(e){var l,a=e.triangleColor,c=(0,r.$G)().t,u=(0,t.a)(o.fx,{variables:{first:4,language:(0,s.hi)()}}),v=u.loading,m=u.data,h=v?Array.from({length:4}):null===m||void 0===m||null===(l=m.posts)||void 0===l?void 0:l.nodes;return(0,d.jsxs)("section",{className:"platform background--dark-blue platform__title--white",children:[(0,d.jsxs)("div",{className:"container platform__container",children:[(0,d.jsxs)("div",{className:"platform__top",children:[(0,d.jsxs)("div",{className:"platform__top-left",children:[(0,d.jsx)("p",{className:"platform__name platform__name--green section_name",children:c("latestBlogs.name")}),(0,d.jsx)("h2",{className:"platform__title section_title",children:c("latestBlogs.title")})]}),(0,d.jsx)("div",{className:"platform__top-right",children:(0,d.jsx)(n.Z,{type:"outline arrow",text:c("latestBlogs.button"),href:"/blogs"})})]}),(0,d.jsx)("div",{className:"platform__content",children:h.map((function(e,l){return(0,d.jsx)(i.Z,{data:e,readLink:!0,background:"dark",term:"blogs",loading:v},l)}))})]}),(0,d.jsx)("div",{className:"bottom_triangle bottom_triangle--".concat(a)})]})}},7112:function(e,l,a){a.d(l,{Z:function(){return c}});var n=a(2791),i=a(1087),t=a(7923),o=a(2579),r=a(9977),s=a(9230),d=a(184);function c(e){var l=e.to,a=e.loading,c=(0,s.$G)().t;return(0,d.jsx)(i.rU,{className:"read_article",to:l,onClick:r.SM,children:a?(0,d.jsx)(o.Z,{width:100}):(0,d.jsxs)(n.Fragment,{children:[(0,d.jsx)("span",{children:c("readArticle")}),(0,d.jsx)(t.r,{className:"read_article__arrow"})]})})}},1058:function(e,l,a){a.d(l,{Z:function(){return o}});var n=a(2579),i=a(7112),t=a(184),o=function(e){var l,a,o,r,s,d=e.data,c=e.readLink,u=e.className,v=e.loading,m=e.term,h=e.background,x=e.colorMap,j=new DOMParser,_=d?null===d||void 0===d||null===(l=d.resourceCategories)||void 0===l||null===(a=l.nodes[0])||void 0===a?void 0:a.name:(0,t.jsx)(n.Z,{width:"50%"}),g=d?null===d||void 0===d?void 0:d.title:(0,t.jsx)(n.Z,{count:2}),p=null===d||void 0===d?void 0:d.slug,f=d?null===(o=j.parseFromString(null===d||void 0===d?void 0:d.content,"text/html").getElementsByTagName("p")[0])||void 0===o?void 0:o.innerText:(0,t.jsx)(n.Z,{count:3}),N=null===d||void 0===d||null===(r=d.featuredImage)||void 0===r||null===(s=r.node)||void 0===s?void 0:s.sourceUrl,Z="/".concat(m,"/").concat(p),b=v?(0,t.jsx)(n.Z,{width:"75%"}):(0,t.jsx)(i.Z,{to:Z}),w=d?null===x||void 0===x?void 0:x.get(_):"",y=h?"related_card__title--".concat(h):"";return(0,t.jsxs)("div",{className:"related_card",children:[(0,t.jsxs)("div",{className:"related_card__top",children:[N?(0,t.jsx)("div",{className:"".concat(u||""," related_card__image"),children:(0,t.jsx)("a",{href:Z,children:(0,t.jsx)("img",{src:N,alt:"first story"})})}):(0,t.jsx)(n.Z,{height:180,style:{borderRadius:"20px"}}),_?(0,t.jsx)("p",{className:"related_card__category",style:{color:w},children:_}):"",g?(0,t.jsx)("h2",{className:"related_card__title ".concat(y),children:(0,t.jsx)("a",{className:"related_card__title-link",href:Z,children:g})}):"",f?(0,t.jsx)("p",{className:"related_card__description",children:f}):""]}),(0,t.jsx)("div",{className:"related_card__bottom",children:c?b:""})]})}},2433:function(e,l,a){a.r(l),a.d(l,{default:function(){return g}});var n=a(7689),i=a(3173),t=a(5402),o=a(4349),r=a(7105),s=a(2579),d=(a(5862),a(1058)),c=a(9977),u=a(9230),v=a(184),m=function(e){var l=e.currentCategory,a=e.currentId,n=(0,u.$G)().t,o=(0,i.a)(t.yA,{variables:{categoryName:l,id:a,language:(0,c.hi)()}}),r=o.data,m=o.loading;return(0,v.jsxs)("section",{className:"recommended",children:[(0,v.jsx)("p",{className:"recommended__title section_name",children:n("recommended")}),(0,v.jsx)("div",{className:"recommended_container",children:m?function(){for(var e=[],l=0;l<2;l++)e.push((0,v.jsxs)("div",{className:"skeleton-container",children:[(0,v.jsx)(s.Z,{height:"250px",borderRadius:"20px"}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:(0,v.jsx)(s.Z,{count:1,width:"50%"})}),(0,v.jsx)("h2",{children:(0,v.jsx)(s.Z,{count:1})}),(0,v.jsx)("p",{children:(0,v.jsx)(s.Z,{count:2})})]})]},l));return e}():function(){var e,a=[],n=null===r||void 0===r||null===(e=r.posts)||void 0===e?void 0:e.nodes;return(null===n||void 0===n?void 0:n.filter((function(e){var a,n;return(null===e||void 0===e||null===(a=e.categories)||void 0===a||null===(n=a.nodes[0])||void 0===n?void 0:n.name)===l})).sort((function(){return.5-Math.random()})).slice(0,2)).forEach((function(e){a.push((0,v.jsx)(d.Z,{term:"blogs",data:e,readLink:!0},e.id))})),a}()})]})},h=a(5081),x=function(e){var l,a,n,i,t,o=e.blogArticle,r=e.loading;return r?(a=(0,v.jsx)(s.Z,{width:"45%"}),n=(0,v.jsx)(s.Z,{width:"75%"}),i=(0,v.jsx)("div",{className:"article_info__img",children:(0,v.jsx)(s.Z,{height:"100%",borderRadius:"20px"})}),t=(0,v.jsxs)("div",{className:"article-content",children:[(0,v.jsx)("h2",{children:(0,v.jsx)(s.Z,{count:1,width:"75%"})}),(0,v.jsx)("p",{children:(0,v.jsx)(s.Z,{count:5})}),(0,v.jsx)("p",{children:(0,v.jsx)(s.Z,{count:5})}),(0,v.jsx)("p",{children:(0,v.jsx)(s.Z,{count:5})}),(0,v.jsx)("p",{children:(0,v.jsx)(s.Z,{count:5})}),(0,v.jsx)("p",{children:(0,v.jsx)(s.Z,{count:5})})]})):function(){var e,l,r,s,d,c;a=function(){var e,l=new Date(null===o||void 0===o||null===(e=o.post)||void 0===e?void 0:e.date);return l.toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"})}(),n=null!==(e=null===o||void 0===o||null===(l=o.post)||void 0===l?void 0:l.title)&&void 0!==e?e:"",i=(0,v.jsx)("img",{className:"article_info__img",src:null===o||void 0===o||null===(r=o.post)||void 0===r||null===(s=r.featuredImage)||void 0===s||null===(d=s.node)||void 0===d?void 0:d.sourceUrl,alt:"Article"}),t=(0,v.jsx)("div",{className:"article_detail",style:{marginTop:"35px"},dangerouslySetInnerHTML:{__html:null===o||void 0===o||null===(c=o.post)||void 0===c?void 0:c.content}})}(),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("section",{className:"article_info",children:[(0,v.jsx)("div",{className:"article_info__date section_name",children:a}),(0,v.jsx)("h1",{className:"article_info__title",children:n}),i]}),(0,v.jsx)(h.Z,{className:"author--blog-detail",author:null===o||void 0===o||null===(l=o.post)||void 0===l?void 0:l.author}),(0,v.jsx)("div",{className:"article",children:t})]})},j=a(3079),_=a(5014),g=function(){var e,l,a,s,d,c,u,h,g,p=new DOMParser,f=window.location.href,N=(0,n.TH)().pathname.split("/").pop(),Z=(0,i.a)(t.TI,{variables:{slug:N}}),b=Z.loading,w=Z.data,y=b?"":null===w||void 0===w||null===(e=w.post)||void 0===e?void 0:e.title,k=b?"":null===w||void 0===w||null===(l=w.post)||void 0===l||null===(a=l.categories)||void 0===a||null===(s=a.nodes[0])||void 0===s?void 0:s.name,C=b?"":null===w||void 0===w||null===(d=w.post)||void 0===d||null===(c=d.featuredImage)||void 0===c||null===(u=c.node)||void 0===u?void 0:u.sourceUrl,I=b?null:null===w||void 0===w||null===(h=w.post)||void 0===h?void 0:h.databaseId,S=b?"":p.parseFromString(null===w||void 0===w||null===(g=w.post)||void 0===g?void 0:g.content,"text/html").querySelector("p").innerText;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_.Z,{url:f,title:y,description:S,image:C}),(0,v.jsx)("div",{className:"container hero",background:"light",children:(0,v.jsxs)("main",{className:"blog_details__main",children:[(0,v.jsx)(x,{blogArticle:w,loading:b}),(0,v.jsx)(o.Z,{slug:N,title:y,term:"blogs",imageUrl:C,className:"blog-details-social"}),(0,v.jsx)(m,{currentSlug:N,currentCategory:k,currentId:I})]})}),(0,v.jsxs)("div",{className:"latest_blogs__container",children:[(0,v.jsx)(j.Z,{variant:"dark-blue"}),(0,v.jsx)(r.Z,{triangleColor:"light-blue"})]}),(0,v.jsx)("div",{className:"footer_triangle",children:(0,v.jsx)(j.Z,{variant:"light-blue"})})]})}}}]);
//# sourceMappingURL=624.369bda49.chunk.js.map