import{h as w,a as o,j as e,p as v}from"./main-sixty-windows-relax.js";import{M as b,$ as M}from"./index-C5LbIB16.js";import{u as C,a as j}from"./useMemoDebounce-C5qvmGln.js";import{T as S,p as r,P as k}from"./PreviewDummy-CYDabmOl.js";import{u as A}from"./useUpdateSocialTemplates-CNTIZaXP.js";import{t as P,v as x,g as a,F as n,u as I,h as F,i as c,j as L,T as $}from"./antd-Biwa_WcY.js";import"./react-query-DTccfBeP.js";import"./css-in-js-CSGOT-6T.js";import"./router-C23xx3cB.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(i,s){return this.cache.has(i)?this.cache.get(i):(this.cache.set(i,s),s)}};const{Title:D}=$;function q(){const{token:i}=P.useToken(),[s,p]=w(M),{updateSocialTemplates:m,isTemplatesUpdateSuccessfully:h}=A(),[g,d]=x.useMessage();C(async()=>{const{status:t}=await m(s);h&&t&&j(g,t)},400,[s]);const l=(t,T)=>{p(y=>v(y,f=>{f.twitter[t]=T}))},u=[{label:"Only custom message",value:"onlyMessage"},{label:"Link card",value:"isLinkCard"},{label:"Feature image",value:"isFeaturedImage"},{label:"Product Image",value:"isProductImage"},{label:"All Images",value:"isAllImages"}];return o(L,{gutter:20,children:[d,e(c,{span:14,children:o(a,{size:"small",style:{backgroundColor:i.colorFillAlter},children:[e(D,{level:4,children:"X (Twitter) Template Settings"}),e(S,{platform:"X (Twitter)"}),o(a,{children:[e(a.Meta,{title:"Custom Message",description:"Custom message settings."}),e("div",{children:e(b,{rows:5,style:{minWidth:200},value:s.twitter.content,onChange:t=>l("content",t)})})]}),e(a,{style:{marginTop:10},children:o(n,{justify:"space-between",gap:20,children:[e(a.Meta,{title:"Posting type",description:"Post styling and type setup."}),e("div",{children:e(I,{style:{minWidth:200},onChange:t=>l("postingType",t),value:s.twitter.postingType,options:u})})]})}),e(a,{style:{marginTop:10},children:o(n,{justify:"space-between",gap:20,children:[e(a.Meta,{title:"Trim Message",description:`Twitter restricts the length of a tweet to ${r.twitter.description.length} characters. If you enable this option, the first ${r.twitter.description.length} characters of your personalized message will be shared; if not, the limit prevents the tweet from being shared.`}),e("div",{children:e(F,{checked:s.twitter.trimMessage,onChange:t=>l("trimMessage",t)})})]})})]})}),e(c,{span:10,children:e(k,{})})]})}export{q as default};
