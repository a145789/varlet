import{an as p,r as l,F as k,a6 as A,ao as U,b,e as z,m as C,q as t,w as e,U as a,N,Q as r,R as o,n as D}from"./index-c15ef0e4.js";import{A as d}from"./appType-b44f4066.js";const S={basicUse:"基本使用",direction:"拖拽方向",attraction:"吸附方向",xAttraction:"水平吸附",yAttraction:"垂直吸附",disabled:"禁用",boundary:"拖拽区域",reset:"重置位置"},w={basicUse:"Basic Use",direction:"Direction",attraction:"Attraction Direction",xAttraction:"X Attraction",yAttraction:"Y Attraction",disabled:"Disabled",boundary:"Boundary",reset:"Reset Position"},{add:h,use:B,pack:s,packs:V,merge:q}=p.useLocale(),T=u=>{p.use(u),B(u)};p.add("zh-CN",p.zhCN);p.add("en-US",p.enUS);h("zh-CN",S);h("en-US",w);const E={__name:"index",setup(u){const c=l(null),y=l(null),f=l(null),_=l(null),x=l(null),g=l(null);function v(){c.value.reset(),y.value.reset(),f.value.reset(),_.value.reset(),x.value.reset(),g.value.reset()}return k(m=>{T(m),D(()=>{c.value.resize(),y.value.resize(),f.value.resize(),_.value.resize(),x.value.resize(),g.value.resize()})}),A(U.dark),(m,F)=>{const n=b("var-button"),i=b("var-drag");return z(),C(N,null,[t(a(d),{style:{height:"50px"}},{default:e(()=>[r(o(a(s).basicUse),1)]),_:1}),t(i,{ref_key:"drag",ref:c,style:{left:"15px",top:"105px"},boundary:{top:54}},{default:e(()=>[t(n,{type:"primary"},{default:e(()=>[r(o(a(s).basicUse),1)]),_:1})]),_:1},512),t(a(d),{style:{height:"50px","margin-top":"40px"}},{default:e(()=>[r(o(a(s).direction),1)]),_:1}),t(i,{ref_key:"drag2",ref:y,style:{left:"15px",top:"195px"},direction:"x",boundary:{top:54}},{default:e(()=>[t(n,{type:"primary"},{default:e(()=>[r(o(a(s).direction),1)]),_:1})]),_:1},512),t(a(d),{style:{height:"50px","margin-top":"40px"}},{default:e(()=>[r(o(a(s).attraction),1)]),_:1}),t(i,{ref_key:"drag3",ref:f,style:{left:"15px",top:"285px"},attraction:"x",boundary:{top:54}},{default:e(()=>[t(n,{type:"primary"},{default:e(()=>[r(o(a(s).xAttraction),1)]),_:1})]),_:1},512),t(i,{ref_key:"drag4",ref:_,style:{left:"132px",top:"285px"},attraction:"y",boundary:{top:54}},{default:e(()=>[t(n,{type:"primary"},{default:e(()=>[r(o(a(s).yAttraction),1)]),_:1})]),_:1},512),t(a(d),{style:{height:"50px","margin-top":"40px"}},{default:e(()=>[r(o(a(s).disabled),1)]),_:1}),t(i,{ref_key:"drag5",ref:x,style:{left:"15px",top:"375px"},disabled:"",attraction:"x",boundary:{top:54}},{default:e(()=>[t(n,{type:"primary",disabled:""},{default:e(()=>[r(o(a(s).disabled),1)]),_:1})]),_:1},512),t(a(d),{style:{height:"50px","margin-top":"40px"}},{default:e(()=>[r(o(a(s).boundary),1)]),_:1}),t(i,{ref_key:"drag6",ref:g,style:{left:"15px",top:"465px"},attraction:"x",boundary:{top:465,bottom:15,left:15,right:15}},{default:e(()=>[t(n,{type:"primary"},{default:e(()=>[r(o(a(s).boundary),1)]),_:1})]),_:1},512),t(a(d),{style:{height:"50px","margin-top":"40px"}},{default:e(()=>[r(o(a(s).reset),1)]),_:1}),t(n,{type:"primary",onClick:v},{default:e(()=>[r(o(a(s).reset),1)]),_:1})],64)}}};export{E as default};
