(this["webpackJsonpjob-site"]=this["webpackJsonpjob-site"]||[]).push([[0],{70:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(9),o=a.n(n),s=(a(70),a(16)),l=a(121),c=a(58),p={background:{main:"#fff",primary:"#939393",second:"#2b2b2b"},backgroundArticle:{main:"#fafafa"},text:{main:"#939393",primary:"#727272",second:"#1c92cA"},link:{main:"#1c82cc"},iconBack:{main:"#ededed",primary:"#939393"},iconColor:{main:"#c6c6c6",primary:"#e0e0e0"},border:{main:"#ececec"},progress:{main:"#1c92ca"}},d=Object(c.a)({palette:p}),m={background:{second:"#2b2b2b",main:"#2d2e2e",primary:"#3c3c3c"},backgroundArticle:{main:"#282929"},text:{primary:"#979899",main:"#a4a5a6",second:"#1c92ca"},link:{primary:"#1c82cc"},iconBack:{main:"#3f4040"},iconColor:{main:"#717273",primary:"#575859"},border:{main:"#404242"},progress:{main:"#1c92ca"}},x=Object(c.a)({palette:m}),b=a(123),h=a(5),u=a(116),j=a(125),f=a(1),g=Object(h.a)((function(e){return{root:{width:55,height:26,padding:0,marginRight:20},switchBase:{padding:1,"& + $track":{backgroundColor:e.palette.text.main,opacity:1,border:"none"},"&$checked":{transform:"translateX(30px)",color:e.palette.background.main,"& + $track":{backgroundColor:e.palette.text.main,opacity:1,border:"none"}}},thumb:{width:24,height:24,color:e.palette.background.main},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{}}}))(j.a),O=Object(u.a)((function(e){return{wrapperSwitch:{display:"flex",flexDirection:"column"},textSwitch:{fontSize:14,color:e.palette.text.main,lineHeight:"1.5",marginBottom:10}}})),S=function(e){var t=e.func,a=e.statusTheme,i=O();return Object(f.jsxs)(b.a,{className:i.wrapperSwitch,children:[Object(f.jsx)("p",{className:i.textSwitch,children:"Switch theme"}),Object(f.jsx)(g,{onClick:t,checked:a})]})},A=a(117),w=a(126),N=a(127),k=a(118),y=a(122),C=Object(h.a)((function(e){return{root:{color:e.palette.text.main},formControl:{color:"".concat(e.palette.text.main," !important")},focused:{color:"".concat(e.palette.text.primary," !important")}}}))(w.a),B=Object(u.a)((function(e){return{header:{padding:"10px",backgroundColor:e.palette.background.main,boxShadow:"0px 8px 10px -11px ".concat(e.palette.text.main),transition:"all 0.2s ease"},navActive:{width:"100%",height:"100%",top:0,right:0,left:0,zIndex:12,position:"fixed",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",maxWidth:"1440px",margin:"0 auto",padding:0,backgroundColor:e.palette.background.main,animation:"$move-menu-to-right-open 2s","@media (min-width: 780px)":{justifyContent:"space-between"}},"@keyframes move-menu-to-right-open":{"0%":{width:"0%",left:"-100%"},"100%":{left:0,width:"100%"}},navDisable:{width:"0",height:"100%",top:0,right:0,left:"-200%",zIndex:12,position:"absolute",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",maxWidth:"1440px",margin:"0 auto",padding:0,backgroundColor:e.palette.background.main,animation:"$move-menu-to-right-close 2s"},"@keyframes move-menu-to-right-close":{"0%":{width:"100%",left:"0"},"100%":{left:"-200%",width:"0%"}},menu:{width:"100%",listStyle:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 20px"},item:{cursor:"pointer",textAlign:"center",width:"100%",position:"relative",padding:30,fontSize:20,color:e.palette.text.main,textTransform:"uppercase",textDecoration:"none",marginRight:"20px","&:before":{position:"absolute",bottom:"-2px",content:'""',width:"100%",height:"3px",background:e.palette.link.primary,transform:"translateX(100%)",opacity:0},"&:hover":{cursor:"pointer","&:before":{opacity:1,transition:" 0.5s transform ease, 0.8s opacity ease",transform:"translateX(-20px)"}}},waves:{position:"relative",width:"200px",height:"15vh",marginBottom:"-7px",minHeight:"10px",maxHeight:"20px"},parallax:{"&>use":{animation:"$move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite"},"& > use:nth-child(1)":{animationDelay:"-2s",animationDuration:"7s"},"& > use:nth-child(2)":{animationDelay:"-3s",animationDuration:"10s"},"& > use:nth-child(3)":{animationDelay:"-4s",animationDuration:"13s"},"& > use:nth-child(4)":{animationDelay:"-5s",animationDuration:"20s"}},"@keyframes move-forever":{"0%":{transform:"translate3d(-90px,0,0)"},"100%":{transform:"translate3d(85px,0,0)"}},formControl:{minWidth:120},flexRow:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",paddingBottom:20},wrapperBtn:{position:"absolute",top:20,right:20,padding:10,zIndex:10},wrapperBtnOpenDisable:{position:"fixed",top:20,left:-30,padding:"5px 0 5px 25px",backgroundColor:e.palette.background.primary,borderTopRightRadius:"10px",borderBottomRightRadius:"10px",zIndex:10,animation:"$move-btn-to-right-open 2s"},wrapperBtnOpenActive:{position:"fixed",top:20,left:-30,padding:"5px 0 5px 25px",backgroundColor:e.palette.background.primary,borderTopRightRadius:"10px",borderBottomRightRadius:"10px",zIndex:10,animation:"$move-btn-to-right-close 2s"},"@keyframes move-btn-to-right-open":{"0%":{position:"absolute",left:"-30px"},"100%":{left:"100%"}},"@keyframes move-btn-to-right-close":{"0%":{position:"absolute",left:"100%"},"100%":{left:"-30px"}},iconClose:{fontSize:20,color:e.palette.iconColor.main},iconArrow:{fontSize:20,color:e.palette.iconColor.main,textAlign:"right"}}})),v=function(e){var t=e.statusTheme,a=e.func,i=r.a.useState(""),n=Object(s.a)(i,2),o=n[0],l=n[1],c=r.a.useState(!1),p=Object(s.a)(c,2),d=p[0],m=p[1],x=r.a.useState(!1),h=Object(s.a)(x,2),u=h[0],j=h[1],g=function(){m(!1),document.body.style.overflow="visible"},O=B();return Object(f.jsxs)("header",{className:O.header,children:[Object(f.jsx)(A.a,{variant:"text",className:d?O.wrapperBtnOpenDisable:O.wrapperBtnOpenActive,onClick:function(){m(!0),document.body.style.overflow="hidden"},children:Object(f.jsx)("i",{className:"fas fa-angle-double-right ".concat(O.iconArrow)})}),Object(f.jsxs)("nav",{className:d?O.navActive:O.navDisable,children:[Object(f.jsx)(A.a,{variant:"text",className:O.wrapperBtn,onClick:g,children:Object(f.jsx)("i",{className:"fas fa-times ".concat(O.iconClose)})}),Object(f.jsxs)("ul",{className:O.menu,children:[Object(f.jsx)("li",{className:O.item,onClick:g,children:"Home"}),Object(f.jsx)("li",{className:O.item,onClick:g,children:"Works"})]}),Object(f.jsx)(b.a,{children:Object(f.jsxs)("svg",{className:O.waves,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none",shapeRendering:"auto",children:[Object(f.jsx)("defs",{children:Object(f.jsx)("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})}),Object(f.jsxs)("g",{className:O.parallax,children:[Object(f.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7"}),Object(f.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}),Object(f.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}),Object(f.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:"#fff"})]})]})}),Object(f.jsxs)(b.a,{className:O.flexRow,children:[Object(f.jsx)(S,{statusTheme:t,func:a}),Object(f.jsxs)(k.a,{className:O.formControl,children:[Object(f.jsx)(C,{id:"demo-controlled-open-select-label",children:"Lang"}),Object(f.jsxs)(y.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:u,onClose:function(){j(!1)},onOpen:function(){j(!0)},value:o,onChange:function(e){l(e.target.value)},children:[Object(f.jsx)(N.a,{value:10,children:"Ten"}),Object(f.jsx)(N.a,{value:20,children:"Twenty"}),Object(f.jsx)(N.a,{value:30,children:"Thirty"})]})]})]})]})]})},I=Object(u.a)((function(e){return{wrapperShortInfo:{padding:"25px 25px 30px",backgroundColor:e.palette.background.main,transition:"all 0.2s ease"},titleInfo:{fontSize:"76px",lineHeight:"0.9",marginBottom:"8px"},subtitleInfo:{textAlign:"center",fontSize:"26px",lineHeight:"0.9",marginBottom:"8px",padding:10,fontWeight:300,color:e.palette.text.main},wrapperName:{fontSize:"65%",display:"flex",flexDirection:"column",justifyContent:"center"},firstWord:{textAlign:"center",textTransform:"lowercase",color:e.palette.text.main},secondWord:{textAlign:"center",textTransform:"uppercase",color:e.palette.text.second},wrapperUser:{marginBottom:"25px"},wrapperSocial:{listStyle:"none",display:"flex",justifyContent:"center",marginBottom:"33px"},socialBtn:{cursor:"pointer",marginRight:"6px",width:"33px",height:"33px",backgroundColor:e.palette.iconBack.main,border:"1px solid ".concat(e.palette.iconBack.main)},socialLink:{display:"block",textAlign:"center",width:"33px",height:"33px",fontSize:".8rem !important",lineHeight:"2.7 !important",borderRadius:"2px",textDecoration:"none"},socialIcon:{color:"#c6c6c6",fontSize:"1.5em",lineHeight:"0.75em",verticalAlign:"-15%"},wrapperLocation:{borderTop:"2px solid ".concat(e.palette.border.main)},locationContent:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"25px"},locatioTitle:{marginBottom:"8px",color:e.palette.text.primary,fontWeight:600,fontSize:"18px",lineHeight:"1.75"},locationSubtitle:{fontSize:"16px",fontWeight:400,color:e.palette.text.primary,fontStyle:"normal"}}})),K=function(){var e=I();return Object(f.jsxs)(b.a,{className:e.wrapperShortInfo,children:[Object(f.jsxs)(b.a,{className:e.wrapperUser,children:[Object(f.jsx)("h1",{className:e.titleInfo,children:Object(f.jsxs)("span",{className:e.wrapperName,children:[Object(f.jsx)("span",{className:e.firstWord,children:"Alexander"}),Object(f.jsx)("span",{className:e.secondWord,children:"Vodorez"})]})}),Object(f.jsx)("h2",{className:e.subtitleInfo,children:Object(f.jsx)("span",{className:e.wrapperName,children:"Web Developer & Front-end Expert"})})]}),Object(f.jsxs)("ul",{className:e.wrapperSocial,children:[Object(f.jsx)("li",{className:e.socialBtn,children:Object(f.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100008973467157",className:e.socialLink,children:Object(f.jsx)("i",{className:"fab fa-facebook-f ".concat(e.socialIcon," ")})})}),Object(f.jsx)("li",{className:e.socialBtn,children:Object(f.jsx)("a",{href:"https://github.com/hellhellpnick",className:e.socialLink,children:Object(f.jsx)("i",{className:"fab fa-github ".concat(e.socialIcon," ")})})}),Object(f.jsx)("li",{className:e.socialBtn,children:Object(f.jsx)("a",{href:"https://www.linkedin.com/in/alexander-vodoriz-24a27a1b5/",className:e.socialLink,children:Object(f.jsx)("i",{className:"fab fa-linkedin ".concat(e.socialIcon," ")})})})]}),Object(f.jsxs)(b.a,{className:e.wrapperLocation,children:[Object(f.jsxs)(b.a,{className:e.locationContent,children:[Object(f.jsx)("h4",{className:e.locatioTitle,children:"Location "}),Object(f.jsx)("address",{className:e.locationSubtitle,children:" Poltave, UA"})]}),Object(f.jsxs)(b.a,{className:e.locationContent,children:[Object(f.jsx)("h4",{className:e.locatioTitle,children:"Phone "}),Object(f.jsx)("address",{className:e.locationSubtitle,children:" 098-131-xxxx, Vodafone"})]}),Object(f.jsxs)(b.a,{className:e.locationContent,children:[Object(f.jsx)("h4",{className:e.locatioTitle,children:"Web "}),Object(f.jsx)("address",{className:e.locationSubtitle,children:" hellhellpnick.github.io/job"})]}),Object(f.jsxs)(b.a,{className:e.locationContent,children:[Object(f.jsx)("h4",{className:e.locatioTitle,children:"Email "}),Object(f.jsx)("address",{className:e.locationSubtitle,children:"hellhellpnick@gmail.com"})]})]})]})},U=Object(u.a)((function(e){return{wrapperArticle:{padding:"25px",borderTop:"1px solid ".concat(e.palette.border.main),borderBottom:"1px solid ".concat(e.palette.border.main),backgroundColor:e.palette.backgroundArticle.main},titleArticle:{fontSize:20,textTransform:"uppercase",lineHeight:"1.5",marginBottom:"8px",color:e.palette.text.primary},subtitleArticle:{fontSize:16,color:e.palette.text.main}}})),R=function(e){var t=e.title,a=e.text,i=U();return Object(f.jsxs)(b.a,{className:i.wrapperArticle,children:[Object(f.jsx)("h1",{className:i.titleArticle,children:t}),Object(f.jsx)("h2",{className:i.subtitleArticle,children:a})]})},M=Object(u.a)((function(e){return{wrapperAbout:{padding:25,backgroundColor:e.palette.background.main},aboutText:{color:e.palette.text.main,fontSize:16,lineHeight:"1.5","&:not(:last-child)":{marginBottom:15}}}})),z=function(e){e.title,e.text;var t=M();return Object(f.jsxs)(b.a,{className:t.wrapperAbout,children:[Object(f.jsx)("p",{className:t.aboutText,children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed , ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris non felis mollis faucibus."}),Object(f.jsx)("p",{className:t.aboutText,children:"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis."})]})},H=Object(u.a)((function(e){return{wrapperExpertise:{padding:"25px 25px 0 25px",backgroundColor:e.palette.background.main},listExpertise:{listStyle:"none"},expertiseItem:{display:"flex",flexDirection:"row",justifyContent:"flex-start"},expertiseTitle:{position:"relative",top:"-4px",fontSize:20,textTransform:"uppercase",lineHeight:"1.5",color:e.palette.text.second,marginRight:18},expertiseBox:{display:"flex",flexDirection:"column",paddingBottom:20},expertiseSubtitle:{color:e.palette.text.main,fontSize:20,textTransform:"uppercase",marginBottom:"8px"},expertiseText:{color:e.palette.text.primary,fontSize:16,lineHeight:"1.7"}}})),W=function(e){var t=e.items,a=H();return Object(f.jsx)(b.a,{className:a.wrapperExpertise,children:Object(f.jsx)("ul",{className:a.listExpertise,children:t.map((function(e,t){return Object(f.jsxs)("li",{className:a.expertiseItem,children:[Object(f.jsxs)("h2",{className:a.expertiseTitle,children:["0",t+1]}),";",Object(f.jsxs)(b.a,{className:a.expertiseBox,children:[Object(f.jsx)("h2",{className:a.expertiseSubtitle,children:e.title}),Object(f.jsx)("p",{className:a.expertiseText,children:e.text})]})]},t+1)}))})})},D=a(119),G=Object(u.a)((function(e){return{wrapperProgressBar:{width:"100%",display:"flex",flexDirection:"column",paddingBottom:"25px"},wrapperInfoProgressBar:{display:"flex",flexDirection:"row",alignItems:"center",paddingBottom:"10px"},procentProgressBar:{fontSize:25,color:e.palette.text.second,lineHeight:"1.5",textTransform:"uppercase",marginRight:"10px"},titleProgressBar:{fontSize:25,color:e.palette.text.primary,lineHeight:"1.5",textTransform:"uppercase"},progressBar:{colorPrimary:{backgroundColor:"#b2dfdb"},barColorPrimary:{backgroundColor:"#00695c"}}}})),L=Object(h.a)((function(e){return{root:{height:5},barColorPrimary:{backgroundColor:e.palette.progress.main}}}))(D.a);function T(e){var t=e.procent,a=e.title,i=r.a.useState(0),n=Object(s.a)(i,2),o=n[0],l=n[1],c=r.a.useState(10),p=Object(s.a)(c,2),d=p[0],m=p[1],x=r.a.useRef((function(){}));r.a.useEffect((function(){x.current=function(){if(o<t){var e=10*Math.random(),a=10*Math.random();l(o+e),m(o+e+a)}}})),r.a.useEffect((function(){var e=setInterval((function(){x.current()}),300);return function(){clearInterval(e)}}),[]);var h=G();return Object(f.jsxs)(b.a,{className:h.wrapperProgressBar,children:[Object(f.jsxs)(b.a,{className:h.wrapperInfoProgressBar,children:[Object(f.jsxs)("h2",{className:h.procentProgressBar,children:[t,"%"]}),Object(f.jsxs)("h2",{className:h.titleProgressBar,children:[a," "]})]}),Object(f.jsx)(L,{variant:"buffer",value:o,valueBuffer:d,className:h.progressBar})]})}var E=Object(u.a)((function(e){return{wrapperExperience:{position:"relative",paddingLeft:25,borderLeft:"2px solid ".concat(e.palette.border.main)},titleData:{fontSize:11,opacity:.7,color:e.palette.text.main,fontWeight:500,marginBottom:8},titleWork:{fontSize:20,color:e.palette.text.primary,fontWeight:700,marginBottom:8,textTransform:"uppercase"},titlePosition:{fontSize:14,color:e.palette.text.primary,marginBottom:8},textInfo:{fontSize:14,lineHeight:"1.5",color:e.palette.text.primary,paddingBottom:20},wrapperDot:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:0,left:-11,width:20,height:20,borderRadius:"50%",backgroundColor:e.palette.background.main},dot:{width:10,height:10,backgroundColor:e.palette.progress.main,borderRadius:"50%"}}})),Q=function(e){var t=e.data,a=e.title,i=e.position,r=e.location,n=e.text,o=E();return Object(f.jsxs)(b.a,{className:o.wrapperExperience,children:[Object(f.jsxs)(b.a,{className:o.wrapperExperienceInterior,children:[Object(f.jsx)("h4",{className:o.titleData,children:t}),Object(f.jsx)("h2",{className:o.titleWork,children:a}),Object(f.jsx)("p",{className:o.titlePosition,children:i}),Object(f.jsx)("p",{className:o.titleData,children:r}),Object(f.jsx)("p",{className:o.textInfo,children:n})]}),Object(f.jsx)(b.a,{className:o.wrapperDot,children:Object(f.jsx)(b.a,{className:o.dot})})]})},Y=Object(u.a)((function(e){return{wrapperProfiles:{padding:"25px 25px 0 25px ",display:"flex",flexDirection:"row",alignItems:"stretch"},wrapperInfo:{display:"flex",flexDirection:"column"},iconProfileUser:{marginRight:20,color:e.palette.iconColor.primary,fontSize:25},titleProfileUser:{marginBottom:10,fontSize:20,color:e.palette.text.second,textTransform:"uppercase"},textProfileUser:{marginBottom:10,fontSize:14,lineHeight:"1.5",color:e.palette.text.primary},linkProfileUser:{cursor:"pointer",transition:"all 0.2s ease","&:hover":{transform:"scale(1.1)"}}}})),F=function(e){var t=e.icon,a=e.link,i=e.title,r=e.text,n=Y();return Object(f.jsxs)(b.a,{className:n.wrapperProfiles,children:[Object(f.jsx)("a",{href:a,alt:i,className:n.linkProfileUser,children:Object(f.jsx)("i",{className:"".concat(t," ").concat(n.iconProfileUser)})}),Object(f.jsxs)(b.a,{className:n.wrapperInfo,children:[Object(f.jsx)("h2",{className:n.titleProfileUser,children:i}),Object(f.jsx)("p",{className:n.textProfileUser,children:r})]})]})},V=Object(u.a)((function(e){return{wrapperAwardUser:{position:"relative",paddingTop:25,paddingBottom:25,"&::after":{position:"absolute",content:'""',top:0,left:0,height:5,width:"30%",backgroundColor:e.palette.text.second}},titleAward:{lineHeight:"1.5",color:e.palette.text.main,fontSize:20,marginBottom:10,textTransform:"uppercase"},textAward:{lineHeight:"1.5",color:e.palette.text.primary,fontSize:14}}})),P=function(e){var t=e.title,a=e.text,i=V();return Object(f.jsxs)(b.a,{className:i.wrapperAwardUser,children:[Object(f.jsx)("h2",{className:i.titleAward,children:t}),Object(f.jsx)("p",{className:i.textAward,children:a})]})},J=Object(u.a)((function(e){return{wrapperInfo:{borderBottom:"1px solid ".concat(e.palette.border.main)},titleAward:{fontSize:16,color:e.palette.text.main,fontWeight:600,marginBottom:10},wrapperCallMeInfo:{paddingBottom:25},textAward:{fontSize:14,color:e.palette.text.primary},wrapperNameUser:{paddingBottom:25,paddingTop:50,marginBottom:25},titleFirstName:{fontSize:"36px",color:e.palette.text.main,lineHeight:"1.5"},titleLastName:{position:"relative",top:-30,fontSize:"70px",color:e.palette.text.second,lineHeight:"1.5"},wrapperSocial:{position:"relative",top:"-70px",listStyle:"none",display:"flex"},socialBtn:{cursor:"pointer",marginRight:"6px",width:"33px",height:"33px",backgroundColor:e.palette.iconBack.main,border:"1px solid ".concat(e.palette.iconBack.main)},socialLink:{display:"block",textAlign:"center",width:"33px",height:"33px",fontSize:".8rem !important",lineHeight:"2.7 !important",borderRadius:"2px",textDecoration:"none"},socialIcon:{color:"#c6c6c6",fontSize:"1.5em",lineHeight:"0.75em",verticalAlign:"-15%"}}})),q=function(e){var t=e.items,a=J();return Object(f.jsxs)(b.a,{className:a.wrapperCallMeUser,children:[Object(f.jsx)(b.a,{className:a.wrapperInfo,children:t.map((function(e,t){return Object(f.jsxs)(b.a,{className:a.wrapperCallMeInfo,children:[Object(f.jsx)("h2",{className:a.titleAward,children:e.title}),Object(f.jsx)("p",{className:a.textAward,children:e.text})]},t)}))}),Object(f.jsxs)(b.a,{className:a.wrapperNameUser,children:[Object(f.jsx)("h3",{className:a.titleFirstName,children:"Alexander"}),Object(f.jsx)("h2",{className:a.titleLastName,children:"Vodorez"})]}),Object(f.jsxs)("ul",{className:a.wrapperSocial,children:[Object(f.jsx)("li",{className:a.socialBtn,children:Object(f.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100008973467157",className:a.socialLink,children:Object(f.jsx)("i",{className:"fab fa-facebook-f ".concat(a.socialIcon," ")})})}),Object(f.jsx)("li",{className:a.socialBtn,children:Object(f.jsx)("a",{href:"https://github.com/hellhellpnick",className:a.socialLink,children:Object(f.jsx)("i",{className:"fab fa-github ".concat(a.socialIcon," ")})})}),Object(f.jsx)("li",{className:a.socialBtn,children:Object(f.jsx)("a",{href:"https://www.linkedin.com/in/alexander-vodoriz-24a27a1b5/",className:a.socialLink,children:Object(f.jsx)("i",{className:"fab fa-linkedin ".concat(a.socialIcon," ")})})})]})]})},Z=a(124),X=a(120),$=Object(u.a)((function(e){return{wrapperModalWindow:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,backgroundColor:e.palette.background.main,outline:"none",border:"2px solid ".concat(e.palette.border.main),padding:20},modalText:{fontSize:14,lineHeight:"1.5",color:e.palette.text.primary},modalTitle:{fontSize:20,lineHeight:"1.5",color:e.palette.text.main,marginBottom:10}}}));function _(e){var t=e.title,a=e.text,r=$(),n=i.useState(!0),o=Object(s.a)(n,2),l=o[0],c=o[1];return Object(f.jsx)(b.a,{children:Object(f.jsx)(Z.a,{open:l,onClose:function(){return c(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(f.jsxs)(b.a,{className:r.wrapperModalWindow,children:[Object(f.jsx)(X.a,{id:"modal-modal-title",variant:"h6",component:"h2",className:r.modalTitle,children:t}),Object(f.jsx)(X.a,{id:"modal-modal-description",sx:{mt:2},className:r.modalText,children:a})]})})})}a(77);var ee=Object(u.a)((function(e){return{wrapperHeader:{position:"relative",padding:"25px 25px 0 25px",backgroundColor:e.palette.background.main,transition:"all 0.2s ease",zIndex:1},wrapperImg:{display:"flex",justifyContent:"center",position:"relative",borderRadius:"50%",minHeight:"100%"},headerImg:{maxWidth:"100%",minHeight:"100%",borderRadius:"50%",objectFit:"cover",objectPosition:"center",margin:"0 auto"},wrapperSkills:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center",padding:"25px 25px 0 25px",backgroundColor:e.palette.background.main,transition:"all 0.2s ease"},wrapperExperienceUser:{padding:"25px 25px 0 25px",backgroundColor:e.palette.background.main,transition:"all 0.2s ease"},wrapperProfileUser:{backgroundColor:e.palette.background.main,transition:"all 0.2s ease"},wrapperAwards:{padding:"25px 25px 0 25px",backgroundColor:e.palette.background.main,transition:"all 0.2s ease"},wrapperCallMeUser:{padding:"25px 25px 0 25px",backgroundColor:e.palette.background.main,transition:"all 0.2s ease"}}})),te=function(e){var t=e.statusTheme,a=e.func,i=ee();return Object(f.jsxs)(b.a,{children:[Object(f.jsx)(v,{statusTheme:t,func:a}),Object(f.jsx)(b.a,{className:i.wrapperHeader,children:Object(f.jsx)(b.a,{className:i.wrapperImg,children:Object(f.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"avatar",className:i.headerImg})})}),Object(f.jsx)(K,{}),Object(f.jsx)(R,{title:"intro",text:"What I am all about"}),Object(f.jsx)(z,{}),Object(f.jsx)(R,{title:"expertise",text:"Batman would be jealous"}),Object(f.jsx)(W,{items:[{title:"Advanced CSS",text:"Advanced use of css capabilities. Such as flex, animation, pseudo-operators and more. There is also an implementation of these things. You can look in the Work section and see for yourself"},{title:"Front-end Design",text:"The ability to design and implement. You can create different interactive designs with different features :). Of course, you can check it in the Work section"},{title:"JavaScript",text:"Quite a few features were developed, but they never came across in my repositories. Now all this can be checked in the Work section. JS is very easy to use, but I want to dive into TS in the future :)"}]}),Object(f.jsx)(R,{title:"skills",text:"Progress bars, anyone?"}),Object(f.jsxs)(b.a,{className:i.wrapperSkills,children:[Object(f.jsx)(T,{procent:"85",title:"photoshop"}),Object(f.jsx)(T,{procent:"70",title:"git"}),Object(f.jsx)(T,{procent:"65",title:"after effects"}),Object(f.jsx)(T,{procent:"60",title:"css3"}),Object(f.jsx)(T,{procent:"40",title:"vue"}),Object(f.jsx)(T,{procent:"60",title:"react"})]}),Object(f.jsx)(R,{title:"Experience",text:"Yes. I've been around."}),Object(f.jsx)(b.a,{className:i.wrapperExperienceUser,children:Object(f.jsx)(Q,{data:"2020 October - 2020 December",title:"Productera",position:"Junior Full-stack developer",location:"Canada",text:"Completed an internship as a fullstack developer in June. I learned React and Python from scratch. Learning React was successful, but Python was not. Helped maintain the main site and trained in a separate branch for the current project."})}),Object(f.jsx)(R,{title:"Education",text:"Lazy isn`t in my vocabulary."}),Object(f.jsxs)(b.a,{className:i.wrapperExperienceUser,children:[Object(f.jsx)(Q,{data:"2015 - 2018",title:"Higher vocational school \u21167",position:"Operator with information processing and software",location:"Poltava, UA",text:"Skilled worker in such software: microsoft office (Powerpoint, Word, Excel), Adobe IndeSign, Adobe Photoshop and other. Trained in the basic concept of programming. Languages viewed visual basic 1996 and pascal"}),Object(f.jsx)(Q,{data:"2018 - Present",title:"KrNU named  Mikhail Ostrogradsky",position:"Computer science (122)",location:"Poltava, UA",text:"Trained in the basic concept of programming. Languages viewed \u0441++, python, java, js and php. At the moment studying the theory of artificial intelligence, project management and computer networks"}),Object(f.jsx)(Q,{data:"2020 March - 2020 August",title:"Beetroot Academy",position:"Junior Front-end developer",location:"Poltava, UA",text:"Skilled worker in such software: microsoft office (Powerpoint, Word, Excel), Adobe IndeSign, Adobe Photoshop and other. Trained in the basic concept of programming. Considered visual basic 1996 and pascal"})]}),Object(f.jsx)(R,{title:"Profiles",text:"Busy as usualy."}),Object(f.jsxs)(b.a,{className:i.wrapperProfileUser,children:[Object(f.jsx)(F,{icon:"fab fa-github-alt",title:"github",link:"https://github.com/hellhellpnick",text:"All my open source projects for you analyze. "}),Object(f.jsx)(F,{icon:"fab fa-linkedin",link:"https://www.linkedin.com/in/alexander-vodoriz-24a27a1b5/",title:"linkedin",text:"All brief information about me can be found here. Also view comments about me "})]}),Object(f.jsx)(R,{title:"Awards",text:"Happy times!"}),Object(f.jsxs)(b.a,{className:i.wrapperAwards,children:[Object(f.jsx)(P,{title:"1st Place at page designer",text:"Competition for 1 place between courses of the same specialty. Best web page creator wins an award "}),Object(f.jsx)(P,{title:"Certificate Brain Basket",text:"Certificate for completing the course from the brain basket. Languages considered: c ++, js, html, css and python"})]}),Object(f.jsx)(R,{title:"Contact",text:"Call me, maybe"}),Object(f.jsx)(b.a,{className:i.wrapperCallMeUser,children:Object(f.jsx)(q,{items:[{title:"Location",text:"Poltave, UA"},{title:"Phone",text:"098-131-xxxx"},{title:"Web",text:"hellhellpnick.github.io/Job"},{title:"Email",text:"hellhellpnick@gmail.com"}]})}),Object(f.jsx)(_,{title:"Appeal to the user",text:"The website is under construction. Please don't complain much"})]})},ae=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(f.jsx)(l.a,{theme:a?d:x,children:Object(f.jsx)(te,{statusTheme:a,func:function(){i(!a)}})})};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(ae,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.eb48277f.chunk.js.map