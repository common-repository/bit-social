import{f as j,r as x,u as v,c as A,b as w,d as S,j as s,a as l,L as p}from"./main-sixty-windows-relax.js";import{c as $}from"./react-query-DTccfBeP.js";import{r as m,K as _,B as u,S as B,F as C,O as I,I as L,T as P}from"./antd-Biwa_WcY.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const k={facebook:{postingType:"onlyMessage",content:"{post_title}",trimMessage:!0},linkedin:{postingType:"onlyMessage",content:"{post_title}",trimMessage:!0},twitter:{postingType:"onlyMessage",content:"{post_title}",trimMessage:!0},pinterest:{postingType:"isFeaturedImage",content:"{post_title}",trimMessage:!0},discord:{postingType:"onlyMessage",content:"{post_title}",trimMessage:!0},googleBusinessProfile:{postingType:"onlyMessage",content:"{post_title}",button:"none",trimMessage:!0},tumblr:{postingType:"onlyMessage",content:"{post_title}",trimMessage:!0}},z=globalThis.jotaiAtomCache.get("/home/runner/work/bit-social/bit-social/frontend/src/common/globalStates/socialTemplates/$socialTemplates.ts/$socialTemplates",j(k));z.debugLabel="$socialTemplates";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function F(){const{data:e,isLoading:t}=$({queryKey:["smart-tags"],queryFn:async()=>x("smart-tags",void 0,void 0,"GET")});return{smartTags:(e==null?void 0:e.data)||{},isSmartTagsLoading:t}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const{Text:O}=P;var q={name:"5bhc30",styles:"margin-bottom:8px"};function E({wrapperClassName:e,label:t,value:n,onChange:o,...T}){const{smartTags:d}=F(),r=m.useRef(null),{isProClient:h}=v(A),b=w(S),f=(a,c)=>{if(c==="pro"&&!h){b(!0);return}const i=`${n} {${a}}`;r.current&&(r.current.value=i),o==null||o(i)},y=a=>{o==null||o(a.target.value)},M=s(B,{size:0,align:"start",direction:"vertical",children:Object.values(d).map(({key:a,label:c,description:i,type:g})=>s(_,{title:i,children:l(u,{block:!0,type:"text",size:"small",onClick:()=>f(a,g),children:[c," ",!h&&g==="pro"&&s(p,{color:"#ff8609",size:18,name:"crown"})]},a)},a))});return l("div",{className:e,children:[l(C,{justify:"space-between",align:"center",css:q,children:[s(O,{children:t}),s(I,{placement:"bottom",trigger:"click",content:M,overlayInnerStyle:{maxHeight:"60vh",overflow:"auto"},children:s(u,{size:"small",type:"text",icon:s(p,{name:"tags"}),children:"Show Smart Tags"})})]}),s(L.TextArea,{ref:r,value:n,onChange:y,...T})]})}const G=m.memo(E);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};export{z as $,G as M};