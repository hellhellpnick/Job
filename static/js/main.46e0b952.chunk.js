(this["webpackJsonpjob-site"]=this["webpackJsonpjob-site"]||[]).push([[1],{26:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(14),i=Object(a.b)("theme/getTheme",(function(e){return{payload:e}}))},35:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return m}));var a=t(0),i=t(2),r=t(3),o={main:"/Job",works:{main:"works",work:"works/:title"},notFound:"*"},c=Object(a.lazy)((function(){return Promise.all([t.e(4),t.e(0),t.e(8)]).then(t.bind(null,71))})),s=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,72))})),b=Object(a.lazy)((function(){return Promise.all([t.e(11),t.e(0),t.e(10)]).then(t.bind(null,74))})),l=Object(a.lazy)((function(){return t.e(9).then(t.bind(null,75))})),p=Object(a.lazy)((function(){return Promise.all([t.e(5),t.e(7)]).then(t.bind(null,73))})),m=function(){return Object(r.jsx)(i.e,{children:Object(r.jsxs)(i.c,{path:o.main,element:Object(r.jsx)(p,{}),children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(c,{title:"Home page"})}),Object(r.jsx)(i.c,{path:o.works.main,element:Object(r.jsx)(s,{title:"Works"})}),Object(r.jsx)(i.c,{path:o.works.work,element:Object(r.jsx)(b,{title:"Work"})}),Object(r.jsx)(i.c,{path:o.notFound,element:Object(r.jsx)(l,{title:"Not found"})})]})})}},36:function(e,n,t){"use strict";var a=t(18),i=t(0),r=t(26);n.a=function(){var e=Object(a.b)(),n=Object(a.c)((function(e){return e.theme.isTheme}));return{changeTheme:Object(i.useCallback)((function(){e(Object(r.a)(!n))}),[e,n]),getTheme:n}}},56:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(19),o=t.n(r),c=(t(56),t(82)),s=t(29),b=t(35),l=t(45),p={background:{main:"#fff",primary:"#939393",second:"#2b2b2b"},backgroundArticle:{main:"#fafafa"},text:{main:"#939393",primary:"#727272",second:"#1c92cA"},link:{main:"#1c82cc"},iconBack:{main:"#ededed",primary:"#939393"},iconColor:{main:"#c6c6c6",primary:"#e0e0e0"},border:{main:"#ececec"},progress:{main:"#1c92ca"},shadow:{main:"#2b2b2b",primary:"#1c92ca",second:"#fafafa"}},m={h1:{fontFamily:"Gemunu Libre, sans-serif",fontSize:20,fontWeigt:400,lineHeight:"0.9"},h2:{fontFamily:"Gemunu Libre, sans-serif",fontSize:16,fontWeigt:400,lineHeight:"1"},h3:{fontFamily:"Gemunu Libre, sans-serif",fontSize:14,fontWeigt:300,lineHeight:"1"},text:{fontFamily:"Gemunu Libre, sans-serif",fontSize:14,fontWeigt:300,lineHeight:"1.5"}},d=Object(l.a)({palette:p,typograpgy:m}),j={background:{second:"#2b2b2b",main:"#2d2e2e",primary:"#3c3c3c"},backgroundArticle:{main:"#282929"},text:{primary:"#979899",main:"#a4a5a6",second:"#1c92ca"},link:{primary:"#1c82cc"},iconBack:{main:"#3f4040",primary:"#717273"},iconColor:{main:"#717273",primary:"#575859"},border:{main:"#404242"},progress:{main:"#1c92ca"},shadow:{main:"#fff",primary:"#1c92ca",second:"#282929"}},u=Object(l.a)({palette:j,typograpgy:m}),h=t(83),x=t(81),f=Object(x.a)((function(e){return{wrapperLoader:{backgroundColor:e.palette.background.main,justifyContent:"center",display:"flex",alignItems:"center",minHeight:"100vh"},loader:{position:"relative",width:"200px",height:"200px","& span":{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",border:"3px solid rgba(255, 255, 255, 0.15)",borderRadius:"50%",background:"none",boxShadow:"0px 5px 18px 10px #2b2b2b",transition:"all 0.2s ease",animation:"$rotate 5s linear infinite"},"& span:nth-child(2)":{animationDirection:"normal",borderRadius:"44% 56% 39% 61% / 37% 35% 65% 63%",boxShadow:"0px 18px 20px 2px #00A0FF"},"& span:nth-child(3)":{animationDirection:"normal",borderRadius:"37% 63% 71% 29% / 44% 39% 61% 56%",boxShadow:"0px 8px 30px 4px #156EA3"},"& span:nth-child(4)":{animationDirection:"normal",borderRadius:"68% 32% 46% 54% / 29% 51% 49% 71% ",boxShadow:"0px 8px 45px 5px #2b2b2b"},"& span:nth-child(5)":{animationDirection:"normal",borderRadius:"62% 38% 51% 49% / 42% 42% 58% 58%",boxShadow:"2px 15px 49px 12px #4CADE8"},"& span:nth-child(6)":{animationDirection:"normal",borderRadius:"67% 33% 57% 43% / 45% 61% 39% 55%",boxShadow:"2px 10px 59px 22px #75CBFF"},"& span:nth-child(7)":{animationDirection:"normal",borderRadius:"67% 33% 66% 34% / 36% 70% 30% 64%",boxShadow:"2px 6px 69px 2px #0084D3 "}},"@keyframes rotate":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}})),O=t(3),g=function(){var e=f();return Object(O.jsx)(h.a,{component:"div",className:e.wrapperLoader,children:Object(O.jsxs)(h.a,{component:"div",className:e.loader,children:[Object(O.jsx)(h.a,{component:"span"}),Object(O.jsx)(h.a,{component:"span"}),Object(O.jsx)(h.a,{component:"span"}),Object(O.jsx)(h.a,{component:"span"}),Object(O.jsx)(h.a,{component:"span"}),Object(O.jsx)(h.a,{component:"span"}),Object(O.jsx)(h.a,{component:"span"})]})})},y=function(){return Object(O.jsx)(g,{})},k=t(36),w=function(){var e=Object(k.a)().getTheme;return Object(O.jsx)(c.a,{theme:e?d:u,children:Object(O.jsx)(s.a,{children:Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(a.Suspense,{fallback:Object(O.jsx)(y,{}),children:Object(O.jsx)(b.a,{})})})})})},v=t(18),S=t(14),z=t(33),F=t(44),C=t.n(F),D=t(37),T=t(5),A=t(26),R=Object(S.c)(!1,Object(D.a)({},A.a.type,(function(e,n){return n.payload}))),H=Object(T.b)({isTheme:R}),L={key:"theme",storage:C.a,whitelist:["isTheme"]},W=Object(S.a)({reducer:{theme:Object(z.a)(L,H)},middleware:function(e){return e({serializableCheck:!1})},devTools:!1});Object(z.b)(W);o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(v.a,{store:W,children:Object(O.jsx)(w,{})})}),document.getElementById("root"))}},[[65,2,3]]]);
//# sourceMappingURL=main.46e0b952.chunk.js.map