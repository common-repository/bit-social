import{f as H,p as y,b as N,r as $,a,j as e,L as b,F as A,h as Q,u as V,c as J,d as X}from"./main-sixty-windows-relax.js";import{u as Z,a as ee}from"./useMemoDebounce-C5qvmGln.js";import{u as te}from"./usePostTypes-DclIDgT5.js";import{u as se,C as L}from"./ConnectAccount-C_KvEdD2.js";import{u as oe,A as ae,b as ne}from"./AccountTree-BRMqFSA0.js";import{c as ie,a as ce}from"./react-query-DTccfBeP.js";import{L as le}from"./router-C23xx3cB.js";import{t as B,g as c,B as re,S as p,m as u,F as h,T as j,v as ue,i as w,h as E,u as P,I as he,j as pe,s as de}from"./antd-Biwa_WcY.js";import"./css-in-js-CSGOT-6T.js";import"./PlatformIcon-DQwuZFOE.js";import"./isPro-Cd6vIDhm.js";function ge(s){const t=H(s,(n,l,d)=>l(t,y(n(t),typeof d=="function"?d:()=>d)));return t}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const me={isEnabled:!1,keepLogs:!0,taxonomies:["categories","tags"],accounts:{accountIds:[],tagIds:[]},postType:["post"],postDelay:{every:0,unit:""}},D=globalThis.jotaiAtomCache.get("/home/runner/work/bit-social/bit-social/frontend/src/common/globalStates/$autoPostSettings.ts/$autoPostSettings",ge(me));D.debugLabel="$autoPostSettings";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};function ye(){const s=N(D),{data:t,isLoading:n}=ie({queryKey:["autoPostSettings"],queryFn:async()=>{const{data:l}=await $("autoPostSettings",void 0,void 0,"GET");return l?(s(l),l):[]}});return{autoPostSettings:t,isLoadingAutoPostSettings:n}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};function fe(){const{mutateAsync:s,isPending:t,isSuccess:n}=ce({mutationKey:["autoPostSettingsUpdate"],mutationFn:async l=>$("autoPostSettings/update",{autoPostSettings:l},void 0,"POST")});return{updateAutoPostSettings:s,isUpdatingAutoPostSettings:t,isSettingsUpdateSuccessfully:n}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const{Title:be}=j;function Ae(){const{token:s}=B.useToken();return a(A,{children:[e(be,{level:5,children:"Post templates"}),a(c,{style:{borderColor:s.colorBorder},styles:{body:{height:"380px",width:"80%"}},actions:[e(le,{to:"/templates",children:e(re,{type:"primary",children:a(p,{size:2,align:"center",children:[e("div",{children:"Templates"}),e(b,{name:"move-up-right"})]})})},"template")],children:[a(p,{className:"py-2",children:[e(u.Avatar,{size:"large"}),e(u.Input,{size:"small"})]}),e(u,{}),e(u.Image,{}),a(h,{justify:"space-around",gap:10,className:"py-3",children:[e(u.Button,{size:"small"}),e(u.Button,{size:"small"}),e(u.Button,{size:"small"})]})]})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const Te="0";function z(s){const{every:t,unit:n}=s;return t===0&&n===""?"immediately":"delay"}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const{Text:C,Title:Se,Paragraph:ve,Link:we}=j;var Pe={name:"p4355k",styles:"min-width:180px"},Ce={name:"m0jwvv",styles:"width:80px"},je={name:"ypff5m",styles:"min-width:100px"};function Fe(){const{token:s}=B.useToken(),[t,n]=Q(D),{updateAutoPostSettings:l,isSettingsUpdateSuccessfully:d,isUpdatingAutoPostSettings:F}=fe(),{isLoadingAutoPostSettings:T}=ye(),[M,U]=ue.useMessage(),{accounts:x}=se(),{isProClient:f}=V(J),I=N(X),Y=oe(),{postTypes:k,loadingPostType:O}=te(),_=k&&Object.values(k).map(o=>({label:a(A,{children:[o.label," ",o.name!=="post"&&!f&&e(b,{color:"#ff8609",size:16,name:"crown"})]}),value:o.name}));Z(async()=>{const{status:o}=await l(t);d&&o&&ee(M,o)},400,[t]);const g=(o,i)=>{const{accounts:r,isEnabled:S}=t,G=!r.accountIds.length;if(o==="isEnabled"&&G&&!S){de.warning({placement:"topRight",message:"Create and select an account first!"});return}if(!f&&o==="postType"&&Array.isArray(i)&&i.length&&i.includes("post")){I(!0);return}if(o==="postType"&&Array.isArray(i)&&!i.length){n(m=>y(m,v=>{v.postType=["post"]})),M.open({type:"warning",content:"You must have a type"});return}if(!f&&o==="postDelay"&&i!==Te){I(!0);return}if(o==="postDelay"){n(m=>y(m,v=>{v.postDelay=i==="delay"?{every:1,unit:"minute"}:{every:0,unit:""}}));return}n(m=>({...m,[o]:i}))},q=o=>{g("accounts",o)},W=o=>{const{value:i}=o.target;n(r=>y(r,S=>{S.postDelay.every=Number(i)}))},K=o=>{n(i=>y(i,r=>{o!==""&&t.postDelay.every<1&&(r.postDelay.every=1),o===""&&(r.postDelay.every=0),r.postDelay.unit=o}))},R=[{label:"Immediately",value:"immediately"},{label:a(A,{children:["Delay ",!f&&e(b,{color:"#ff8609",size:16,name:"crown"})]}),value:"delay"}];return a(pe,{gutter:20,children:[U,a(w,{span:6,children:[a(h,{justify:"space-between",className:"mb-1",children:[e(j.Title,{level:5,children:"Accounts"}),x.length?e(L,{}):""]}),x.length?e(ae,{isLoading:F,selectedAccount:t.accounts,setSelectedAccount:q}):a(A,{children:[e(ne,{iconSize:40,textLevel:5}),e("div",{style:{textAlign:"center"},children:e(L,{})})]})]}),e(w,{span:12,children:a(c,{style:{backgroundColor:s.colorFillAlter},children:[e(Se,{level:4,children:"Auto Post Settings"}),a(ve,{children:["All auto post related settings here.",a(we,{className:"pl-2",href:"https://bit-social.com/docs/auto-publish-wordpress-posts-on-social-media/",target:"_blank",rel:"noopener noreferrer nofollow",underline:!0,children:["Doc here",e(b,{name:"move-up-right",size:12,style:{transform:"translateY(-2px)"}})]})]}),a(c,{style:{marginTop:10},children:[a(h,{justify:"space-between",gap:50,children:[e(c.Meta,{title:"Share posts automatically",description:"When you publish a new wordpress post, the plugin shares the post on all active social accounts automatically."}),e("div",{children:e(E,{disabled:T,checked:t.isEnabled,onChange:o=>g("isEnabled",o)})})]}),e(p,{className:"pt-2",children:e(C,{mark:!0,children:"You have to create and select account first to enable this option!"})})]}),a(c,{style:{marginTop:10},children:[a(h,{justify:"space-between",gap:50,children:[e(c.Meta,{title:"Share posts type",description:"Automatically share specific post types, like blogs or products, to your social accounts when published."}),e("div",{children:e(P,{mode:"multiple",allowClear:!0,style:{minWidth:"150px"},placeholder:"Post Type: Post",onChange:o=>g("postType",o),loading:T||O,value:t.postType,options:_})})]}),e(p,{className:"pt-2",children:a(C,{mark:!0,children:["Share posts default type ",e("b",{children:"Post"})]})})]}),e(c,{style:{marginTop:10},children:a(h,{justify:"space-between",gap:50,children:[e(c.Meta,{title:"Share post delay",description:"Optimize your sharing strategy with flexible timing options: use the dropdown menu to select when your posts will be shared after publishing"}),a(h,{vertical:!0,gap:20,children:[e(p,{children:e(P,{value:z(t.postDelay),onChange:o=>g("postDelay",o),options:R,css:Pe})}),z(t.postDelay)==="delay"&&a(p,{className:"w-100",children:[e(he,{css:Ce,type:"number",min:1,onChange:W,value:t.postDelay.every}),e(P,{value:t.postDelay.unit,onChange:K,options:Y,css:je})]})]})]})}),a(c,{style:{marginTop:10},children:[a(h,{justify:"space-between",gap:50,children:[e(c.Meta,{title:"Enable auto post log",description:"If you don't want to keep the shared post logs, you need to disable the option. Disabling the option prevents you view your insights and you might encounter duplicate posts when you use the schedule module."}),e("div",{children:e(E,{disabled:T,checked:t.keepLogs,onChange:o=>g("keepLogs",o)})})]}),e(p,{className:"pt-2",children:e(C,{mark:!0,children:"You have to create and select account first to enable this option!"})})]})]})}),e(w,{span:6,children:e(Ae,{})})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};export{Fe as default};
