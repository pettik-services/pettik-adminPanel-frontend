(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{9117:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/application-grooming",function(){return s(164)}])},5508:function(e,a){"use strict";a.Z={src:"/_next/static/media/logo.80aa48b9.png",height:6e3,width:6e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqElEQVR42mOAgZ2ZxoyLE62YGAiBLw8tmJfNlGVkgIENCdpgXVMD5RZ0u2s3wMTX9SuBxRnOFGmCGZN8pK7uKZXZ//SBaVRSiYMKAwMDw5wGfWaGuWUMYOO2x4lsvNDE8P/wLNH/t9bzzJ0bKKrMAAPb7RjY9+Y4GSzpbA9YVNgYsb3JzuHYJAZxBkLg/HxthGO3+DIw5TEwMOUzMDBvKmVgPjPHACwJAAjkMNg7kT8/AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},2415:function(e,a,s){"use strict";var i=s(5893),o=s(9348),n=s.n(o);s(5675),s(5508);var r=s(1664),t=s.n(r),c=s(1163);s(2585),s(2211);let l=()=>((0,c.useRouter)(),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:n().sidenav,children:[(0,i.jsxs)("p",{className:n().logo,children:[(0,i.jsx)("span",{children:"Pettik"}),"-Admin"]}),(0,i.jsxs)(t(),{href:"/user",className:n().icona,children:[(0,i.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0User List"]}),(0,i.jsxs)(t(),{href:"/orders",className:n().icona,children:[(0,i.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0Order List"]}),(0,i.jsx)("div",{className:n().iconadropdown,children:(0,i.jsx)("ul",{className:n().navul,children:(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0Groomings\xa0\xa0",(0,i.jsx)("i",{className:"fa fa-caret-down","aria-hidden":"true"}),(0,i.jsxs)("ul",{className:n().dropdown,children:[(0,i.jsx)("li",{children:(0,i.jsx)(t(),{href:"/grooming-services",className:n().navli,children:"Grooming Services"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t(),{href:"/application-grooming",className:n().navli,children:"Grooming Plans"})})]})]})})}),(0,i.jsxs)(t(),{href:"/partner",className:n().icona,children:[(0,i.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0Partner"]}),(0,i.jsxs)(t(),{href:"/blogs",className:n().icona,children:[(0,i.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0Blogs"]})]})}));a.Z=l},2882:function(e,a,s){"use strict";var i=s(5893),o=s(7294),n=s(7716),r=s.n(n),t=s(3471),c=s(594),l=s(1163);let d=e=>{let{Navbarheading:a}=e,s=(0,l.useRouter)(),[n,d]=(0,o.useState)("");setInterval(function(){p()},6e5);let p=async()=>{try{let e=await c.Z.get("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/notificationView");console.log("notification response",e.data),d(e.data.notificationCount)}catch(a){console.log("notification error",a)}},m=async()=>{try{let e=await c.Z.get("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/updateAdminView");console.log("updateAdminview notification",e.data),s.push("/orders")}catch(a){console.log("notificationupdate Error",a)}};return(0,o.useEffect)(()=>{p()},[]),(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:r().main,children:(0,i.jsxs)("div",{className:r().head,children:[(0,i.jsx)("div",{className:r().colUser,children:(0,i.jsx)("span",{className:r().userListSpan,children:a})}),(0,i.jsx)("div",{className:r().colUser,children:(0,i.jsxs)("div",{className:r().profile,children:[(0,i.jsx)(t.Z,{badgeContent:n,color:"error",className:r().profileIconNotification,onClick:m,children:(0,i.jsx)("span",{className:r().profileIcon,children:(0,i.jsx)("i",{className:"fa fa-user-circle fa-2x"})})}),(0,i.jsx)("p",{children:"Prasanjit Prusty"})]})})]})})})};a.Z=d},164:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return w}});var i=s(5893),o=s(7294),n=s(2415),r=s(8353),t=s.n(r),c=s(594),l=s(682),d=s(4051),p=s(1555),m=s(5147),_=s(3380),h=s.n(_),u=s(9517),x=s(9603),g=s(5742),f=s(1664),N=s.n(f),j=s(1163),v=s(2088),A=s(2882);let G=()=>{let e=(0,j.useRouter)(),[a,s]=(0,o.useState)("#ffffff"),{enqueueSnackbar:r}=(0,v.Ds)(),[_,f]=(0,o.useState)(""),[G,b]=(0,o.useState)(!1),[w,S]=(0,o.useState)([]),I=async()=>{try{b(!0);let e=await c.Z.get("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/grooming/application/List");console.log("response data",e.data),S(e.data.groomingList),b(!1)}catch(a){console.log(a)}},C=a=>{localStorage.setItem("grooPlan",JSON.stringify(a)),e.push("/update-grooming")},Z=async e=>{if(confirm("Are you sure to delete this plan"))try{await c.Z.post("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/grooming/delete",{serviceID:e}),S(w.filter(a=>a.serviceID!==e)),r("Deleted Successfully",{variant:"success"})}catch(a){console.log("error message",a.message),a.response&&400===a.response.status?r(a.response.data.message,{variant:"error"}):r("Somthing went wrong",{variant:"error"})}};return(0,o.useEffect)(()=>{I()},[]),(0,i.jsxs)("div",{className:t().GroomingContainer,children:[(0,i.jsx)(n.Z,{}),(0,i.jsx)(A.Z,{Navbarheading:"Application Grooming List"}),(0,i.jsx)("div",{className:t().userDetails,children:(0,i.jsx)(l.Z,{fluid:!0,children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(p.Z,{children:(0,i.jsx)("input",{type:"text",className:t().formControl,placeholder:"Search by phone number",onChange:e=>f(e.target.value)})}),(0,i.jsx)(p.Z,{className:t().addUserCol,children:(0,i.jsx)(N(),{href:"/add-grooming",children:(0,i.jsx)("button",{className:"btn btn-outline-primary btn-md",children:"Add Groomings"})})})]})})}),(0,i.jsx)("div",{className:t().userData,children:(0,i.jsxs)(m.Z,{striped:!0,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:t().th,children:"Service Name"}),(0,i.jsx)("th",{className:t().th,children:"Cost"}),(0,i.jsx)("th",{className:t().th,children:"ID"}),(0,i.jsx)("th",{className:t().addressth,children:"Services For"}),(0,i.jsx)("th",{className:t().th,children:"Completed Time"}),(0,i.jsx)("th",{className:t().th,children:"Action"})]})}),(0,i.jsx)("tbody",{children:null==w?void 0:w.filter(e=>e.name.toLowerCase().includes(_)).map((e,a)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:t().td,children:e.name}),(0,i.jsx)("td",{className:t().td,children:e.cost}),(0,i.jsx)("td",{className:t().td,children:e.serviceID}),(0,i.jsx)("td",{className:t().addresstd,children:e.service_for}),(0,i.jsx)("td",{className:t().td,children:e.service_time}),(0,i.jsx)("td",{className:t().td,children:(0,i.jsxs)("span",{className:t().appGroIcon,children:[(0,i.jsx)(x.G,{icon:g.$aW,className:t().appGroIconDelete,onClick:()=>{Z(e.serviceID)}}),(0,i.jsx)(x.G,{icon:g.Xcf,className:t().appGroIconedit,onClick:()=>{C(e)}})]})})]},a))})]})}),G&&(0,i.jsxs)(u.Z,{className:t().loading,children:[(0,i.jsx)(h(),{color:a,loading:G,size:100,"aria-label":"Loading Spinner","data-testid":"loader"}),(0,i.jsx)("h4",{children:"Loading Grooming List..."})]})]})},b=()=>(0,i.jsx)("div",{children:(0,i.jsx)(G,{})});var w=b},8353:function(e){e.exports={GroomingContainer:"ApplicationGrooming_GroomingContainer__3xlwS",main:"ApplicationGrooming_main__Ro4rt",head:"ApplicationGrooming_head__wqNp8",colUser:"ApplicationGrooming_colUser__J1i__",profile:"ApplicationGrooming_profile__C_WQS",userListSpan:"ApplicationGrooming_userListSpan__NeEgZ",profileIcon:"ApplicationGrooming_profileIcon__GA7e1",userDetails:"ApplicationGrooming_userDetails__8h0Dv",addUserCol:"ApplicationGrooming_addUserCol__SYHLN",formControl:"ApplicationGrooming_formControl__Hfg5o",userData:"ApplicationGrooming_userData__ywX4S",appGroIcon:"ApplicationGrooming_appGroIcon__lyY_s",appGroIconedit:"ApplicationGrooming_appGroIconedit__VkYBI",appGroIconDelete:"ApplicationGrooming_appGroIconDelete__4jQSY",th:"ApplicationGrooming_th__VKxZ8",addressth:"ApplicationGrooming_addressth__gUb_w",td:"ApplicationGrooming_td__3RaLT",loading:"ApplicationGrooming_loading__VfJFM",addresstd:"ApplicationGrooming_addresstd__mwRp6"}},9348:function(e){e.exports={logo:"SideNavbar_logo__iGFC7",sidenav:"SideNavbar_sidenav__G98b8",icona:"SideNavbar_icona__x6_LU",groomingSubmenu:"SideNavbar_groomingSubmenu__RfXb9",navul:"SideNavbar_navul__FNMxF",iconadropdown:"SideNavbar_iconadropdown__iurKl",navli:"SideNavbar_navli__UeD0k",dropdown:"SideNavbar_dropdown__SbJam"}},7716:function(e){e.exports={main:"UpperNavbar_main__yVhsY",head:"UpperNavbar_head__bA7NI",colUser:"UpperNavbar_colUser__sSZOz",profile:"UpperNavbar_profile__uELZP",userListSpan:"UpperNavbar_userListSpan__Gfk__",profileIcon:"UpperNavbar_profileIcon__I3EG8",profileIconNotification:"UpperNavbar_profileIconNotification__hTXJi"}}},function(e){e.O(0,[95,873,848,471,424,774,888,179],function(){return e(e.s=9117)}),_N_E=e.O()}]);