import{_ as c,b as d,e as r,m as i,p as t,q as s,w as o,Q as e,Z as a}from"./index-c15ef0e4.js";const h={components:{}},p={class:"varlet-site-doc"},u=t("h1",null,"BackTop",-1),_={class:"card"},m={id:"Intro"},b=t("p",null,"A button to back to top.",-1),g={class:"card"},v={id:"BasicUsage"},j=t("p",null,[e("When the page scrolls to "),t("code",null,"200px"),e(", a back to top button will appear in the lower right corner.")],-1),f=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"script"),e(),t("span",{class:"hljs-attr"},"setup"),e(">")]),t("span",{class:"javascript"},[e(`
`),t("span",{class:"hljs-keyword"},"const"),e(" lists = [...Array("),t("span",{class:"hljs-number"},"100"),e(`).keys()]
`)]),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"script"),e(">")]),e(`

`),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"template"),e(">")]),e(`
  `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"div"),e(">")]),e(`
    `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-cell"),e(),t("span",{class:"hljs-attr"},"v-for"),e("="),t("span",{class:"hljs-string"},'"list in lists"'),e(),t("span",{class:"hljs-attr"},":key"),e("="),t("span",{class:"hljs-string"},'"list"'),e(">")]),e("Scroll to bottom {{ list }}"),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"var-cell"),e(">")]),e(`
    `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-back-top"),e(),t("span",{class:"hljs-attr"},":duration"),e("="),t("span",{class:"hljs-string"},'"300"'),e(" />")]),e(`
  `),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"div"),e(">")]),e(`
`),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"template"),e(">")]),e(`
`)])],-1),k=t("h2",null,"API",-1),y={class:"card"},S={id:"Props"},w=a("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>target</code></td><td>The target to trigger scroll. If it is <code>undefined</code>, back top will listen to the nearest scrollable parent.</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>visibility-height</code></td><td>The button will not show until the scroll height reaches this value</td><td><em>string | number</em></td><td><code>200</code></td></tr><tr><td><code>bottom</code></td><td>Distance between <code>BackTop</code> and page bottom</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>Distance between <code>BackTop</code> and page right</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>duration</code></td><td>Time to return to top(ms)</td><td><em>number</em></td><td><code>300</code></td></tr></tbody></table>",1),x={class:"card"},T={id:"Events"},B=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Event"),t("th",null,"Description"),t("th",null,"arguments")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"click")]),t("td",null,"Triggered when click"),t("td",null,[t("code",null,"event: Event")])])])],-1),E={class:"card"},V={id:"Slots"},D=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Description"),t("th",null,"SlotProps")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"default")]),t("td",null,"Custom the content"),t("td",null,[t("code",null,"-")])])])],-1),P={class:"card"},I={id:"StyleVariables"},N=a('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--back-top-right</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-bottom</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-button-size</code></td><td><code>40px</code></td></tr></tbody></table>',2);function U(C,$,A,z,H,q){const l=d("router-link"),n=d("var-site-code-example");return r(),i("div",p,[u,t("div",_,[t("h3",m,[s(l,{to:"#Intro"},{default:o(()=>[e("#")]),_:1}),e("Intro")]),b]),t("div",g,[t("h3",v,[s(l,{to:"#BasicUsage"},{default:o(()=>[e("#")]),_:1}),e("Basic Usage")]),j,s(n,null,{default:o(()=>[f]),_:1})]),k,t("div",y,[t("h3",S,[s(l,{to:"#Props"},{default:o(()=>[e("#")]),_:1}),e("Props")]),w]),t("div",x,[t("h3",T,[s(l,{to:"#Events"},{default:o(()=>[e("#")]),_:1}),e("Events")]),B]),t("div",E,[t("h3",V,[s(l,{to:"#Slots"},{default:o(()=>[e("#")]),_:1}),e("Slots")]),D]),t("div",P,[t("h3",I,[s(l,{to:"#StyleVariables"},{default:o(()=>[e("#")]),_:1}),e("Style Variables")]),N])])}const M=c(h,[["render",U]]);export{M as default};
