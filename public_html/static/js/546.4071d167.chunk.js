"use strict";(self.webpackChunkpaxfolio=self.webpackChunkpaxfolio||[]).push([[546],{5081:function(l,e,o){o.d(e,{Z:function(){return s}});o(2791);var i=o(2579),a=o(184);function s(l){var e,o,s,n=null===(e=l.author)||void 0===e?void 0:e.node,d=null!==n&&void 0!==n&&n.firstName||null!==n&&void 0!==n&&n.lastName?"".concat(null!==n&&void 0!==n&&n.firstName?null===n||void 0===n?void 0:n.firstName:""," ").concat(null!==n&&void 0!==n&&n.lastName?null===n||void 0===n?void 0:n.lastName:""):null!==n&&void 0!==n&&n.name?"@".concat(null===n||void 0===n?void 0:n.username):"",t=null===n||void 0===n?void 0:n.avatar.url,r=d||(0,a.jsx)(i.Z,{width:100}),c=n?null===n||void 0===n||null===(o=n.roles)||void 0===o||null===(s=o.nodes[0])||void 0===s?void 0:s.displayName:(0,a.jsx)(i.Z,{width:75});return(0,a.jsxs)("div",{className:"author ".concat(l.className?l.className:""),children:[n?(0,a.jsx)("div",{className:"author__avatar",children:(0,a.jsx)("img",{src:t,alt:"author avatar"})}):(0,a.jsx)(i.Z,{width:50,height:50,style:{borderRadius:"50%"}}),(0,a.jsxs)("div",{className:"author_info",children:[(0,a.jsx)("h4",{className:"author__name",children:r}),(0,a.jsx)("p",{className:"author__occupation",children:c})]})]})}},7112:function(l,e,o){o.d(e,{Z:function(){return c}});var i=o(2791),a=o(1087),s=o(7923),n=o(2579),d=o(9977),t=o(9230),r=o(184);function c(l){var e=l.to,o=l.loading,c=(0,t.$G)().t;return(0,r.jsx)(a.rU,{className:"read_article",to:e,onClick:d.SM,children:o?(0,r.jsx)(n.Z,{width:100}):(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("span",{children:c("readArticle")}),(0,r.jsx)(s.r,{className:"read_article__arrow"})]})})}},2546:function(l,e,o){o.r(e),o.d(e,{default:function(){return p}});var i=o(3433),a=o(1413),s=o(9439),n=o(2791),d=o(7112),t=o(3079),r=o(5081),c=o(3173),u=o(5402),v=o(4913),h=o(2579),m=o(1087),x=o(9977),g=o(184),j=function(l){var e,o,i,a,s,n,t=l.blog,r=l.className,c=l.loading,u=null===t||void 0===t||null===(e=t.author)||void 0===e?void 0:e.node,v=null!==u&&void 0!==u&&u.firstName||null!==u&&void 0!==u&&u.lastName?"".concat(null!==u&&void 0!==u&&u.firstName?null===u||void 0===u?void 0:u.firstName:""," ").concat(null!==u&&void 0!==u&&u.lastName?null===u||void 0===u?void 0:u.lastName:""):null!==u&&void 0!==u&&u.name?"@".concat(null===u||void 0===u?void 0:u.username):"",j=null===u||void 0===u||null===(o=u.avatar)||void 0===o?void 0:o.url,_=t?v:(0,g.jsx)(h.Z,{width:100}),p=null===t||void 0===t||null===(i=t.content)||void 0===i?void 0:i.split("</p>")[0].split("<p>")[1],N=t?null===t||void 0===t||null===(a=t.categories)||void 0===a?void 0:a.nodes[0].name:(0,g.jsx)(h.Z,{width:75}),f=t?new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric",day:"2-digit"}).format(new Date(null===t||void 0===t?void 0:t.date)):(0,g.jsx)(h.Z,{width:80}),b=t?null===t||void 0===t?void 0:t.title:(0,g.jsx)(h.Z,{width:"75%"}),Z="/blogs/".concat(null===t||void 0===t?void 0:t.slug);return(0,g.jsxs)("div",{className:"post ".concat(r),children:[t?(0,g.jsx)(m.rU,{to:Z,onClick:x.SM,children:(0,g.jsx)("img",{className:"post__image",src:null===t||void 0===t||null===(s=t.featuredImage)||void 0===s||null===(n=s.node)||void 0===n?void 0:n.sourceUrl,alt:"blog sample"})}):(0,g.jsx)(h.Z,{className:"post__image"}),(0,g.jsxs)("div",{className:"post__category-box",children:[(0,g.jsx)("p",{className:"post__name section_name post__name--blue",children:N}),(0,g.jsx)("p",{className:"post__date",children:f})]}),(0,g.jsx)("h2",{className:"post__title",children:(0,g.jsx)(m.rU,{className:"link--black",to:Z,onClick:x.SM,children:b})}),t?(0,g.jsx)("p",{className:"post__summary",dangerouslySetInnerHTML:{__html:p}}):(0,g.jsxs)("p",{className:"post__summary",children:[(0,g.jsx)(h.Z,{}),(0,g.jsx)(h.Z,{width:"75%"})]}),(0,g.jsxs)("div",{className:"post__author",children:[t?(0,g.jsx)("img",{className:"post__author-image",src:j,alt:_}):(0,g.jsx)(h.Z,{className:"post__author-image"}),(0,g.jsx)("p",{className:"post__author-name",children:_})]}),(0,g.jsx)(d.Z,{loading:c,to:Z})]})},_=o(9230);function p(){var l,e=(0,n.useState)("all"),o=(0,s.Z)(e,2),i=o[0],a=o[1],d=(0,c.a)(u.Fk,{variables:{language:(0,x.hi)()}}),r=d.loading,v=d.data,h=r?Array.from({length:3}):null===v||void 0===v||null===(l=v.categories)||void 0===l?void 0:l.nodes,m=function(l){a(l.target.id)};return(0,g.jsxs)("main",{className:"blogs",children:[(0,g.jsxs)("section",{className:"hero",background:"light",children:[(0,g.jsx)("div",{className:"container",children:(0,g.jsx)("div",{className:"hero_blog",children:(0,g.jsx)("div",{className:"hero_blog__wrapper",children:(0,g.jsx)(f,{})})})}),(0,g.jsxs)("div",{className:"hero_graphic",children:[(0,g.jsx)("div",{className:"hero_graphic__item hero_graphic__item--blue"}),(0,g.jsx)("div",{className:"hero_graphic__item hero_graphic__item--green"})]})]}),(0,g.jsxs)("section",{className:"posts",children:[(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)("div",{className:"chips",children:h.map((function(l,e){return"uncategorised"!==(null===l||void 0===l?void 0:l.slug)?(0,g.jsx)(N,{category:l,onChange:m,checked:i.toLowerCase()===(null===l||void 0===l?void 0:l.slug)},e):""}))}),(0,g.jsx)(b,{chip:i})]}),(0,g.jsx)(t.Z,{variant:"footer"})]})]})}var N=function(l){var e,o=l.category,i=l.onChange,a=l.checked;return o?"uncategorised"!==(null===o||void 0===o||null===(e=o.node)||void 0===e?void 0:e.slug)&&(0,g.jsxs)("div",{className:"chip",children:[(0,g.jsx)("input",{id:null===o||void 0===o?void 0:o.name,type:"radio",name:"radio",onChange:i,checked:a}),(0,g.jsx)("label",{htmlFor:null===o||void 0===o?void 0:o.name,children:null===o||void 0===o?void 0:o.name})]}):(0,g.jsx)(n.Fragment,{children:(0,g.jsx)(h.Z,{width:100,height:33,style:{borderRadius:"20px"}})})},f=function(){var l,e,o,i=(0,_.$G)().t,a=(0,c.a)(u.p$,{variables:{first:1,after:null,language:(0,x.hi)()},fetchPolicy:"no-cache"}),s=a.loading,t=a.data,v=null===t||void 0===t||null===(l=t.posts)||void 0===l?void 0:l.nodes[0],j=s?(0,g.jsx)(h.Z,{width:100}):i("blogToday"),p=s?(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(h.Z,{}),(0,g.jsx)(h.Z,{width:"75%"})]}):null===v||void 0===v?void 0:v.title,N=null===v||void 0===v?void 0:v.slug,f="/blogs/".concat(N),b=new DOMParser,Z=v?b.parseFromString(null===v||void 0===v?void 0:v.content,"text/html").querySelector("p").innerText:(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(h.Z,{count:2}),(0,g.jsx)(h.Z,{width:"75%"})]});return(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)("div",{className:"hero_blog__image",children:s?(0,g.jsx)(h.Z,{height:380,style:{borderRadius:"20px"}}):(0,g.jsx)(m.rU,{to:f,onClick:x.SM,children:(0,g.jsx)("img",{src:null===v||void 0===v||null===(e=v.featuredImage)||void 0===e||null===(o=e.node)||void 0===o?void 0:o.sourceUrl,alt:"blog hero"})})}),(0,g.jsxs)("div",{className:"hero_blog__content",children:[(0,g.jsxs)("div",{className:"hero_blog__content-box",children:[(0,g.jsx)("p",{className:"section_name hero_blog__name",children:j}),(0,g.jsx)("h1",{className:"hero_blog__title section_title",children:(0,g.jsx)(m.rU,{className:"link--black",to:f,onClick:x.SM,children:p})}),(0,g.jsx)("p",{className:"hero_blog__summary section__description",children:Z}),(0,g.jsx)(d.Z,{id:null===v||void 0===v?void 0:v.id,loading:s,to:f})]}),(0,g.jsx)(r.Z,{author:null===v||void 0===v?void 0:v.author})]})]})},b=function(l){var e,o,s,d,t=l.chip,r=(0,_.$G)().t,h=(0,c.a)(u.p$,{variables:{first:1,language:(0,x.hi)()}}).data,m=(0,c.a)(u.p$,{variables:{first:8,after:null===h||void 0===h||null===(e=h.posts)||void 0===e?void 0:e.pageInfo.endCursor,language:(0,x.hi)()},notifyOnNetworkStatusChange:!0}),p=m.loading,N=m.data,f=m.fetchMore,b=p?Array.from({length:8}):null===N||void 0===N||null===(o=N.posts)||void 0===o?void 0:o.nodes,Z=null===N||void 0===N||null===(s=N.posts)||void 0===s?void 0:s.pageInfo;"all"!==t.toLowerCase()&&(b=null===(d=b)||void 0===d?void 0:d.filter((function(l){var e;return(null===l||void 0===l||null===(e=l.categories)||void 0===e?void 0:e.nodes.map((function(l){return l.name}))).includes(t)})));return(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)("div",{className:"posts_view",children:b.map((function(l,e){return(0,g.jsx)(j,{blog:l,loading:p},e)}))}),(0,g.jsx)("div",{className:"view_more",children:null!==Z&&void 0!==Z&&Z.hasNextPage?(0,g.jsx)(v.Z,{text:p?"Loading...":"View all posts",type:"arrow outline",arrowVariant:"down",color:"green",disabled:p,onClick:function(l){var e,o;l.preventDefault(),f({variables:{first:8,after:null===N||void 0===N||null===(e=N.posts)||void 0===e||null===(o=e.pageInfo)||void 0===o?void 0:o.endCursor},updateQuery:function(l,e){var o,s=e.fetchMoreResult;return s?(0,a.Z)((0,a.Z)({},l),{},{posts:(0,a.Z)((0,a.Z)((0,a.Z)({},null===l||void 0===l?void 0:l.posts),null===s||void 0===s?void 0:s.posts),{},{nodes:[].concat((0,i.Z)(null===l||void 0===l||null===(o=l.posts)||void 0===o?void 0:o.nodes),(0,i.Z)(s.posts.nodes))})}):l}})}}):(0,g.jsx)("p",{children:r("allPostsLoaded")})})]})}}}]);
//# sourceMappingURL=546.4071d167.chunk.js.map