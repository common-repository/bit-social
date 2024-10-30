import{r as j,j as a,a as r,L as b,u as L,b as N,F as f,c as M,d as $}from"./main-sixty-windows-relax.js";import{P as C,p as P,i as w}from"./PlatformIcon-DQwuZFOE.js";import{u as E}from"./useDebounce-CUMPPC0U.js";import{u as B,C as F}from"./ConnectAccount-C_KvEdD2.js";import{t as x,A as q,f as O,F as D,S as I,T as y,g as K,h as Q,P as S,B as G,i as A,j as V,k as Y,l as R,r as U,I as H,m as J,n as W}from"./antd-Biwa_WcY.js";import{u as v,b as X}from"./router-C23xx3cB.js";import{u as _,a as z}from"./react-query-DTccfBeP.js";import"./css-in-js-CSGOT-6T.js";import"./isPro-Cd6vIDhm.js";const Z="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2027.7.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20199%20155'%20style='enable-background:new%200%200%20199%20155;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23565B84;}%20%3c/style%3e%3cpath%20class='st0'%20d='M33.2,30.4C45.9,43.4,48.8,64,64.8,74c7.9,5,18.2,2.6,26.9,4c9.6,1.5,16.9,6.9,24.1,13.1%20c14.4,12.5,21.3,31.6,35.8,44c10.2,8.7,22.2,0.5,31.4-5.4c1.9-1.2,6.7-3.3,7.1,0.7c0.4,3.5-6.5,6.5-8.9,8c-11,7.1-22.9,9.4-33.7,0.7%20c-17.4-14.1-24.7-38-43.9-50.3C88.8,79.4,70.2,87.2,56.3,75C43.5,63.8,41,44.2,27.9,33.8c-1.9,2.6-6.1,10-9.5,10.2%20c-3.5,0.2-4.7-5.1-5.2-7.6c-1.4-5.9-4.8-22.2,1.3-26.7c5.5-4.1,20.5,2,25.7,4.9c2.3,1.3,6.3,3.4,6,6.6%20C45.7,25.9,36.8,28.4,33.2,30.4z'/%3e%3c/svg%3e";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function ee(){const e=_(),{mutateAsync:t,isPending:s}=z({mutationFn:async c=>j(`account/${c}/destroy`,void 0,void 0,"POST"),onSuccess:()=>{e.invalidateQueries({queryKey:["accounts"]})}});return{deleteAccount:t,deleteAccountLoading:s}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function te(){const e=_(),{mutateAsync:t,isPending:s}=z({mutationFn:async c=>j(`account/${c.id}/update-status`,{status:c.status},void 0,"POST"),onSuccess:()=>{e.invalidateQueries({queryKey:["accounts"]})}});return{updateAccountStatus:c=>t(c),updateAccountStatusLoading:s}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function ae({avatarLink:e,platform:t,size:s=18}){const{token:c}=x.useToken();return a(O,{size:"small",offset:[-2,28],count:a(C,{style:{border:"2px solid",borderColor:c.colorBorder},name:t,size:s}),children:a(q,{src:e})})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function ce({id:e,name:t,platform:s,accountType:c,image:l,status:n}){const{deleteAccount:u,deleteAccountLoading:o}=ee(),{updateAccountStatus:d,updateAccountStatusLoading:m}=te(),{token:g}=x.useToken(),h=1,i=0;return r(K,{size:"small",style:{borderColor:g.colorBorder},children:[r(D,{justify:"space-between",className:"w-100",children:[a(ae,{avatarLink:l,platform:s}),r(I,{children:[a(S,{placement:"top",title:`Do you want to ${n===h?"disable":"enable"} the account?`,description:n?"It will no longer be able to automatic posting, scheduling, and sharing":"Enable Automatic Posting, Scheduling, and Sharing",onConfirm:()=>d({id:e,status:n===h?i:h}),okButtonProps:{loading:m,danger:!!n},okText:n?"Disable":"Enable",children:a(Q,{size:"small",checked:!!n})}),a(S,{placement:"top",title:"Are you sure?",description:"This account also be deleted from related schedule!",onConfirm:()=>u(e),okText:"Yes, delete",okButtonProps:{loading:o,danger:!0},children:a(G,{type:"text",danger:!0,icon:a(b,{name:"trash-2"})})})]})]}),a(y.Paragraph,{style:{marginBottom:"0px",marginTop:"8px"},ellipsis:!0,children:t}),c&&a(y.Text,{type:"secondary",ellipsis:!0,children:c})]})}const oe="_accountLoaderSection_1360f_1 grid",se="_accountLoader_1360f_1",k={accountLoaderSection:oe,accountLoader:se};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function ne({accountQuantity:e}){const t=Array.from({length:e}).fill(0);return a("div",{className:k.accountLoaderSection,children:t.map((s,c)=>a("div",{className:`${k.accountLoader} loader`},`loader-${c*2}`))})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function re({searchAccountsTxt:e}){const[t]=v({}),s=t.get("value")||"",l={type:t.get("type")||"",value:s},{accounts:n,isLoadingAccounts:u}=B({searchAccountsTxt:e,selectedMenuTab:l});return u?a(ne,{accountQuantity:4}):r(V,{gutter:[16,16],children:[a(A,{xs:24,sm:12,md:8,xl:6,children:a(F,{btnType:"custom"})}),n.map(o=>a(A,{xs:24,sm:12,md:8,xl:6,children:a(ce,{id:o.id,name:o.details.account_name,platform:o.platform,accountType:o.details.account_type,image:o.details.icon,status:o.status},o.id)},o.id))]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function ie(e){return Object.keys(e)}function le({setSearchAccounts:e}){const{isDarkTheme:t,isProClient:s}=L(M),{token:c}=x.useToken(),[l,n]=v({}),u=N($),o=l.get("value")||"all",d=[{key:"all",label:r(f,{children:[a(C,{size:30}),a(y.Text,{className:"pl-2",children:"All"})]})}],m=ie(P).map(i=>({key:i,label:r(f,{children:[a(C,{name:i,size:30})," ",a(y.Text,{className:"px-2",children:P[i].name}),w(i)&&!s?a(b,{color:"#ff8609",size:18,name:"crown"}):void 0]})})),g=[...d,...m];return r(f,{children:[a(R,{level:4,children:"Platforms"}),a(Y,{mode:"inline",items:g,onClick:({key:i})=>{if(w(i)&&!s){u(!0);return}n(p=>(p.set("type","platform"),p.set("value",i),p)),e("")},selectedKeys:[o],className:"rounded-md pt-1",style:{border:"none",backgroundColor:c.colorBgContainer,marginTop:"20px",paddingInline:"6px"},theme:t?"dark":"light"})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function Ae(){const{isProClient:e}=L(M),[t,s]=v({}),c=X(),l=t.get("value")||"",n=t.get("type")||"";l!==""&&w(l)&&!e&&c("/accounts");const u={type:n,value:l},[o,d]=U.useState(""),m=E(o,400),{isLoadingAccounts:g,accounts:h}=B({searchAccountsTxt:m,selectedMenuTab:u});return a("div",{children:r(V,{gutter:20,children:[a(A,{span:6,children:a(le,{setSearchAccounts:d})}),r(A,{span:18,children:[a(I,{style:{marginBottom:10},children:a(H,{placeholder:"Search accounts",onChange:p=>{d(p.target.value),s(T=>(T.delete("type"),T.delete("value"),T))},value:o,prefix:a(b,{name:"search"}),allowClear:!0})}),g?a(J,{active:!0}):a(re,{searchAccountsTxt:m}),!g&&!o&&!(h!=null&&h.length)?r(f,{children:[a("img",{src:Z,width:150,style:{marginLeft:"24%"},alt:"Arrow"}),a(W,{style:{fontSize:"1.3rem",width:800,marginLeft:"10%",marginTop:-25,border:"4px solid #565b84"},description:r(f,{children:["To connect your social media accounts, click ",a("b",{children:'"Connect Account"'}),". There are two methods available:",a("br",{}),a("b",{children:"Connect:"})," It will automatically connect your social account without any credentials. ",a("br",{}),a("b",{children:"Custom App:"})," It will show you a form to input app credentials to create your own app and connect your social account.",a("br",{}),a("br",{}),r("a",{target:"_blank",href:"https://bit-social.com/docs/accounts/",rel:"nofollow noopener noreferrer",children:["You can find more about it here",a(b,{name:"move-up-right",style:{transform:"translateY(-2px)"}})]})]})})]}):void 0]})]})})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};export{Ae as default};