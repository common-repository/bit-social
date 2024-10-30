import{g as M,$ as K,r as P,j as a,a as l,F as Q,h as je,u as E,c as J,L as k,o as oe,k as B,e as x,s as he,b as ue,d as de}from"./main-sixty-windows-relax.js";import{T as g,i as v,S as w,A as pe,F as O,B as b,j as G,g as D,r as q,m as z,n as Me,M as W,s as j,P as Pe,p as _,I as V,u as xe,t as ge}from"./antd-Biwa_WcY.js";import{p as me,P as X,i as Y}from"./PlatformIcon-DQwuZFOE.js";import{c as Z,u as ee,a as H}from"./react-query-DTccfBeP.js";import{u as fe}from"./router-C23xx3cB.js";import"./isPro-Cd6vIDhm.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function Le({searchAccountsTxt:e="",selectedMenuTab:t={}}={}){const{isModalOpen:o}=M(K),c=[];e&&c.push(e),t.type&&c.push(t);const{data:s,isLoading:n,refetch:d,isFetching:i}=Z({queryKey:["accounts",...c],queryFn:async()=>P("accounts",void 0,{search:e,...t},"GET"),refetchInterval:o?2e3:!1});return{accounts:(s==null?void 0:s.data)||[],isLoadingAccounts:n,refetchAccounts:d,isFetchingAccounts:i}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function Ie(){const[e]=fe({}),t=e.get("value")||"",c={type:e.get("type")||"",value:t},s=ee(),{mutateAsync:n,isPending:d,isError:i,isSuccess:h}=H({mutationKey:["save_account"],mutationFn:async u=>P("account/save",{accountData:u},void 0,"POST"),onSuccess:()=>{s.invalidateQueries({queryKey:["active-accounts"]}),s.invalidateQueries({queryKey:["accounts",c]})}});return{saveAccount:n,isSavingAccount:d,isSavingAccountError:i,isSavingAccountSuccess:h}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function ze(){const{mutateAsync:e,isPending:t}=H({mutationFn:async o=>P(o.url,o.data,void 0,"POST")});return{verifyAccount:o=>e(o),isVerifyAccountLoading:t}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ue=e=>{switch(e){case"googleBusinessProfile":return l(Q,{children:["You can only add verified locations.",a("br",{}),"If you need to add another Google account, simply log out of or switch Google accounts first."]});default:return l(Q,{children:["If you need to add another ",e," account, simply log out of or switch ",e," accounts first."]})}};function Ne({platform:e}){return a(g.Text,{style:{fontSize:"14px"},type:"secondary",children:Ue(e)})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Re=({token:e})=>({background:`${e.colorBgLayout} `,padding:"8px 16px"});function se({connectAccountId:e,id:t,icon:o,name:c,accountType:s,isLoading:n,isConnected:d,handleConnect:i}){const h=JSON.parse(s).account_type;return a(D,{size:"small",css:Re,children:l(G,{justify:"space-between",align:"middle",children:[a(v,{children:l(w,{size:"large",children:[a(pe,{size:40,src:o}),l(O,{vertical:!0,children:[a(g.Text,{strong:!0,children:c}),a(g.Text,{type:"secondary",children:h})]})]})}),a(v,{children:d?a(g.Text,{type:"success",children:"Saved"}):a(b,{type:"primary",loading:n&&t===e,disabled:n&&t!==e,onClick:i,children:"Save"})})]})})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function Fe(){var U;const[e,t]=je(K),{isProClient:o}=E(J),{saveAccount:c,isSavingAccount:s}=Ie(),{verifyAccount:n,isVerifyAccountLoading:d}=ze(),[i,h]=q.useState(),u=()=>{t(oe)},C=q.useMemo(()=>Array.isArray(e==null?void 0:e.details)?e.details.map(r=>{const{details:y}=r.account,{account_id:T,account_name:L,icon:S}=JSON.parse(y);return{accountId:T,accountName:L,accountIcon:S,accountDetails:r.account,isConnected:r.isConnected,verifyUrl:r.verifyUrl}}):[],[e==null?void 0:e.details]),p=async(r,y)=>{var L;if(h(r.account_id),y){const f=await n({url:y,data:r});if(f.status==="error")return h(void 0),j.error({message:"Account Save Failed",description:f.data.message})}const T=await c(r);if(h(void 0),T.status==="error")return j.error({message:"Account Save Failed",description:T.data.message});if(T.status==="success"){const S=(L=e==null?void 0:e.details)==null?void 0:L.map(f=>{const I=f.account.account_id;return String(I)===String(T.data.account.account_id)?{...f,isConnected:!0}:f});t(f=>({...f,details:S})),j.success({message:"Account Save Successfully"})}},m=e.platform&&me[e.platform].name;return q.useEffect(()=>{function r(y){y.preventDefault(),t(oe)}return window.addEventListener("beforeunload",r,{capture:!0}),()=>{window.removeEventListener("beforeunload",r,{capture:!0})}},[]),l(W,{title:e.loading?l(w,{children:[a(z.Avatar,{size:"large",active:!0,shape:"circle"}),a(z.Input,{size:"small",active:!0})]}):l(O,{align:"center",gap:"small",children:[a(X,{name:e.platform,size:30}),a(g.Text,{style:{textTransform:"capitalize",fontSize:"18px"},children:m})]}),maskClosable:!1,open:e.isModalOpen,onCancel:u,footer:!1,styles:{body:{maxHeight:"70vh",overflowY:"scroll",padding:"0 8px"}},children:[l(w,{direction:"vertical",className:"w-100 py-2",children:[e.loading&&!e.status?Array.from({length:3}).fill(0).map((r,y)=>a(D,{className:"w-100",size:"small",children:l(w,{className:"w-100",size:"large",children:[a(z.Avatar,{size:"large",active:!0,shape:"circle"}),a(z.Input,{style:{width:"260px"},size:"small",active:!0,block:!0}),a(z.Button,{active:!0})]})},`key-${y+9}`)):(m==="LinkedIn"&&!o?l(O,{gap:10,vertical:!0,children:[a(g.Title,{level:5,children:"Profile"}),C&&C.length&&C.map(r=>a(se,{connectAccountId:i,id:r.accountId,name:r.accountName,accountType:r.accountDetails.details,icon:r.accountIcon,isLoading:s||d,isConnected:r.isConnected,handleConnect:()=>p(r.accountDetails,r.verifyUrl)},r.accountId)),l(g.Title,{level:5,children:["Page ",a(k,{size:20,color:"#ff8609",name:"crown"})]}),a(D,{className:"w-100",size:"small",children:l(w,{className:"w-100",size:"large",children:[a(z.Avatar,{size:"large",shape:"circle"}),a(z.Input,{style:{width:"260px"},size:"small",block:!0}),a(z.Button,{})]})}),a(g.Text,{strong:!0,children:"Linkedin Page feature on pro"})]}):C&&C.length&&C.map(r=>a(se,{connectAccountId:i,id:r.accountId,name:r.accountName,accountType:r.accountDetails.details,icon:r.accountIcon,isLoading:s||d,isConnected:r.isConnected,handleConnect:()=>p(r.accountDetails,r.verifyUrl)},r.accountId)))||"",e.status==="success"&&!((U=e.details)!=null&&U.length)&&a(g.Title,{level:5,children:m==="Pinterest"?"Board Not Found":"Account Not Found"}),e.status==="error"&&l(O,{vertical:!0,children:[a(g.Title,{level:5,children:" Account connect failed"}),a(Me,{description:e.message,type:"error"})]})]}),e.status&&m?a(Ne,{platform:m}):a(g.Title,{level:5,children:"Fetching data, please wait..."})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function $e(){const{data:e,isLoading:t,refetch:o,isFetching:c}=Z({queryKey:["clientIds"],queryFn:async()=>P("platforms-credentials",void 0,void 0,"POST")}),{clientInfo:s}=(e==null?void 0:e.data)||{};return{clientIds:s,isLoadingClientIds:t,refetchClientIds:o,isFetchingClientIds:c}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const{Link:qe}=g;function R({devLink:e,name:t}){return l(Q,{children:["To get app credentials, Visit"," ",l(qe,{style:{whiteSpace:"nowrap"},href:e,target:"_blank",rel:"noopener noreferrer nofollow",strong:!0,children:[me[t].name," Developer",a(k,{name:"move-up-right",size:12,style:{transform:"translateY(-2px)"}})]})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const{Text:Oe}=g,Be=e=>{switch(e){case"facebook":return a(R,{name:e,devLink:"https://developers.facebook.com/apps/"});case"twitter":return a(R,{name:e,devLink:"https://developer.twitter.com/en/portal/dashboard"});case"linkedin":return a(R,{name:e,devLink:"https://www.linkedin.com/developers/apps"});case"discord":return a(R,{name:e,devLink:"https://discord.com/developers/applications/"});case"pinterest":return a(R,{name:e,devLink:"https://developers.pinterest.com/apps/"});case"googleBusinessProfile":return a(R,{name:e,devLink:"https://console.cloud.google.com/"});case"tumblr":return a(R,{name:e,devLink:"https://www.tumblr.com/oauth/apps"});default:return""}};function Ve({platform:e}){return a(Oe,{children:Be(e)})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function Ee(){const e=ee(),{mutateAsync:t,isPending:o}=H({mutationKey:["custom_app"],mutationFn:async c=>P("custom-app",{...c},void 0,"POST"),onSuccess:()=>{e.invalidateQueries({queryKey:["get-customApp"]})}});return{createCustomApp:c=>t(c),isLoadingCreateCustomApp:o}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function De(e){const{data:t,isLoading:o,refetch:c}=Z({queryKey:["get-customApp"],queryFn:async()=>P("custom-app",void 0,{platform:e},"GET"),refetchOnWindowFocus:!1});return{customApps:t==null?void 0:t.data,isLoadingCustomApp:o,refetchCustomApp:c}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function Ke(){const e=ee(),{mutateAsync:t,isPending:o}=H({mutationFn:async c=>P(`custom-app/${c}/destroy`,void 0,void 0,"POST"),onSuccess:()=>{e.invalidateQueries({queryKey:["get-customApp"]})}});return{deleteCustomApp:c=>t(c),isLoadingDeleteCustomApp:o}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ie={twitter:"https://bit-social.com/documentation/accounts/connect-your-twitter-account-with-bit-social/",linkedin:"https://bit-social.com/documentation/accounts/connect-your-linkedin-account-with-bit-social/",tumblr:"https://bit-social.com/documentation/accounts/connect-your-tumblr-account-with-bit-social/",facebook:"https://bit-social.com/documentation/accounts/connect-your-facebook-account-with-bit-social/",discord:"https://bit-social.com/docs/accounts/connect-your-discord-account-with-bit-social/",googleBusinessProfile:"https://bit-social.com/documentation/accounts/connect-your-google-business-profile-account-with-bit-social/",pinterest:"https://bit-social.com/docs/accounts/connect-your-pinterest-account-with-bit-social/"};function Ge(e){if(!e||!ie[e]){console.error("Invalid link key",e);return}const t=new URL(ie[e]);return t.searchParams.append("utm_source",B.PLUGIN_SLUG),t.searchParams.append("utm_medium","inside-plugin"),t.href}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function Ce({platform:e,iconName:t="file-text"}){return a(b,{href:Ge(e),target:"_blank",size:"small",type:"link",rel:"noopener noreferrer nofollow",icon:a(k,{name:t}),style:{whiteSpace:"nowrap"},children:"Doc Link"})}const He="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='512'%20width='512'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20d='M501.301%20131.964c-5.888-22.172-23.237-39.633-45.266-45.56C416.107%2075.636%20256%2075.636%20256%2075.636s-160.107%200-200.035%2010.768c-22.029%205.926-39.378%2023.388-45.266%2045.56C0%20172.152%200%20256%200%20256s0%2083.848%2010.699%20124.036c5.888%2022.172%2023.237%2039.633%2045.266%2045.56C95.893%20436.364%20256%20436.364%20256%20436.364s160.107%200%20200.035-10.768c22.029-5.927%2039.378-23.388%2045.266-45.56C512%20339.848%20512%20256%20512%20256s0-83.848-10.699-124.036z'%20fill='red'/%3e%3cpath%20d='m203.636%20332.128%20133.818-76.126-133.818-76.13z'%20fill='%23fff'/%3e%3c/svg%3e";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const{Link:Qe}=g,ne={twitter:"https://www.youtube.com/watch?v=v2m99Itn-KU",linkedin:"https://www.youtube.com/watch?v=YcmVEq3GGsk",tumblr:"https://www.youtube.com/watch?v=WfxpNBBAjRQ",facebook:"https://www.youtube.com/watch?v=V7-DqQ4dJg4",discord:"https://www.youtube.com/watch?v=q85NrjFQ33Y",googleBusinessProfile:"https://www.youtube.com/watch?v=o3Hf2v4HsVs",pinterest:"https://www.youtube.com/watch?v=6deQqqhMYLY"};function ye({platform:e}){if(!(!e||!ne[e]))return a(Qe,{style:{whiteSpace:"nowrap"},href:ne[e],target:"_blank",rel:"noopener noreferrer nofollow",strong:!0,children:a(b,{size:"small",type:"text",icon:a(pe,{src:He,size:20,alt:"youtube"}),children:"Tutorial"})})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ae=(e,t,o,c,s,n,d)=>{const[i,h]=[700,700],u=Math.round((window.innerWidth-i)/2),C=Math.round((window.innerHeight-h)/2),p=window.open(e,t,`width=${i},height=${h},left=${u},top=${C},toolbar=off`),m=setInterval(()=>{localStorage.setItem("__bitSocial_platform_interval",String(m)),!(!(p!=null&&p.closed)||p!=null&&p.closed&&!localStorage.getItem("__bitSocial_platform"))&&(clearInterval(m),o==null||o(),d(c,s,n))},500)};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ye=`${B.CLIENT_SECRET_URL}`,{baseAuthStateURL:Je}=M(x),We=async e=>{const t={platform:"facebook",client_id:e.appId},o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch(Ye,o).then(c=>c.json())},Xe=async(e,t,o)=>{const c={...e};if(o==="oneClickAuth"){const i=await We(c);c.appSecret=i.clientSecret}const s={config:{platform:c.platform,authType:"OAuth2"},payload:{grant_type:"no need",client_id:c.appId,client_secret:c.appSecret,redirect_uri:c.redirectUri,code:t.code}},{status:n,data:d}=await P("authorize",s,void 0,"POST");n==="success"&&he(K,{isModalOpen:!0,platform:"facebook",details:d,loading:!1,status:n})},Ze=async(e,t,o)=>{let c={};const s=localStorage.getItem("__bitSocial_platform");s&&(c=JSON.parse(s),localStorage.removeItem("__bitSocial_platform")),(!c||!c.code||c.error)&&j.error({message:"Authorization failed",description:`${c.error?`Cause: ${c.error}.`:""} Please try again`});const n=await Xe(e,c,o);return t(),n},et=(e,t,o,c)=>{if(!e.platform||!e.appId||!e.redirectUri)throw new Error("Missing credentials");const{platform:s,appId:n,redirectUri:d}=e,i=c==="oneClickAuth"?B.REDIRECT_URL:d,h="pages_show_list,pages_read_engagement,pages_manage_metadata,pages_manage_posts,business_management",u=new URL("https://www.facebook.com/dialog/oauth");u.searchParams.append("scope",h),u.searchParams.append("client_id",n),u.searchParams.append("redirect_uri",i),u.searchParams.append("state",Je+"#/accounts/auth/response"),Ae(u,s,o,e,t,c,Ze)};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const tt=`${B.CLIENT_SECRET_URL}`,we=`${B.REDIRECT_URL}`,{baseAuthStateURL:at}=M(x),ct=async(e,t)=>{const o={config:{platform:e.platform,authType:"OAuth2"},payload:{grant_type:"null",client_id:e.appId,client_secret:e.appSecret,redirect_uri:e.redirectUri,code:t.code}},{status:c,data:s}=await P("authorize",o,void 0,"POST");c==="success"&&he(K,{...{isModalOpen:!0,platform:"linkedin",loading:!1,status:c},details:s})},ot=async e=>{const t={platform:e.platform,client_id:e.appId},o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch(tt,o).then(c=>c.json())},st=async(e,t,o)=>{let c={};const s=localStorage.getItem("__bitSocial_platform"),n={...e};if(s&&(c=JSON.parse(s),localStorage.removeItem("__bitSocial_platform")),!c.code){j.error({message:"Authorization failed",description:`${c.error?`Cause: ${c.error}.`:""} Please try again`});return}if(o==="oneClickAuth"){const i=await ot(e);(!i||!i.clientSecret)&&j.error({message:"Authorization failed",description:`Cause: ${i.message}. Please try again`}),n.appSecret=i.clientSecret.toString(),n.redirectUri=we}const d=await ct(n,c);return t(),d},it=(e,t,o,c)=>{if(!e.platform||!e.appId||!e.redirectUri)throw new Error("Missing credentials");const{appId:s,platform:n,redirectUri:d}=e,i=c==="oneClickAuth"?we:d,h="openid profile email w_member_social r_organization_admin w_organization_social rw_organization_admin",u=new URL("https://www.linkedin.com/oauth/v2/authorization");u.searchParams.append("scope",h),u.searchParams.append("client_id",s),u.searchParams.append("response_type","code"),u.searchParams.append("redirect_uri",i),u.searchParams.append("state",at+"#/accounts/auth/response"),Ae(u,n,o,e,t,c,st)};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function nt(e){switch(e){case"facebook":return et;case"linkedin":return it}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};M(x);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};M(x);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};M(x);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};M(x);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};M(x);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};M(x);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function be({platform:e,setCustomModalOpen:t,isConnectLoading:o,clientId:c,platformCredentialData:s,handleAuthCallback:n,closeConnectModal:d,authType:i="oneClickAuth"}){const h=ue(de),u=nt;return a(b,{block:!0,loading:o,disabled:!c,type:"primary",onClick:()=>{const p=u(e,s.apiVersion);if(Y(e)){h(!0);return}t&&t(!1),p&&p(s,n,d,i)},children:"Connect"})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const{Text:rt}=g;var lt={name:"3s4yqf",styles:"width:400px"};function ht({name:e,platform:t,setCustomModalOpen:o,handleAuthCallback:c,closeConnectModal:s,credential:n,handleDelete:d,isDeleteLoading:i}){const h={platform:t,appId:n.appKey,appSecret:n.appSecret,redirectUri:n.redirectUri,apiVersion:n.apiVersion};return a(D,{size:"small",css:lt,children:l(G,{align:"middle",justify:"space-between",children:[a(rt,{className:"text-capitalize",style:{width:"200px"},ellipsis:!0,strong:!0,children:e}),l(w,{children:[a(be,{setCustomModalOpen:o,platform:t,clientId:n.appKey,platformCredentialData:h,handleAuthCallback:c,closeConnectModal:s,authType:"customAuth"}),a(Pe,{title:"Delete the app",description:"Are you sure to delete this app?",onConfirm:d,okText:"Yes, Delete",cancelText:"No",placement:"bottomRight",okButtonProps:{loading:i,danger:!0},children:a(b,{danger:!0,type:"text",icon:a(k,{name:"trash-2"})})})]})]})})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const{Text:F,Title:re}=g,le=(e,t)=>({appName:["twitter","tumblr"],apiVersion:["twitter"]})[t].includes(e);var ut={name:"11vupei",styles:"border-right:1px solid #B9B9B9"};function dt({platform:e,open:t,onOk:o,setCustomModalOpen:c,setAccountModal:s,handleAuthCallback:n,closeConnectModal:d}){var te,ae,ce;const{apiURL:i,siteUrl:h}=E(x),u=`${i.base}/redirect`,C=h,[p]=_.useForm(),[m,U]=q.useState({}),{createCustomApp:r,isLoadingCreateCustomApp:y}=Ee(),{deleteCustomApp:T,isLoadingDeleteCustomApp:L}=Ke(),{customApps:S}=De(e),f=q.useRef(null),I=A=>{try{navigator.clipboard.writeText(A),j.success({message:"Copied!"})}catch{f.current!=null&&(f.current.select(),document.execCommand("copy"),f.current.blur())}},ve=A=>{p.setFieldsValue({apiVersion:A})},Te=[{label:"v1.1 (media supported)",value:"1.1"},{label:"v2.0 (media unsupported)",value:"2"}],Se=async A=>{const _e={...A,platform:e},N=await r(_e);(N==null?void 0:N.code)==="SUCCESS"?(p.resetFields(),j.success({message:"App successfully added!",description:N.data.message})):(N.data.errorField&&U(N.data.errorField),j.error({message:"App add failed",description:N.data.message}))},ke=A=>{T(A)};return a(W,{width:900,title:a("div",{children:l(O,{align:"center",gap:10,children:[a(b,{title:"Back",type:"text",onClick:()=>{o(),s(!0)},icon:a(k,{size:24,name:"arrow-left"})}),a(X,{name:e,size:34}),l(re,{style:{marginBottom:0},level:5,className:"text-capitalize",children:["Connect Custom ",e," App"]}),a(Ce,{platform:e}),a(ye,{platform:e})]})}),open:t,onOk:o,onCancel:()=>c(!1),footer:!1,centered:!0,children:l(G,{className:"mt-4",justify:"center",gutter:[48,0],children:[a(v,{css:ut,span:12,children:l(_,{form:p,onFinish:Se,initialValues:{redirectUri:u},layout:"vertical",children:[a(_.Item,{label:a(F,{strong:!0,children:"Homepage URI"}),name:"homepageUri",rules:[{message:"Please enter homepage url"}],children:l(w.Compact,{className:"w-100",children:[a(V,{ref:f,style:{width:"calc(100% - 32px)"},defaultValue:`${C}`}),a(b,{title:"Click to copy",onClick:()=>I(C),icon:a(k,{name:"copy",size:12})})]})}),a(_.Item,{label:a(F,{strong:!0,children:"Redirect URI"}),name:"redirectUri",rules:[{required:!0,message:"Please enter redirect url"}],children:l(w.Compact,{className:"w-100",children:[a(V,{ref:f,style:{width:"calc(100% - 32px)"},defaultValue:`${u}`}),a(b,{title:"Click to copy",onClick:()=>I(u),icon:a(k,{name:"copy",size:12})})]})}),le(e,"apiVersion")?a(_.Item,{label:a(F,{strong:!0,children:"Api Version"}),name:"apiVersion",rules:[{required:!0,message:"Please select an API version"}],children:a(xe,{onChange:ve,options:Te})}):"",le(e,"appName")?l(_.Item,{label:a(F,{strong:!0,children:"App Name"}),name:"appName",rules:[{required:!0,message:"Please enter your app name"}],children:[a(V,{}),m.appName&&a(g.Text,{type:"danger",children:(te=m.appName)==null?void 0:te[0]})]}):"",a(w,{className:"pb-2",children:a(Ve,{platform:e})}),l(_.Item,{name:"appKey",label:a(F,{strong:!0,children:"App Key or Client ID"}),rules:[{required:!0,message:"Please enter your app key"}],children:[a(V,{}),m.appKey&&a(g.Text,{type:"danger",children:(ae=m.appKey)==null?void 0:ae[0]})]}),l(_.Item,{label:a(F,{strong:!0,children:"App Secret or Client Secret"}),name:"appSecret",rules:[{required:!0,message:"Please enter your app secret"}],children:[a(V,{}),m.appSecret&&a(g.Text,{type:"danger",children:(ce=m.appSecret)==null?void 0:ce[0]})]}),a(_.Item,{children:a(b,{size:"large",type:"primary",loading:y,onClick:()=>{p.submit()},className:"w-100 pt-2",children:"Add"})})]},e)}),l(v,{span:12,children:[a(re,{level:5,children:"Connected Apps"}),a(w,{direction:"vertical",children:S&&S.length?S.map(A=>a(ht,{platform:e,name:A.name,appId:A.id,setCustomModalOpen:c,credential:A.credential,handleAuthCallback:n,closeConnectModal:d,handleDelete:()=>ke(A.id),isDeleteLoading:L},A.id)):a(F,{children:"No App Found"})})]})]})},e)}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const pt=`${B.REDIRECT_URL}`,{Title:gt}=g;function $({platform:e,name:t,isConnectLoading:o,clientId:c,closeConnectModal:s,status:n,setAccountModal:d}){const{refetchAccounts:i}=Le(),[h,u]=fe({}),C=h.get("value")||"all",[p,m]=q.useState(!1),{token:U}=ge.useToken(),r=ue(de),{isProClient:y}=E(J),T={platform:e,appId:c,appSecret:"",redirectUri:pt},L=()=>{m(!1)},S=()=>{if(Y(e)&&!y){r(!0);return}s(),m(!0)},f=()=>{u(I=>(I.set("type","platform"),I.set("value",String(C)),I)),i()};return a(D,{style:{borderColor:U.colorBorder,height:"100%"},children:l(O,{gap:14,vertical:!0,children:[l(w,{align:"center",children:[a(X,{size:35,name:e,style:{flexShrink:0}}),a(gt,{level:5,style:{marginBottom:0},className:"text-capitalize",children:t||e}),Y(e)&&!y&&a(k,{color:"#ff8609",size:20,name:"crown"})]}),l(w,{children:[a(Ce,{platform:e}),a(ye,{platform:e})]}),l(w,{size:"small",direction:"vertical",children:[a(b,{style:{borderColor:U.colorPrimary},block:!0,onClick:S,children:"Custom App"}),n===0?void 0:a(be,{platform:e,isConnectLoading:o,clientId:c,platformCredentialData:T,handleAuthCallback:f,closeConnectModal:s}),p&&e?a(dt,{platform:e,open:p,onOk:L,setCustomModalOpen:m,handleAuthCallback:f,closeConnectModal:s,setAccountModal:d}):void 0]})]})})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function vt({btnType:e="default"}){const{clientIds:t,isLoadingClientIds:o}=$e(),{token:c}=ge.useToken(),{isDarkTheme:s}=E(J),{isModalOpen:n}=E(K),[d,i]=q.useState(!1),h=()=>{const C=localStorage.getItem("__bitSocial_platform_interval");C&&(clearInterval(Number(C)),localStorage.removeItem("__bitSocial_platform_interval")),i(!1)},u=()=>{i(!0)};return l("div",{children:[e==="default"?a(b,{onClick:u,type:"primary",size:"small",icon:a(k,{name:"plus",size:18}),children:"Connect Account"}):a(b,{type:"text","aria-label":"Connect Account",onClick:u,icon:a(k,{name:"plus",size:30}),style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:"110px",fontSize:"17px",border:`2px solid ${c.colorPrimary}`,color:s?c.colorTextBase:c.colorPrimary,fontWeight:600},children:"Connect Account"}),a(W,{width:1e3,title:"Connect Account",open:d,onCancel:h,footer:!1,style:{padding:"20px"},centered:!0,children:l(G,{gutter:[12,12],className:"p-2",children:[a(v,{xs:24,sm:12,md:8,children:a($,{platform:"linkedin",closeConnectModal:h,isConnectLoading:o,clientId:t==null?void 0:t.linkedin.id,status:t==null?void 0:t.linkedin.status,setAccountModal:i})}),a(v,{xs:24,sm:12,md:8,children:a($,{platform:"facebook",closeConnectModal:h,isConnectLoading:o,clientId:t==null?void 0:t.facebook.id,status:t==null?void 0:t.facebook.status,setAccountModal:i})}),a(v,{xs:24,sm:12,md:8,children:a($,{platform:"googleBusinessProfile",name:"Google Business",isConnectLoading:o,clientId:t==null?void 0:t.googleBusinessProfile.id,status:t==null?void 0:t.googleBusinessProfile.status,closeConnectModal:h,setAccountModal:i})}),a(v,{xs:24,sm:12,md:8,children:a($,{platform:"pinterest",isConnectLoading:o,clientId:t==null?void 0:t.pinterest.id,status:t==null?void 0:t.pinterest.status,closeConnectModal:h,setAccountModal:i})}),a(v,{xs:24,sm:12,md:8,children:a($,{platform:"discord",isConnectLoading:o,clientId:t==null?void 0:t.discord.id,status:t==null?void 0:t.discord.status,closeConnectModal:h,setAccountModal:i})}),a(v,{xs:24,sm:12,md:8,children:a($,{platform:"tumblr",isConnectLoading:o,clientId:t==null?void 0:t.tumblr.id,status:t==null?void 0:t.tumblr.status,closeConnectModal:h,setAccountModal:i})}),a(v,{xs:24,sm:12,md:8,children:a($,{platform:"twitter",name:"X (Twitter)",closeConnectModal:h,status:0,setAccountModal:i})})]})}),n&&a(Fe,{})]})}export{vt as C,Le as u};