(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{3567:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/add-partner",function(){return s(7871)}])},5508:function(e,a){"use strict";a.Z={src:"/_next/static/media/logo.80aa48b9.png",height:6e3,width:6e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqElEQVR42mOAgZ2ZxoyLE62YGAiBLw8tmJfNlGVkgIENCdpgXVMD5RZ0u2s3wMTX9SuBxRnOFGmCGZN8pK7uKZXZ//SBaVRSiYMKAwMDw5wGfWaGuWUMYOO2x4lsvNDE8P/wLNH/t9bzzJ0bKKrMAAPb7RjY9+Y4GSzpbA9YVNgYsb3JzuHYJAZxBkLg/HxthGO3+DIw5TEwMOUzMDBvKmVgPjPHACwJAAjkMNg7kT8/AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},2415:function(e,a,s){"use strict";var r=s(5893),i=s(9348),n=s.n(i);s(5675),s(5508);var t=s(1664),l=s.n(t),d=s(1163);s(2585),s(2211);let o=()=>((0,d.useRouter)(),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:n().sidenav,children:[(0,r.jsxs)("p",{className:n().logo,children:[(0,r.jsx)("span",{children:"Pettik"}),"-Admin"]}),(0,r.jsxs)(l(),{href:"/user",className:n().icona,children:[(0,r.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0User List"]}),(0,r.jsxs)(l(),{href:"/orders",className:n().icona,children:[(0,r.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0Order List"]}),(0,r.jsx)("div",{className:n().iconadropdown,children:(0,r.jsx)("ul",{className:n().navul,children:(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0Groomings\xa0\xa0",(0,r.jsx)("i",{className:"fa fa-caret-down","aria-hidden":"true"}),(0,r.jsxs)("ul",{className:n().dropdown,children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/grooming-services",className:n().navli,children:"Grooming Services"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/application-grooming",className:n().navli,children:"Grooming Plans"})})]})]})})}),(0,r.jsxs)(l(),{href:"/partner",className:n().icona,children:[(0,r.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0Partner"]}),(0,r.jsxs)(l(),{href:"/blogs",className:n().icona,children:[(0,r.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0Blogs"]})]})}));a.Z=o},2882:function(e,a,s){"use strict";var r=s(5893),i=s(7294),n=s(7716),t=s.n(n),l=s(3471),d=s(594),o=s(1163);let c=e=>{let{Navbarheading:a}=e,s=(0,o.useRouter)(),[n,c]=(0,i.useState)("");setInterval(function(){u()},6e5);let u=async()=>{try{let e=await d.Z.get("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/notificationView");console.log("notification response",e.data),c(e.data.notificationCount)}catch(a){console.log("notification error",a)}},m=async()=>{try{let e=await d.Z.get("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/updateAdminView");console.log("updateAdminview notification",e.data),s.push("/orders")}catch(a){console.log("notificationupdate Error",a)}};return(0,i.useEffect)(()=>{u()},[]),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:t().main,children:(0,r.jsxs)("div",{className:t().head,children:[(0,r.jsx)("div",{className:t().colUser,children:(0,r.jsx)("span",{className:t().userListSpan,children:a})}),(0,r.jsx)("div",{className:t().colUser,children:(0,r.jsxs)("div",{className:t().profile,children:[(0,r.jsx)(l.Z,{badgeContent:n,color:"error",className:t().profileIconNotification,onClick:m,children:(0,r.jsx)("span",{className:t().profileIcon,children:(0,r.jsx)("i",{className:"fa fa-user-circle fa-2x"})})}),(0,r.jsx)("p",{children:"Prasanjit Prusty"})]})})]})})})};a.Z=c},7871:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return A}});var r=s(5893),i=s(7294),n=s(9667),t=s.n(n),l=s(2415),d=s(2088),o=s(594),c=s(1163),u=s(682),m=s(4051),p=s(1555),h=s(8475),x=s(3151),_=s(5005),j=s(9583),N=s(878),v=s(2882);let f=()=>{let e=(0,c.useRouter)(),{enqueueSnackbar:a}=(0,d.Ds)(),[s,n]=(0,i.useState)(!1),[f,g]=(0,i.useState)([]),[A,b]=(0,i.useState)(!1),[S,w]=(0,i.useState)([]),[Z,P]=(0,i.useState)({city:"",street_address:"",pin:""}),[y,C]=(0,i.useState)(""),[k,E]=(0,i.useState)(""),D=["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"],[U,I]=(0,i.useState)({name:"",email:"",phone:"",description:""}),L=(e,a)=>{w(e)},T=e=>{C(e.target.value)},G=e=>{E(e.target.value)};console.log("includeData",f);let V=async(s,r)=>{let i=r.map(e=>({...e,time:y+"-"+k}));if(console.log("newinclude",i),R(s,r)){try{await o.Z.post("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/partner/add",{name:s.name,email:s.email,phone_no:s.phone,description:s.description,role:S,available_location_time:i}),a("Added Successfully",{variant:"success"}),e.push("/partner")}catch(n){console.log("error message",n.message),n.response&&400===n.response.status?a(n.response.data.message,{variant:"error"}):a("Somthing went wrong",{variant:"error"})}I({name:"",email:"",phone:"",description:""}),g([]),C(""),E(""),w([])}},R=(e,s)=>e.name?e.email?e.phone?e.description?(console.log("role",S),S.length)?y?k?!!s.length||(a("please add location address",{variant:"error"}),!1):(a("End time is a required field",{variant:"error"}),!1):(a("Start time is a required field",{variant:"error"}),!1):(a("role is a required field",{variant:"error"}),!1):(a("description is a required field",{variant:"error"}),!1):(a(" phone is a required field",{variant:"error"}),!1):(a("email is a required field",{variant:"error"}),!1):(a("name is a required field",{variant:"error"}),!1),q=e=>{let[a,s]=[e.target.name,e.target.value];I(e=>({...e,[a]:s}))},B=(e,a)=>{P(s=>({...s,[e]:a}))},z=e=>{let a=[...f];a.splice(e,1),console.log("deleteIndex",a),g(a)},F=e=>{let a=e.currentTarget;!1===a.checkValidity()&&(e.preventDefault(),e.stopPropagation()),g([...f].concat([Z])),b(!0),n(!1)},O=()=>n(!1),J=()=>n(!0);return(0,r.jsxs)("div",{className:t().partnerContainer,children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(v.Z,{Navbarheading:"Add Partner"}),(0,r.jsx)("div",{className:t().userDetails,children:(0,r.jsx)("div",{className:t().panel1,children:(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(m.Z,{children:[(0,r.jsxs)(p.Z,{children:[(0,r.jsxs)("div",{className:t().udetails,children:[(0,r.jsx)("label",{className:t().title,children:"Partner Name"}),(0,r.jsx)("div",{className:t().userInput,children:(0,r.jsx)("input",{className:t().userName,name:"name",value:U.name,onChange:q,placeholder:"Enter partner name"})})]}),(0,r.jsxs)("div",{className:t().udetails,children:[(0,r.jsx)("label",{className:t().title,children:"Email"}),(0,r.jsx)("div",{className:t().userInput,children:(0,r.jsx)("input",{className:t().userName,name:"email",value:U.email,onChange:q,placeholder:"Enter email"})})]}),(0,r.jsxs)("div",{className:t().udetails,children:[(0,r.jsx)("label",{className:t().title,children:"Phone number"}),(0,r.jsx)("div",{className:t().userInput,children:(0,r.jsx)("input",{className:t().userName,name:"phone",value:U.phone,onChange:q,placeholder:"Enter phone number"})})]}),(0,r.jsxs)("div",{className:t().udetails,children:[(0,r.jsx)("label",{className:t().title,children:"Description"}),(0,r.jsx)("div",{className:t().userInput,children:(0,r.jsx)("textarea",{className:t().userDescription,name:"description",value:U.description,onChange:q,placeholder:"Enter description"})})]}),(0,r.jsxs)("div",{className:t().udetails,children:[(0,r.jsx)("label",{className:t().title,children:"Role \xa0"}),(0,r.jsx)(N.default,{displayValue:"key",options:[{key:"groomer"},{key:"trainer"},{key:"dog walker"},{key:"doctor"},{key:"advertizer"},{key:"pet hostel"},{key:"dietitian"}],onSelect:L})]}),(0,r.jsxs)("div",{className:t().time,children:[(0,r.jsx)("label",{className:t().timeTitle,children:"Select Time"}),(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsxs)("div",{className:"form-group col-md-4",children:[(0,r.jsx)("label",{className:t().titlestart,children:"Start Time :"}),(0,r.jsxs)("select",{name:"starttime",className:"form-control",onChange:T,children:[(0,r.jsx)("option",{children:"select time--"}),D.map((e,a)=>(0,r.jsx)("option",{children:e},a))]})]}),(0,r.jsxs)("div",{className:"form-group col-md-4",children:[(0,r.jsx)("label",{className:t().titlestart,children:"End Time :"}),(0,r.jsxs)("select",{name:"endtime",className:"form-control",onChange:G,children:[(0,r.jsx)("option",{children:"select time--"}),D.map((e,a)=>(0,r.jsx)("option",{children:e},a))]})]})]})]})]}),(0,r.jsx)(p.Z,{children:(0,r.jsxs)("div",{className:t().udetails,children:[(0,r.jsx)("h4",{children:"Locations"}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:t().includeButton,children:(0,r.jsx)(_.Z,{variant:"outline-primary",onClick:J,children:"Add Location"})}),(0,r.jsx)("div",{className:t().includeDataContainer,children:f.map((e,a)=>(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsxs)("span",{children:[e.city,",",e.street_address,",",e.pin]}),(0,r.jsx)("span",{className:t().includeSpan,onClick:()=>z(a),children:(0,r.jsx)(j.Xm5,{})})]})},a))}),(0,r.jsxs)(h.Z,{show:s,onHide:O,children:[(0,r.jsx)(h.Z.Header,{closeButton:!0,children:(0,r.jsx)(h.Z.Title,{children:"Add Address"})}),(0,r.jsx)(h.Z.Body,{children:(0,r.jsxs)(x.Z,{noValidate:!0,validated:A,children:[(0,r.jsxs)(x.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,r.jsx)(x.Z.Label,{children:"City"}),(0,r.jsx)(x.Z.Control,{type:"text",placeholder:" Enter city",autoFocus:!0,required:!0,value:Z.city,onChange:e=>B("city",e.target.value)}),(0,r.jsx)(x.Z.Label,{children:"Street Address"}),(0,r.jsx)(x.Z.Control,{type:"text",placeholder:" Enter Street Address",autoFocus:!0,required:!0,value:Z.street_address,onChange:e=>B("street_address",e.target.value)}),(0,r.jsx)(x.Z.Label,{children:"Pin"}),(0,r.jsx)(x.Z.Control,{type:"text",placeholder:"Enter pin",autoFocus:!0,required:!0,value:Z.pin,onChange:e=>B("pin",e.target.value)}),(0,r.jsx)(x.Z.Control.Feedback,{type:"invalid",children:"Please provide a valid name."})]}),(0,r.jsx)(_.Z,{variant:"primary",onClick:F,children:"Submit"})]})})]})]})})]}),(0,r.jsx)(m.Z,{className:"justify-content-md-center p-3",children:(0,r.jsx)(p.Z,{md:{span:6,offset:3},children:(0,r.jsx)(_.Z,{variant:"primary",style:{width:"200px"},onClick:()=>V(U,f),children:"Submit"})})})]})})})]})},g=()=>(0,r.jsx)("div",{children:(0,r.jsx)(f,{})});var A=g},9667:function(e){e.exports={partnerContainer:"AddPartner_partnerContainer__o5JKn",main:"AddPartner_main__VAT5W",head:"AddPartner_head__2_Rkr",colUser:"AddPartner_colUser__Q4g2e",profile:"AddPartner_profile__xbTjw",userListSpan:"AddPartner_userListSpan__ycRKf",profileIcon:"AddPartner_profileIcon__YypB5",userDetails:"AddPartner_userDetails__wJdwX",panel1:"AddPartner_panel1__Duu6U",title:"AddPartner_title__s8i_D",udetails:"AddPartner_udetails__TVJ5E",includeButton:"AddPartner_includeButton__5FAzT",userName:"AddPartner_userName__hp5UP",userDescription:"AddPartner_userDescription__hz_7M",select:"AddPartner_select__84O8G",includeDataContainer:"AddPartner_includeDataContainer__oB7gV",includeSpan:"AddPartner_includeSpan__pVRrJ",time:"AddPartner_time__Xuf8L",timeTitle:"AddPartner_timeTitle__WrFdR",titlestart:"AddPartner_titlestart__S9255"}},9348:function(e){e.exports={logo:"SideNavbar_logo__iGFC7",sidenav:"SideNavbar_sidenav__G98b8",icona:"SideNavbar_icona__x6_LU",groomingSubmenu:"SideNavbar_groomingSubmenu__RfXb9",navul:"SideNavbar_navul__FNMxF",iconadropdown:"SideNavbar_iconadropdown__iurKl",navli:"SideNavbar_navli__UeD0k",dropdown:"SideNavbar_dropdown__SbJam"}},7716:function(e){e.exports={main:"UpperNavbar_main__yVhsY",head:"UpperNavbar_head__bA7NI",colUser:"UpperNavbar_colUser__sSZOz",profile:"UpperNavbar_profile__uELZP",userListSpan:"UpperNavbar_userListSpan__Gfk__",profileIcon:"UpperNavbar_profileIcon__I3EG8",profileIconNotification:"UpperNavbar_profileIconNotification__hTXJi"}}},function(e){e.O(0,[445,873,848,471,369,774,888,179],function(){return e(e.s=3567)}),_N_E=e.O()}]);