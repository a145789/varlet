import{_ as a,b as n,e as t,m as r,p as o,q as l,w as s,Q as e,Z as d}from"./index-c15ef0e4.js";const h={components:{}},u={class:"varlet-site-doc"},_=o("h1",null,"迁移指南",-1),p={class:"card"},g={id:"jie4shao4"},m=o("p",null,[e("本节主要介绍 "),o("code",null,"2.x"),e(" 版本相对于 "),o("code",null,"1.x"),e(" 版本的主要变化以及迁移的注意事项。")],-1),y=o("h2",null,"组件库(@varlet/ui)",-1),j={class:"card"},f={id:"zu3jian4zhong4gou4"},v=d('<ul><li>Menu 组件进行了重做，优化了 api 使其变得更易使用，在桌面端也有更优秀的边界检测能力和性能。具体使用方式参考 <a href="#/zh-CN/menu">Menu 文档</a>，</li><li>Select 组件的下拉菜单替换成了新版 Menu 组件</li><li>Pagination 组件的下拉菜单替换成了新版 Menu 组件</li><li>Loading 组件的默认颜色从 <code>currentColor</code> 更改为 <code>var(--color-primary)</code></li><li>Loading 组件暴露出 <code>var(--loading-color)</code></li><li>Button 组件新增 <code>loadingColor</code> 属性</li><li>Snackbar 组件新增 <code>loadingColor</code> 属性</li><li>Progress 组件新增 <code>labelClass</code> 属性</li><li>StyleProvider 组件新增 <code>tag</code> 属性，允许自定义容器标签</li><li>Cell 组件重命名了部分 api <code>desc</code> -&gt; <code>description</code>，<code>descClass</code> -&gt; <code>descriptionClass</code></li><li>DatePicker 组件重命名了部分 api <code>shadow</code> -&gt; <code>elevation</code></li><li>TimePicker 组件重命名了部分 api <code>shadow</code> -&gt; <code>elevation</code></li><li>Card 组件重命名了部分 api <code>height</code> -&gt; <code>image-height</code>，<code>content</code> -&gt; <code>floating-content</code></li><li>Col 组件新增 <code>direction</code> 属性</li><li>Dialog 组件新增 <code>width</code> 属性</li><li>Form 组件新增 <code>useForm</code> 和 <code>useValidation</code> 静态方法以提供自定义表单组件的能力</li></ul>',1),k={class:"card"},w={id:"zu3jian4yang4shi4bian4liang4bian4geng1"},z=d("<ul><li>Menu 组件变量新增 <code>--menu-background-color</code></li><li>Select 组件变量新增 <code>--select-select-min-height</code>，<code>--select-menu-margin-top</code></li><li>Pagination 组件变量新增 <code>--pagination-simple-padding</code></li><li>Loading 组件变量新增 <code>--loading-color</code></li><li>Rate 组件变量新增 <code>--rate-color</code></li><li>Counter 组件变量新增 <code>--counter-disabled-opacity</code></li><li>Slider 组件变量新增 <code>--slider-disabled-opacity</code></li><li>Switch 组件变量新增 <code>--switch-disabled-opacity</code></li><li>Cell 组件变量重命名 <code>--cell-desc-font-size</code> -&gt; <code>--cell-description-font-size</code>，<code>--cell-desc-color</code> -&gt; <code>--cell-description-color</code></li><li>Form 组件变量重命名 <code>--form-details-error-color</code> -&gt; <code>--form-details-error-message-color</code>， <code>--form-details-length-color</code> -&gt; <code>--form-details-extra-message-color</code></li></ul>",1),x={class:"card"},b={id:"UMDmo2kuai4dao3chu1zhong1ying1wen2yu3yan2bao1"},S=o("p",null,[e("在 "),o("code",null,"1.x"),e(" 版本中，UMD 模块不导出中英文语言包，在 "),o("code",null,"2.x"),e(" 版本中，我们将中英文语言包进行了导出， 非 UMD 模块现在有两种使用语言包的方式。")],-1),M=o("pre",{class:"hljs"},[o("code",null,[o("span",{class:"hljs-keyword"},"import"),e(" { Locale } "),o("span",{class:"hljs-keyword"},"from"),e(),o("span",{class:"hljs-string"},"'@varlet/ui'"),e(`
`),o("span",{class:"hljs-keyword"},"import"),e(" enUS "),o("span",{class:"hljs-keyword"},"from"),e(),o("span",{class:"hljs-string"},"'@varlet/ui/es/locale/en-US'"),e(`

Locale.add(`),o("span",{class:"hljs-string"},"'en-US'"),e(`, enUS)
`)])],-1),C=o("p",null,"或",-1),U=o("pre",{class:"hljs"},[o("code",null,[o("span",{class:"hljs-keyword"},"import"),e(" { Locale } "),o("span",{class:"hljs-keyword"},"from"),e(),o("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

Locale.add(`),o("span",{class:"hljs-string"},"'en-US'"),e(`, Locale.enUS)
`)])],-1),D={class:"card"},P={id:"UMDmo2kuai4dao3chu1an4hei1mo2shi4zhu3ti2"},T=o("p",null,[e("在 "),o("code",null,"1.x"),e(" 版本中，UMD 模块不导出暗黑模式主题包，在 "),o("code",null,"2.x"),e(" 版本中，我们将暗黑模式主题包进行了导出， 非 UMD 模块现在有两种使用暗黑模式主题的方式。")],-1),L=o("pre",{class:"hljs"},[o("code",null,[o("span",{class:"hljs-keyword"},"import"),e(" { StyleProvider } "),o("span",{class:"hljs-keyword"},"from"),e(),o("span",{class:"hljs-string"},"'@varlet/ui'"),e(`
`),o("span",{class:"hljs-keyword"},"import"),e(" dark "),o("span",{class:"hljs-keyword"},"from"),e(),o("span",{class:"hljs-string"},"'@varlet/ui/es/themes/dark'"),e(`

StyleProvider(dark)
`)])],-1),N=o("p",null,"或",-1),B=o("pre",{class:"hljs"},[o("code",null,[o("span",{class:"hljs-keyword"},"import"),e(" { StyleProvider, Themes } "),o("span",{class:"hljs-keyword"},"from"),e(),o("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

StyleProvider(Themes.dark)
`)])],-1),V={class:"card"},$={id:"yi2chu2le0sszhu3ti2bian4liang4de0zhi1chi2"},q=o("p",null,[e("如今 "),o("code",null,"css variable"),e(" 方案已经十分成熟，在 "),o("code",null,"2.x"),e(" 版本中不再支持 "),o("code",null,"less"),e(" 主题变量，这有利于减小包的发布体积。 如果您使用了在构建时替换 "),o("code",null,"less"),e(" 主题变量的方案，需要替换成 "),o("code",null,"css variable"),e(" 方案。")],-1),A={class:"card"},F={id:"Type0scri0ptlei4xing2you1hua4"},E=o("p",null,[e("我们对组件内部类型进行了重构，抽象了更多的类型并且暴露了出来，组件的类型规范依照"),o("code",null,"组件名"),e(" + "),o("code",null,"类型名"),e("的形式。使用方式如下所示:")],-1),G=o("pre",{class:"hljs"},[o("code",null,[o("span",{class:"hljs-keyword"},"import"),e(),o("span",{class:"hljs-keyword"},"type"),e(" { ButtonProps, ButtonType, ButtonSize } "),o("span",{class:"hljs-keyword"},"from"),e(),o("span",{class:"hljs-string"},"'@varlet/ui'"),e(`
`)])],-1),O={class:"card"},Q={id:"zhi1chi2zi4dong4yin3ru4han2shu4zu3jian4"},R=o("p",null,[e("在 1.x 中，组件库只支持自动引入在模板中的声明式组件，函数组件 "),o("code",null,"(例如: Snackbar)"),e(" 仍然需要手动引入样式文件。 在 2.x 中，通过 "),o("a",{href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import"),e(" 插件支持了函数组件的自动引入。 详情见"),o("a",{href:"#/zh-CN/importOnDemand"},"按需引入"),e("。")],-1),Z=o("h2",null,"组件库快速成型工具(@varlet/cli)",-1),H={class:"card"},I={id:"ming4ling4zhong4gou4"},J=d("<ul><li>重构了 <code>gen</code> 和 <code>create</code> 命令，增加了 <code>sfc</code> 和 <code>tsx</code> 两种风格的模板选择，增加了国际化的选项，优化了命令行交互体验</li><li>重构了 <code>compile</code> 命令，编译后的包不再支持 <code>less</code> 变量</li><li>新增 <code>vite:dev</code> 和 <code>vite:build</code> 命令，对 <code>vite</code> 进行了基本的封装</li></ul>",1),K={class:"card"},W={id:"wen2dang4xiang1guan1"},X=o("ul",null,[o("li",null,"新的文档首页"),o("li",null,"优化了文档视觉"),o("li",null,"文档样式变量进行了一些重命名")],-1),Y={class:"card"},oo={id:"qi2ta1gai3bian4"},eo=o("ul",null,[o("li",null,[o("code",null,"Node.js"),e(" 版本锁定为 "),o("code",null,"^14.18.0 || >=16.0.0")]),o("li",null,[e("文档配置文件从 "),o("code",null,"varlet.config.js"),e(" -> "),o("code",null,"varlet.config.mjs")]),o("li",null,"内置方法引入方式改变")],-1),lo=o("pre",{class:"hljs"},[o("code",null,[o("span",{class:"hljs-comment"},"// 1.x"),e(`
`),o("span",{class:"hljs-keyword"},"import"),e(" AppType "),o("span",{class:"hljs-keyword"},"from"),e(),o("span",{class:"hljs-string"},"'@varlet/cli/site/mobile/components/AppType'"),e(`
`),o("span",{class:"hljs-keyword"},"import"),e(" { watchLang, watchDarkMode } "),o("span",{class:"hljs-keyword"},"from"),e(),o("span",{class:"hljs-string"},"'@varlet/cli/site/utils'"),e(`
`)])],-1),so=o("pre",{class:"hljs"},[o("code",null,[o("span",{class:"hljs-comment"},"// 2.x"),e(`
`),o("span",{class:"hljs-keyword"},"import"),e(" { AppType, watchLang, watchDarkMode } "),o("span",{class:"hljs-keyword"},"from"),e(),o("span",{class:"hljs-string"},"'@varlet/cli/client'"),e(`
`)])],-1);function io(co,no,ao,to,ro,ho){const i=n("router-link"),c=n("var-site-code-example");return t(),r("div",u,[_,o("div",p,[o("h3",g,[l(i,{to:"#jie4shao4"},{default:s(()=>[e("#")]),_:1}),e("介绍")]),m]),y,o("div",j,[o("h3",f,[l(i,{to:"#zu3jian4zhong4gou4"},{default:s(()=>[e("#")]),_:1}),e("组件重构")]),v]),o("div",k,[o("h3",w,[l(i,{to:"#zu3jian4yang4shi4bian4liang4bian4geng1"},{default:s(()=>[e("#")]),_:1}),e("组件样式变量变更")]),z]),o("div",x,[o("h3",b,[l(i,{to:"#UMDmo2kuai4dao3chu1zhong1ying1wen2yu3yan2bao1"},{default:s(()=>[e("#")]),_:1}),e("UMD 模块导出中英文语言包")]),S,l(c,{"playground-ignore":""},{default:s(()=>[M]),_:1}),C,l(c,{"playground-ignore":""},{default:s(()=>[U]),_:1})]),o("div",D,[o("h3",P,[l(i,{to:"#UMDmo2kuai4dao3chu1an4hei1mo2shi4zhu3ti2"},{default:s(()=>[e("#")]),_:1}),e("UMD 模块导出暗黑模式主题")]),T,l(c,{"playground-ignore":""},{default:s(()=>[L]),_:1}),N,l(c,{"playground-ignore":""},{default:s(()=>[B]),_:1})]),o("div",V,[o("h3",$,[l(i,{to:"#yi2chu2le0sszhu3ti2bian4liang4de0zhi1chi2"},{default:s(()=>[e("#")]),_:1}),e("移除 less 主题变量的支持")]),q]),o("div",A,[o("h3",F,[l(i,{to:"#Type0scri0ptlei4xing2you1hua4"},{default:s(()=>[e("#")]),_:1}),e("Typescript 类型优化")]),E,l(c,{"playground-ignore":""},{default:s(()=>[G]),_:1})]),o("div",O,[o("h3",Q,[l(i,{to:"#zhi1chi2zi4dong4yin3ru4han2shu4zu3jian4"},{default:s(()=>[e("#")]),_:1}),e("支持自动引入函数组件")]),R]),Z,o("div",H,[o("h3",I,[l(i,{to:"#ming4ling4zhong4gou4"},{default:s(()=>[e("#")]),_:1}),e("命令重构")]),J]),o("div",K,[o("h3",W,[l(i,{to:"#wen2dang4xiang1guan1"},{default:s(()=>[e("#")]),_:1}),e("文档相关")]),X]),o("div",Y,[o("h3",oo,[l(i,{to:"#qi2ta1gai3bian4"},{default:s(()=>[e("#")]),_:1}),e("其他改变")]),eo,l(c,null,{default:s(()=>[lo]),_:1}),l(c,null,{default:s(()=>[so]),_:1})])])}const _o=a(h,[["render",io]]);export{_o as default};
