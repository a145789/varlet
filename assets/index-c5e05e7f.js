import{an as o,r as v,F as b,a6 as g,ao as w,b as p,e as z,m as x,q as e,w as l,U as t,N as C,Q as s,R as r}from"./index-c15ef0e4.js";import{A as i}from"./appType-b44f4066.js";const N={type:"类型",size:"大小",color:"颜色",wrap:"包裹内容",open:"打开",close:"关闭",cardTitle:"介绍",cardDesc:"Varlet 是一个基于Vue3开发的 Material 风格移动端组件库，全面拥抱Vue3生态，由社区的小伙伴开发和维护。"},h={type:"Type",size:"Size",color:"Color",wrap:"Wrap",open:"Open",close:"Close",cardTitle:"Intro",cardDesc:"Varlet is a Material design mobile component library developed based on Vue3, developed and maintained by partners in the community."},{add:y,use:k,pack:n,packs:j,merge:A}=o.useLocale(),V=d=>{o.use(d),k(d)};o.add("zh-CN",o.zhCN);o.add("en-US",o.enUS);y("zh-CN",N);y("en-US",h);const L={__name:"index",setup(d){const c=v(!1);return b(V),g(w.dark),(D,_)=>{const a=p("var-loading"),u=p("var-space"),f=p("var-button"),m=p("var-card");return z(),x(C,null,[e(t(i),null,{default:l(()=>[s(r(t(n).type),1)]),_:1}),e(u,{align:"center",justify:"space-between"},{default:l(()=>[e(a,{type:"circle"}),e(a,{type:"cube"}),e(a,{type:"wave"}),e(a,{type:"rect"}),e(a,{type:"disappear"})]),_:1}),e(t(i),null,{default:l(()=>[s(r(t(n).color),1)]),_:1}),e(u,{align:"center",justify:"space-between"},{default:l(()=>[e(a,{type:"circle",color:"#00afef"}),e(a,{type:"cube",color:"#00c48f"}),e(a,{type:"wave",color:"#ff9f00"}),e(a,{type:"rect",color:"#f44336"}),e(a,{type:"disappear",color:"#aaa"})]),_:1}),e(t(i),null,{default:l(()=>[s(r(t(n).size),1)]),_:1}),e(u,{align:"center",justify:"space-between"},{default:l(()=>[e(a,{type:"circle",size:"small"}),e(a,{type:"cube",size:"small"}),e(a,{type:"wave",size:"small"}),e(a,{type:"rect",size:"small"}),e(a,{type:"disappear",size:"small"})]),_:1}),e(t(i),null,{default:l(()=>[s(r(t(n).wrap),1)]),_:1}),e(f,{onClick:_[0]||(_[0]=S=>c.value=!c.value),style:{"margin-bottom":"8px"}},{default:l(()=>[s(r(c.value?t(n).close:t(n).open),1)]),_:1}),e(a,{description:"LOADING",loading:c.value},{default:l(()=>[e(m,{title:t(n).cardTitle,description:t(n).cardDesc},null,8,["title","description"])]),_:1},8,["loading"])],64)}}};export{L as default};
