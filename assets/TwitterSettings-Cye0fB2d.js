import{u as p,b as m,a as i,j as e,d as g}from"./main-sixty-windows-relax.js";import{M as d,$ as u}from"./index-C5LbIB16.js";import{T as y,p as o,P as w}from"./PreviewDummy-CYDabmOl.js";import{t as T,g as t,F as r,u as f,h as b,i as n,j as v,T as C}from"./antd-Biwa_WcY.js";import"./react-query-DTccfBeP.js";import"./css-in-js-CSGOT-6T.js";import"./router-C23xx3cB.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(a,s){return this.cache.has(a)?this.cache.get(a):(this.cache.set(a,s),s)}};const{Title:M}=C;function S(){const{token:a}=T.useToken(),s=p(u),c=m(g),l=()=>{c(!0)},h=[{label:"Only custom message",value:"onlyMessage"},{label:"Link card",value:"isLinkCard"},{label:"Feature image",value:"isFeaturedImage"},{label:"Product Image",value:"isProductImage"},{label:"All Images",value:"isAllImages"}];return i(v,{gutter:20,children:[e(n,{span:14,children:i(t,{size:"small",style:{backgroundColor:a.colorFillAlter},children:[e(M,{level:4,children:"X (Twitter) Template Settings"}),e(y,{platform:"X (Twitter)"}),i(t,{children:[e(t.Meta,{title:"Custom Message",description:"Custom message settings."}),e("div",{children:e(d,{rows:5,style:{minWidth:200},value:s.twitter.content,onChange:l})})]}),e(t,{style:{marginTop:10},children:i(r,{justify:"space-between",gap:20,children:[e(t.Meta,{title:"Posting type",description:"Post styling and type setup."}),e("div",{children:e(f,{style:{minWidth:200},onChange:l,value:s.twitter.postingType,options:h})})]})}),e(t,{style:{marginTop:10},children:i(r,{justify:"space-between",gap:20,children:[e(t.Meta,{title:"Trim Message",description:`Twitter restricts the length of a tweet to ${o.twitter.description.length} characters. If you enable this option, the first ${o.twitter.description.length} characters of your personalized message will be shared; if not, the limit prevents the tweet from being shared.`}),e("div",{children:e(b,{checked:s.twitter.trimMessage,onChange:l})})]})})]})}),e(n,{span:10,children:e(w,{})})]})}export{S as default};
