import{an as r,_ as k,r as w,F as T,a6 as b,ao as U,b as f,e as $,m as N,q as e,w as s,U as t,N as F,s as H,Q as a,R as o,p,$ as M,a0 as D}from"./index-c15ef0e4.js";import{A as m}from"./appType-b44f4066.js";const z={basicUsage:"基本使用",customFormat:"自定义格式",showMillisecond:"显示毫秒",customStyle:"自定义样式",manualControl:"手动控制",format:"DD 天 HH 时 mm 分 ss 秒",startText:"开始",pauseText:"暂停",resetText:"重置"},B={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"},{add:x,use:I,pack:n,packs:G,merge:J}=r.useLocale(),V=l=>{r.use(l),I(l)};r.add("zh-CN",r.zhCN);r.add("en-US",r.enUS);x("zh-CN",z);x("en-US",B);const S=l=>(M("data-v-6e0fe871"),l=l(),D(),l),A={class:"countdown-example-block"},E=S(()=>p("span",{class:"countdown-example-colon"},":",-1)),L={class:"countdown-example-block"},R=S(()=>p("span",{class:"countdown-example-colon"},":",-1)),j={class:"countdown-example-block"},q={__name:"index",setup(l){const h=w(null),C=w(3e3);function v(){H.info("end!")}function g(){console.log("change")}return T(V),b(U.dark),(i,c)=>{const d=f("var-countdown"),_=f("var-button"),y=f("var-row");return $(),N(F,null,[e(t(m),null,{default:s(()=>[a(o(t(n).basicUsage),1)]),_:1}),e(d,{time:"108000000"}),e(t(m),null,{default:s(()=>[a(o(t(n).customFormat),1)]),_:1}),e(d,{time:"108000000",format:t(n).format},null,8,["format"]),e(t(m),null,{default:s(()=>[a(o(t(n).showMillisecond),1)]),_:1}),e(d,{time:"108000000",format:"HH : mm : ss : SS"}),e(t(m),null,{default:s(()=>[a(o(t(n).customStyle),1)]),_:1}),e(d,{time:"108000000"},{default:s(u=>[p("span",A,o(u.hours),1),E,p("span",L,o(u.minutes),1),R,p("span",j,o(u.seconds),1)]),_:1}),e(t(m),null,{default:s(()=>[a(o(t(n).manualControl),1)]),_:1}),e(d,{time:C.value,ref_key:"countdown",ref:h,"auto-start":!1,format:"ss : SSS",onEnd:v,onChange:g},null,8,["time"]),e(y,{justify:"space-between",align:"center",style:{"margin-top":"10px"}},{default:s(()=>[e(_,{type:"primary",onClick:c[0]||(c[0]=u=>i.$refs.countdown.start())},{default:s(()=>[a(o(t(n).startText),1)]),_:1}),e(_,{onClick:c[1]||(c[1]=u=>i.$refs.countdown.pause())},{default:s(()=>[a(o(t(n).pauseText),1)]),_:1}),e(_,{onClick:c[2]||(c[2]=u=>i.$refs.countdown.reset())},{default:s(()=>[a(o(t(n).resetText),1)]),_:1})]),_:1})],64)}}},K=k(q,[["__scopeId","data-v-6e0fe871"]]);export{K as default};
