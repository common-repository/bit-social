import{u as h,b as p,a as i,j as e,d as u}from"./main-sixty-windows-relax.js";import{M as g,$ as d}from"./index-C5LbIB16.js";import{T as b,p as o,P as y}from"./PreviewDummy-CYDabmOl.js";import{t as T,g as t,F as r,u as f,h as v,i as n,j as C,T as M}from"./antd-Biwa_WcY.js";import"./react-query-DTccfBeP.js";import"./css-in-js-CSGOT-6T.js";import"./router-C23xx3cB.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(a,s){return this.cache.has(a)?this.cache.get(a):(this.cache.set(a,s),s)}};const{Title:w}=M;function S(){const{token:a}=T.useToken(),s=h(d),c=p(u),l=()=>{c(!0)},m=[{label:"Only custom message",value:"onlyMessage"},{label:"Link card",value:"isLinkCard"},{label:"Product Image",value:"isProductImage"},{label:"Feature image",value:"isFeaturedImage"},{label:"All Images",value:"isAllImages"}];return i(C,{gutter:20,children:[e(n,{span:14,children:i(t,{size:"small",style:{backgroundColor:a.colorFillAlter},children:[e(w,{level:4,children:"Tumblr Template Settings"}),e(b,{platform:"Tumblr"}),i(t,{children:[e(t.Meta,{title:"Custom Message",description:"Custom message settings."}),e("div",{children:e(g,{rows:5,style:{minWidth:200},value:s.tumblr.content,onChange:l})})]}),e(t,{style:{marginTop:10},children:i(r,{justify:"space-between",gap:20,children:[e(t.Meta,{title:"Posting type",description:"Post styling and type setup."}),e("div",{children:e(f,{style:{minWidth:200},onChange:l,value:s.tumblr.postingType,options:m})})]})}),e(t,{style:{marginTop:10},children:i(r,{justify:"space-between",gap:20,children:[e(t.Meta,{title:"Trim Message",description:`Tumblr restricts the length of a tweet to ${o.tumblr.description.length} characters. If you enable this option, the first ${o.tumblr.description.length} characters of your personalized message will be shared; if not, the limit prevents the tweet from being shared.`}),e("div",{children:e(v,{checked:s.tumblr.trimMessage,onChange:l})})]})})]})}),e(n,{span:10,children:e(y,{})})]})}export{S as default};