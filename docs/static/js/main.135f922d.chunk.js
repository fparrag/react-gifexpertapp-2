(this["webpackJsonpgif-react-app"]=this["webpackJsonpgif-react-app"]||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=(n(14),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategorias,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.length>=2&&(e([]),e((function(t){return[].concat(Object(s.a)(t),[c])})),o(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){return o(t.target.value)}})})},j=n(6),d=n.n(j),l=n(8),f=function(){var t=Object(l.a)(d.a.mark((function t(e){var n,a,r,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=URXNcPBvdZE7BwBosLgXYhA0qjrp8JL5&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=t.img;return Object(u.jsx)("div",{className:"card animate__animated animate__fadeIn",children:Object(u.jsx)("img",{alt:e.title,src:e.url})})},b=function(t){var e=t.Categoria,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(t).then((function(t){return c({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[c&&Object(u.jsx)("p",{children:"Cargando..."}),Object(u.jsx)("h2",{className:"animate__animated animate__flash",children:e}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(p,{img:t},t.id)}))})]})},m=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategorias:r}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(b,{Categoria:t},t)}))})]})};c.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.135f922d.chunk.js.map