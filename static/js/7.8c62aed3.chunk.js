(this["webpackJsonpjob-site"]=this["webpackJsonpjob-site"]||[]).push([[7],{73:function(e,t,n){"use strict";n.r(t);var i=n(11),a=n(0),o=n.n(a),r=n(81),c=n(85),s=n(110),l=Object(c.a)((function(e){return{root:{width:55,height:26,padding:0,marginRight:20},switchBase:{padding:1,"& + $track":{backgroundColor:e.palette.text.main,opacity:1,border:"none"},"&$checked":{transform:"translateX(30px)",color:e.palette.background.main,"& + $track":{backgroundColor:e.palette.text.main,opacity:1,border:"none"}}},thumb:{width:24,height:24,color:e.palette.background.main},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{}}}))(s.a),d=n(83),p=n(36),x=n(3),m=Object(r.a)((function(e){return{wrapperSwitch:{display:"flex",flexDirection:"column"},textSwitch:{fontSize:14,color:e.palette.text.main,lineHeight:"1.5",marginBottom:10}}})),h=function(){var e=Object(p.a)(),t=e.getTheme,n=e.changeTheme,i=m();return Object(x.jsxs)(d.a,{className:i.wrapperSwitch,children:[Object(x.jsx)("p",{className:i.textSwitch,children:"Switch theme"}),Object(x.jsx)(l,{onClick:n,checked:t})]})},b=n(108),u=(n(99),n(29)),g=n(2),f=n(111),j=(Object(c.a)((function(e){return{root:{color:e.palette.text.main},formControl:{color:"".concat(e.palette.text.main," !important")},focused:{color:"".concat(e.palette.text.primary," !important")}}}))(f.a),Object(r.a)((function(e){return{header:{padding:"10px",backgroundColor:e.palette.background.main,boxShadow:"0px 8px 10px -11px ".concat(e.palette.text.main),transition:"all 0.2s ease","@media screen and (min-width: 1024px)":{padding:0}},navActive:{width:"100%",height:"100%",top:0,right:0,left:0,zIndex:12,position:"fixed",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",margin:"0 auto",padding:0,backgroundColor:e.palette.background.main,boxShadow:"0 5px 5px -5px ".concat(e.palette.shadow.main),"@media (min-width: 780px)":{justifyContent:"space-around"},"@media (min-width: 1024px)":{flexDirection:"row",justifyContent:"space-between",height:"10%"}},navDisable:{width:"0",height:"100%",top:0,right:0,left:"-200%",zIndex:12,position:"absolute",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",maxWidth:"1440px",margin:"0 auto",padding:0,backgroundColor:e.palette.background.main,"@media (min-width: 1024px)":{flexDirection:"row",justifyContent:"space-between",height:"10%"}},menu:{width:"100%",listStyle:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 20px",transition:"all 0.2s ease","@media (min-width: 1024px)":{flexDirection:"row",justifyContent:"center"}},item:{cursor:"pointer",padding:30,transition:"all 0.2s ease","& > a":{textAlign:"center",width:"100%",position:"relative",fontSize:20,padding:30,color:e.palette.text.main,textTransform:"uppercase",textDecoration:"none",marginRight:"20px",transition:"all 0.2s ease"},"&:hover":{cursor:"pointer","&:before":{opacity:1,transition:" 0.5s transform ease, 0.8s opacity ease",transform:"translateX(-20px)"}}},waves:{position:"relative",width:"100%",maxWidth:"400px",height:"15vh",marginBottom:"-7px",minHeight:"10px",maxHeight:"20px",transition:"all 0.2s ease"},parallax:{"&>use":{animation:"$move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite"},"& > use:nth-child(1)":{animationDelay:"-2s",animationDuration:"7s"},"& > use:nth-child(2)":{animationDelay:"-3s",animationDuration:"10s"},"& > use:nth-child(3)":{animationDelay:"-4s",animationDuration:"13s"},"& > use:nth-child(4)":{animationDelay:"-5s",animationDuration:"20s"}},formControl:{minWidth:120},flexRow:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",paddingBottom:20,"@media (min-width: 1024px)":{justifyContent:"center"}},wrapperBtn:{position:"absolute",top:20,right:20,padding:10,zIndex:10,"@media (min-width: 1024px)":{top:10,right:10}},wrapperBtnOpenDisable:{position:"fixed",top:20,left:-30,padding:"5px 0 5px 25px",backgroundColor:e.palette.background.primary,borderTopRightRadius:"10px",borderBottomRightRadius:"10px",zIndex:10,animation:"$move-btn-to-right-open 2s"},wrapperBtnOpenActive:{position:"fixed",top:20,left:-30,padding:"5px 0 5px 25px",backgroundColor:e.palette.background.primary,borderTopRightRadius:"10px",borderBottomRightRadius:"10px",zIndex:10,animation:"$move-btn-to-right-close 2s"},iconClose:{fontSize:20,color:e.palette.iconColor.main},iconArrow:{fontSize:20,color:e.palette.iconColor.main,textAlign:"right"},"@keyframes move-forever":{"0%":{transform:"translate3d(-90px,0,0)"},"100%":{transform:"translate3d(85px,0,0)"}},"@keyframes move-btn-to-right-open":{"0%":{position:"absolute",left:"-30px"},"100%":{left:"100%"}}}}))),w=n(35);t.default=function(){var e=o.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=o.a.useState(!1),c=Object(i.a)(r,2),s=c[0],l=c[1],p=function(){a(!1),document.body.style.overflow="visible"},m=function(){l(!1)},f=j();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("header",{className:f.header,children:[Object(x.jsx)(b.a,{variant:"text",className:n?f.wrapperBtnOpenDisable:f.wrapperBtnOpenActive,onClick:function(){a(!0),document.body.style.overflow="hidden",l(!0)},children:Object(x.jsx)("i",{className:"fas fa-angle-double-right ".concat(f.iconArrow)})}),Object(x.jsxs)("nav",{className:"\n          ".concat(n?f.navActive:f.navDisable,"\n          ").concat(s?"nav-active-animation":"nav-disable-animation","\n        "),children:[Object(x.jsx)(b.a,{variant:"text",className:f.wrapperBtn,onClick:function(){p(),m()},children:Object(x.jsx)("i",{className:"fas fa-times ".concat(f.iconClose)})}),Object(x.jsxs)("ul",{className:f.menu,children:[Object(x.jsx)("li",{className:f.item,onClick:function(){p(),m()},children:Object(x.jsx)(u.b,{to:w.b.main,children:"Home"})}),Object(x.jsx)("li",{className:f.item,onClick:function(){p(),m()},children:Object(x.jsx)(u.b,{to:w.b.works.main,children:"Works"})})]}),Object(x.jsx)(d.a,{style:{maxWidth:200,width:"100%"},children:Object(x.jsxs)("svg",{className:f.waves,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none",shapeRendering:"auto",children:[Object(x.jsx)("defs",{children:Object(x.jsx)("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})}),Object(x.jsxs)("g",{className:f.parallax,children:[Object(x.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7"}),Object(x.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}),Object(x.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}),Object(x.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:"#fff"})]})]})}),Object(x.jsx)(d.a,{className:f.flexRow,children:Object(x.jsx)(h,{})})]})]}),Object(x.jsx)(g.b,{})]})}},99:function(e,t,n){}}]);
//# sourceMappingURL=7.8c62aed3.chunk.js.map