import{an as a,aI as g,W as x,r as N,F as R,I as z,aE as B,k as _,ao as F,aJ as f,b as h,e as A,m as E,q as e,w as n,U as o,N as I,Q as c,R as u}from"./index-c15ef0e4.js";import{A as v}from"./appType-b44f4066.js";const L={componentCall:"组件调用",functionCall:"函数调用",toggleTheme:"切换样式变量",toggleRootTheme:"切换根节点样式变量"},$={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"},{add:C,use:q,pack:m,packs:Q,merge:W}=a.useLocale(),D=i=>{a.use(i),q(i)};a.add("zh-CN",a.zhCN);a.add("en-US",a.enUS);C("zh-CN",L);C("en-US",$);const j={__name:"index",setup(i){const y=g.Component,s=x({score:5,license:!0}),d=N(null);let r=null;const k={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},V={"--color-primary":"#3f51b5"};function b(){d.value=d.value?null:k}function w(){const l=_();r=r?null:V,g({...f(l),...r})}return R(D),z(()=>{r=null}),B(()=>{const l=_(),t=l==="darkTheme"?F.dark:null;g({...f(l),...t})}),(l,t)=>{const S=h("var-rate"),U=h("var-switch"),T=h("var-button");return A(),E(I,null,[e(o(v),null,{default:n(()=>[c(u(o(m).componentCall),1)]),_:1}),e(o(y),{"style-vars":d.value},{default:n(()=>[e(S,{modelValue:s.score,"onUpdate:modelValue":t[0]||(t[0]=p=>s.score=p)},null,8,["modelValue"]),e(U,{modelValue:s.license,"onUpdate:modelValue":t[1]||(t[1]=p=>s.license=p)},null,8,["modelValue"]),e(T,{style:{"margin-top":"10px"},type:"primary",block:"",onClick:b},{default:n(()=>[c(u(o(m).toggleTheme),1)]),_:1})]),_:1},8,["style-vars"]),e(o(v),null,{default:n(()=>[c(u(o(m).functionCall),1)]),_:1}),e(T,{type:"primary",block:"",onClick:w},{default:n(()=>[c(u(o(m).toggleRootTheme),1)]),_:1})],64)}}};export{j as default};
