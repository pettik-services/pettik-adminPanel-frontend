"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{3471:function(r,t,n){n.d(t,{Z:function(){return T}});var o=n(3366),e=n(7462),a=n(7294),i=n(6010);let l=r=>{let t=a.useRef({});return a.useEffect(()=>{t.current=r}),t.current};var s=n(4780),c=n(1588),g=n(7621);function u(r){return(0,g.Z)("MuiBadge",r)}(0,c.Z)("MuiBadge",["root","badge","invisible"]);var d=n(6273),v=function(r){return"string"==typeof r};function f(r){if(void 0===r)return{};let t={};return Object.keys(r).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof r[t])).forEach(n=>{t[n]=r[n]}),t}let h=["elementType","externalSlotProps","ownerState"];function m(r){var t,n;let{elementType:a,externalSlotProps:l,ownerState:s}=r,c=(0,o.Z)(r,h),g="function"==typeof l?l(s):l,{props:u,internalRef:m}=function(r){let{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:a,className:l}=r;if(!t){let s=(0,i.Z)(null==a?void 0:a.className,null==o?void 0:o.className,l,null==n?void 0:n.className),c=(0,e.Z)({},null==n?void 0:n.style,null==a?void 0:a.style,null==o?void 0:o.style),g=(0,e.Z)({},n,a,o);return s.length>0&&(g.className=s),Object.keys(c).length>0&&(g.style=c),{props:g,internalRef:void 0}}let u=function(r,t=[]){if(void 0===r)return{};let n={};return Object.keys(r).filter(n=>n.match(/^on[A-Z]/)&&"function"==typeof r[n]&&!t.includes(n)).forEach(t=>{n[t]=r[t]}),n}((0,e.Z)({},a,o)),d=f(o),v=f(a),h=t(u),m=(0,i.Z)(null==h?void 0:h.className,null==n?void 0:n.className,l,null==a?void 0:a.className,null==o?void 0:o.className),p=(0,e.Z)({},null==h?void 0:h.style,null==n?void 0:n.style,null==a?void 0:a.style,null==o?void 0:o.style),b=(0,e.Z)({},h,n,v,d);return m.length>0&&(b.className=m),Object.keys(p).length>0&&(b.style=p),{props:b,internalRef:h.ref}}((0,e.Z)({},c,{externalSlotProps:g})),p=(0,d.Z)(m,null==g?void 0:g.ref,null==(t=r.additionalProps)?void 0:t.ref),b=(n=(0,e.Z)({},u,{ref:p}),void 0===a||v(a)?n:(0,e.Z)({},n,{ownerState:(0,e.Z)({},n.ownerState,s)}));return b}var p=n(5893);let b=["badgeContent","component","children","invisible","max","slotProps","slots","showZero"],Z=r=>{let{invisible:t}=r;return(0,s.Z)({root:["root"],badge:["badge",t&&"invisible"]},u,void 0)},O=a.forwardRef(function(r,t){let{component:n,children:a,max:i=99,slotProps:s={},slots:c={},showZero:g=!1}=r,u=(0,o.Z)(r,b),{badgeContent:d,max:v,displayValue:f,invisible:h}=function(r){let{badgeContent:t,invisible:n=!1,max:o=99,showZero:e=!1}=r,a=l({badgeContent:t,max:o}),i=n;!1!==n||0!==t||e||(i=!0);let{badgeContent:s,max:c=o}=i?a:r,g=s&&Number(s)>c?`${c}+`:s;return{badgeContent:s,invisible:i,max:c,displayValue:g}}((0,e.Z)({},r,{max:i})),O=(0,e.Z)({},r,{badgeContent:d,invisible:h,max:v,showZero:g}),y=Z(O),x=n||c.root||"span",R=m({elementType:x,externalSlotProps:s.root,externalForwardedProps:u,additionalProps:{ref:t},ownerState:O,className:y.root}),$=c.badge||"span",N=m({elementType:$,externalSlotProps:s.badge,ownerState:O,className:y.badge});return(0,p.jsxs)(x,(0,e.Z)({},R,{children:[a,(0,p.jsx)($,(0,e.Z)({},N,{children:f}))]}))});var y=n(1496),x=n(4502);let R=r=>!r||!v(r);var $=n(8216);function N(r){return(0,g.Z)("MuiBadge",r)}let S=(0,c.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),w=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],C=r=>{let{color:t,anchorOrigin:n,invisible:o,overlap:e,variant:a,classes:i={}}=r,l={root:["root"],badge:["badge",a,o&&"invisible",`anchorOrigin${(0,$.Z)(n.vertical)}${(0,$.Z)(n.horizontal)}`,`anchorOrigin${(0,$.Z)(n.vertical)}${(0,$.Z)(n.horizontal)}${(0,$.Z)(e)}`,`overlap${(0,$.Z)(e)}`,"default"!==t&&`color${(0,$.Z)(t)}`]};return(0,s.Z)(l,N,i)},z=(0,y.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),B=(0,y.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,t)=>{let{ownerState:n}=r;return[t.badge,t[n.variant],t[`anchorOrigin${(0,$.Z)(n.anchorOrigin.vertical)}${(0,$.Z)(n.anchorOrigin.horizontal)}${(0,$.Z)(n.overlap)}`],"default"!==n.color&&t[`color${(0,$.Z)(n.color)}`],n.invisible&&t.invisible]}})(({theme:r,ownerState:t})=>(0,e.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen})},"default"!==t.color&&{backgroundColor:(r.vars||r).palette[t.color].main,color:(r.vars||r).palette[t.color].contrastText},"dot"===t.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${S.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${S.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${S.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${S.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${S.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${S.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${S.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${S.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},t.invisible&&{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})})),P=a.forwardRef(function(r,t){var n,a,s,c,g,u;let d;let v=(0,x.Z)({props:r,name:"MuiBadge"}),{anchorOrigin:f={vertical:"top",horizontal:"right"},className:h,component:m="span",components:b={},componentsProps:Z={},overlap:y="rectangular",color:$="default",invisible:N=!1,max:S,badgeContent:P,slots:T,slotProps:k,showZero:j=!1,variant:M="standard"}=v,E=(0,o.Z)(v,w),L=l({anchorOrigin:f,color:$,overlap:y,variant:M}),W=N;!1!==N||(0!==P||j)&&(null!=P||"dot"===M)||(W=!0);let{color:I=$,overlap:_=y,anchorOrigin:A=f,variant:F=M}=W?L:v,D=(0,e.Z)({},v,{anchorOrigin:A,invisible:W,color:I,overlap:_,variant:F}),H=C(D);"dot"!==F&&(d=P&&Number(P)>S?`${S}+`:P);let q=null!=(n=null!=(a=null==T?void 0:T.root)?a:b.Root)?n:z,G=null!=(s=null!=(c=null==T?void 0:T.badge)?c:b.Badge)?s:B,J=null!=(g=null==k?void 0:k.root)?g:Z.root,K=null!=(u=null==k?void 0:k.badge)?u:Z.badge;return(0,p.jsx)(O,(0,e.Z)({invisible:N,badgeContent:d,showZero:j,max:S},E,{slots:{root:q,badge:G},className:(0,i.Z)(null==J?void 0:J.className,H.root,h),slotProps:{root:(0,e.Z)({},J,R(q)&&{as:m,ownerState:(0,e.Z)({},null==J?void 0:J.ownerState,{anchorOrigin:A,color:I,overlap:_,variant:F})}),badge:(0,e.Z)({},K,{className:(0,i.Z)(H.badge,null==K?void 0:K.className)},R(G)&&{ownerState:(0,e.Z)({},null==K?void 0:K.ownerState,{anchorOrigin:A,color:I,overlap:_,variant:F})})},ref:t}))});var T=P}}]);