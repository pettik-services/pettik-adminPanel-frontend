(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{4653:function(s,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return a(8362)}])},5508:function(s,e){"use strict";e.Z={src:"/_next/static/media/logo.80aa48b9.png",height:6e3,width:6e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqElEQVR42mOAgZ2ZxoyLE62YGAiBLw8tmJfNlGVkgIENCdpgXVMD5RZ0u2s3wMTX9SuBxRnOFGmCGZN8pK7uKZXZ//SBaVRSiYMKAwMDw5wGfWaGuWUMYOO2x4lsvNDE8P/wLNH/t9bzzJ0bKKrMAAPb7RjY9+Y4GSzpbA9YVNgYsb3JzuHYJAZxBkLg/HxthGO3+DIw5TEwMOUzMDBvKmVgPjPHACwJAAjkMNg7kT8/AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},2415:function(s,e,a){"use strict";var i=a(5893),o=a(9348),n=a.n(o);a(5675),a(5508);var r=a(1664),l=a.n(r),t=a(1163);a(2585),a(2211);let c=()=>((0,t.useRouter)(),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:n().sidenav,children:[(0,i.jsxs)("p",{className:n().logo,children:[(0,i.jsx)("span",{children:"Pettik"}),"-Admin"]}),(0,i.jsxs)(l(),{href:"/user",className:n().icona,children:[(0,i.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0User List"]}),(0,i.jsxs)(l(),{href:"/orders",className:n().icona,children:[(0,i.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0Order List"]}),(0,i.jsx)("div",{className:n().iconadropdown,children:(0,i.jsx)("ul",{className:n().navul,children:(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0Groomings\xa0\xa0",(0,i.jsx)("i",{className:"fa fa-caret-down","aria-hidden":"true"}),(0,i.jsxs)("ul",{className:n().dropdown,children:[(0,i.jsx)("li",{children:(0,i.jsx)(l(),{href:"/grooming-services",className:n().navli,children:"Grooming Services"})}),(0,i.jsx)("li",{children:(0,i.jsx)(l(),{href:"/application-grooming",className:n().navli,children:"Grooming Plans"})})]})]})})}),(0,i.jsxs)(l(),{href:"/partner",className:n().icona,children:[(0,i.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0Partner"]}),(0,i.jsxs)(l(),{href:"/blogs",className:n().icona,children:[(0,i.jsx)("i",{className:"fa fa-users icons"}),"\xa0\xa0Blogs"]})]})}));e.Z=c},2882:function(s,e,a){"use strict";var i=a(5893),o=a(7294),n=a(7716),r=a.n(n),l=a(3471),t=a(594),c=a(1163);let d=s=>{let{Navbarheading:e}=s,a=(0,c.useRouter)(),[n,d]=(0,o.useState)("");setInterval(function(){_()},6e5);let _=async()=>{try{let s=await t.Z.get("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/notificationView");console.log("notification response",s.data),d(s.data.notificationCount)}catch(e){console.log("notification error",e)}},h=async()=>{try{let s=await t.Z.get("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/updateAdminView");console.log("updateAdminview notification",s.data),a.push("/orders")}catch(e){console.log("notificationupdate Error",e)}};return(0,o.useEffect)(()=>{_()},[]),(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:r().main,children:(0,i.jsxs)("div",{className:r().head,children:[(0,i.jsx)("div",{className:r().colUser,children:(0,i.jsx)("span",{className:r().userListSpan,children:e})}),(0,i.jsx)("div",{className:r().colUser,children:(0,i.jsxs)("div",{className:r().profile,children:[(0,i.jsx)(l.Z,{badgeContent:n,color:"error",className:r().profileIconNotification,onClick:h,children:(0,i.jsx)("span",{className:r().profileIcon,children:(0,i.jsx)("i",{className:"fa fa-user-circle fa-2x"})})}),(0,i.jsx)("p",{children:"Prasanjit Prusty"})]})})]})})})};e.Z=d},8362:function(s,e,a){"use strict";a.r(e),a.d(e,{default:function(){return S}});var i=a(5893),o=a(7294),n=a(9074),r=a.n(n),l=a(2415),t=a(2088),c=a(5675),d=a.n(c),_=a(594);a(2585);var h=a(682),g=a(4051),u=a(1555),x=a(5147),p=a(3380),m=a.n(p),f=a(9517),N=a(1664),j=a.n(N),b=a(9603),v=a(5742),A=a(1163),L=a(2882);let w=()=>{let s=(0,A.useRouter)(),{enqueueSnackbar:e}=(0,t.Ds)(),[a,n]=(0,o.useState)([]),[c,p]=(0,o.useState)(!1),[N,w]=(0,o.useState)("#ffffff"),B=async()=>{try{p(!0);let s=await _.Z.get("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/blog/List");console.log("response data",s.data.blogList),n(s.data.blogList),p(!1)}catch(e){console.log(e)}};(0,o.useEffect)(()=>{B()},[]);let S=e=>{localStorage.setItem("blogdetails",JSON.stringify(e)),s.push("/blog_details")},I=async s=>{if(confirm("Are you sure to delete this Blog ?"))try{await _.Z.post("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/blog/delete",{blogID:s}),n(a.filter(e=>e.blogID!==s)),e("Deleted Successfully",{variant:"success"})}catch(i){console.log("error message",i.message),i.response&&400===i.response.status?e(i.response.data.message,{variant:"error"}):e("Somthing went wrong",{variant:"error"})}};return(0,i.jsxs)("div",{className:r().blogContainer,children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)(L.Z,{Navbarheading:"Blog List"}),(0,i.jsx)("div",{className:r().userDetails,children:(0,i.jsx)(h.Z,{fluid:!0,children:(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(u.Z,{}),(0,i.jsx)(u.Z,{className:r().addUserCol,children:(0,i.jsx)(j(),{href:"/addblog",children:(0,i.jsx)("button",{className:"btn btn-outline-primary btn-md",children:"Add Blog"})})})]})})}),(0,i.jsx)("div",{className:r().userData,children:(0,i.jsxs)(x.Z,{striped:!0,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:r().th,children:"Blog ID"}),(0,i.jsx)("th",{className:r().th,children:"Blog Views"}),(0,i.jsx)("th",{className:r().th,children:"Blog Image"}),(0,i.jsx)("th",{className:r().th,children:"Blog Heading"}),(0,i.jsx)("th",{className:r().th,children:"Blog Data"}),(0,i.jsx)("th",{className:r().th,children:"Action"})]})}),(0,i.jsx)("tbody",{children:a.map((s,e)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:r().td,children:s.blogID}),(0,i.jsx)("td",{className:r().td,children:s.blogViews}),(0,i.jsx)("td",{className:r().td,children:(0,i.jsx)(d(),{src:s.blogImage,alt:"image",width:100,height:80})}),(0,i.jsx)("td",{className:r().tdWord,children:(0,i.jsx)("span",{children:s.blog_heading})}),(0,i.jsx)("td",{className:r().tdWord,children:(0,i.jsx)("span",{children:s.blog_data})}),(0,i.jsx)("td",{className:r().td,children:(0,i.jsxs)("span",{className:r().appGroIcon,children:[(0,i.jsx)(b.G,{icon:v.$aW,className:r().appGroIconDelete,onClick:()=>{I(s.blogID)}}),(0,i.jsx)(b.G,{icon:v.Xcf,className:r().appGroIconedit,onClick:()=>S(s)})]})})]},e))})]})}),c&&(0,i.jsxs)(f.Z,{className:r().loading,children:[(0,i.jsx)(m(),{color:N,loading:c,size:100,"aria-label":"Loading Spinner","data-testid":"loader"}),(0,i.jsx)("h4",{children:"Loading Blog List..."})]})]})},B=()=>(0,i.jsx)("div",{children:(0,i.jsx)(w,{})});var S=B},9074:function(s){s.exports={blogContainer:"BlogList_blogContainer__LJ8uM",main:"BlogList_main__JqNNd",head:"BlogList_head__6TwGQ",colUser:"BlogList_colUser__yPsLc",profile:"BlogList_profile__EzQud",userListSpan:"BlogList_userListSpan__t6RO_",profileIcon:"BlogList_profileIcon__W28FR",userDetails:"BlogList_userDetails__SA_hJ",addUserCol:"BlogList_addUserCol__Okj4z",formControl:"BlogList_formControl__BsL_U",userData:"BlogList_userData__5gedM",th:"BlogList_th__rZDrC",addressth:"BlogList_addressth__Sqp4x",td:"BlogList_td__l1uXe",loading:"BlogList_loading__kQrhk",tdWord:"BlogList_tdWord__pjAuW",appGroIcon:"BlogList_appGroIcon__WYckB",appGroIconedit:"BlogList_appGroIconedit__PsOFU",appGroIconDelete:"BlogList_appGroIconDelete__4fPPY"}},9348:function(s){s.exports={logo:"SideNavbar_logo__iGFC7",sidenav:"SideNavbar_sidenav__G98b8",icona:"SideNavbar_icona__x6_LU",groomingSubmenu:"SideNavbar_groomingSubmenu__RfXb9",navul:"SideNavbar_navul__FNMxF",iconadropdown:"SideNavbar_iconadropdown__iurKl",navli:"SideNavbar_navli__UeD0k",dropdown:"SideNavbar_dropdown__SbJam"}},7716:function(s){s.exports={main:"UpperNavbar_main__yVhsY",head:"UpperNavbar_head__bA7NI",colUser:"UpperNavbar_colUser__sSZOz",profile:"UpperNavbar_profile__uELZP",userListSpan:"UpperNavbar_userListSpan__Gfk__",profileIcon:"UpperNavbar_profileIcon__I3EG8",profileIconNotification:"UpperNavbar_profileIconNotification__hTXJi"}}},function(s){s.O(0,[95,873,848,471,424,774,888,179],function(){return s(s.s=4653)}),_N_E=s.O()}]);