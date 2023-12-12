import{_ as d,b as o,e as p,m as r,p as a,q as t,w as e,Q as s,Z as c}from"./index-c15ef0e4.js";const h={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"MenuSelect",-1),m={class:"card"},g={id:"Intro"},u=a("p",null,[s("Menu with selector function, some functions are used in the same way as "),a("a",{href:"#/en-US/menu"},"Menu"),s(".")],-1),v={class:"card"},b={id:"BasicUsage"},_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : 'Please Select' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},y={id:"Size"},S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  
`),a("span",{class:"hljs-keyword"},"const"),s(` valueNormal = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` valueSmall = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` valueMini = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` valueLarge = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"valueNormal"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        {{ valueNormal ? valueNormal : 'Normal Size' }}
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"valueSmall"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        {{ valueSmall ? valueSmall : 'Small Size' }}
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"mini"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"valueMini"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        {{ valueMini ? valueMini : 'Mini Size' }}
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"valueLarge"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        {{ valueLarge ? valueLarge : 'Large Size' }}
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w={class:"card"},k={id:"ValueMapping"},M=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? `value: ${value}` : 'Please Select' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"2"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"3"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},x={id:"Scrollable"},z=a("p",null,[s("Make the menu scrollable by turning on "),a("code",null,"scrollable"),s(".")],-1),T=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(" options = ref("),a("span",{class:"hljs-built_in"},"Array"),s(`.from(
  { `),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"30"),s(` }, 
  `),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(" ({ "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},[s("`Option "),a("span",{class:"hljs-subst"},[s("${index + "),a("span",{class:"hljs-number"},"1"),s("}")]),s("`")]),s(", "),a("span",{class:"hljs-attr"},"value"),s(`: index }))
)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"scrollable"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : 'Please Select' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(` 
        `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"option in options"'),s(` 
        `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"option.value"'),s(` 
        `),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"option.label"'),s(` 
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},B={id:"OptionDisabled"},D=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"scrollable"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : 'Please Select' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},C={id:"Multiple"},N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"multiple"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value.length ? value : 'Please Select' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Coding"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Rest"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),O={class:"card"},L={id:"DisableCloseOnSelect"},W=a("p",null,[s("Close "),a("code",null,"close-on-select"),s(" disables closing the menu when selecting an option. The default behavior is to close the menu when selecting an option, which is not allowed in multi-select mode.")],-1),U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},":close-on-select"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : 'Please Select' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$=a("h2",null,"API",-1),A={class:"card"},I={id:"Props"},R=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any | any[]</em></td><td><code>-</code></td></tr><tr><td><code>v-model:show</code></td><td>Whether to show the menu</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>size</code></td><td>Menu size, optional values <code>normal</code> <code>mini</code> <code>small</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>scrollable</code></td><td>Whether to enable scrolling</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-on-select</code></td><td>Whether to close the menu when selected (selected options in multi-select mode never close the menu)</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>placement</code></td><td>Menu popup placement</td><td><em>Placement</em></td><td><code>cover-top-start</code></td></tr><tr><td><code>strategy</code></td><td>Menu position strategy, optional value is <code>absolute</code> <code>fixed</code></td><td><em>string</em></td><td><code>absolute</code></td></tr><tr><td><code>offset-x</code></td><td>The x-axis offset, relative to the menu-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>The y-axis offset, relative to the menu-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>The location of the menu mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable the menu</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>Menu trigger method, optional value is <code>click</code> <code>hover</code>, <code>click</code> is triggered when clicked, <code>hover</code> is triggered when hovered</td><td><em>string</em></td><td><code>click</code></td></tr><tr><td><code>reference</code></td><td>The associated trigger element selector is used to specify specific child elements as trigger elements</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>same-width</code></td><td>Whether to same width as trigger element</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>popover-class</code></td><td>Class of the popover</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-click-reference</code></td><td>Whether to close the menu when clicking the reference element</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),q={class:"card"},H={id:"Placement"},Q=c("<table><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>top</code></td><td>Top center position</td></tr><tr><td><code>top-start</code></td><td>Top left position</td></tr><tr><td><code>top-end</code></td><td>Top right position</td></tr><tr><td><code>bottom</code></td><td>Bottom center position</td></tr><tr><td><code>bottom-start</code></td><td>Bottom left position</td></tr><tr><td><code>bottom-end</code></td><td>Bottom right position</td></tr><tr><td><code>right</code></td><td>Right center position</td></tr><tr><td><code>right-start</code></td><td>Top right position</td></tr><tr><td><code>right-end</code></td><td>Bottom right position</td></tr><tr><td><code>left</code></td><td>Left center position</td></tr><tr><td><code>left-start</code></td><td>Top left position</td></tr><tr><td><code>left-end</code></td><td>Bottom left position</td></tr><tr><td><code>cover-top</code></td><td>Top center position, overlay trigger</td></tr><tr><td><code>cover-top-start</code></td><td>Top left position, overlay trigger</td></tr><tr><td><code>cover-top-end</code></td><td>Top right position, overlay trigger</td></tr><tr><td><code>cover-bottom</code></td><td>Bottom center position, overlay trigger</td></tr><tr><td><code>cover-bottom-start</code></td><td>Bottom left position, overlay trigger</td></tr><tr><td><code>cover-bottom-end</code></td><td>Bottom right position, overlay trigger</td></tr><tr><td><code>cover-left</code></td><td>Left center position, overlay trigger</td></tr><tr><td><code>cover-right</code></td><td>Right center position, overlay trigger</td></tr></tbody></table>",1),Z={class:"card"},F={id:"Methods"},G=c("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>open</code></td><td>Open Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Close Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td>This method can be called to redraw when the default slot element of Menu select changes its position and size</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),J={class:"card"},K={id:"Events"},X=c("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the menu is opened</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the open menu animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the menu is closed</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the closing menu animation ends</td><td><code>-</code></td></tr><tr><td><code>click-outside</code></td><td>Triggered when clicking outside the menu</td><td><code>event: Event</code></td></tr></tbody></table>",1),Y={class:"card"},ss={id:"Slots"},as=c("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Menu select trigger element</td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>Menu select options</td><td><code>-</code></td></tr></tbody></table>",1),ts={class:"card"},es={id:"StyleVariables"},ls=c('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--menu-select-menu-max-height</code></td><td><code>278px</code></td></tr><tr><td><code>--menu-select-menu-padding</code></td><td><code>0</code></td></tr><tr><td><code>--menu-select-menu-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--menu-select-menu-background-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--menu-option-normal-height</code></td><td><code>38px</code></td></tr><tr><td><code>--menu-option-small-height</code></td><td><code>30px</code></td></tr><tr><td><code>--menu-option-mini-height</code></td><td><code>24px</code></td></tr><tr><td><code>--menu-option-large-height</code></td><td><code>46px</code></td></tr><tr><td><code>--menu-option-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--menu-option-normal-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--menu-option-small-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--menu-option-mini-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--menu-option-large-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--menu-option-selected-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--menu-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--menu-option-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr></tbody></table>',2);function ns(cs,os,ds,ps,rs,hs){const l=o("router-link"),n=o("var-site-code-example");return p(),r("div",i,[j,a("div",m,[a("h3",g,[t(l,{to:"#Intro"},{default:e(()=>[s("#")]),_:1}),s("Intro")]),u]),a("div",v,[a("h3",b,[t(l,{to:"#BasicUsage"},{default:e(()=>[s("#")]),_:1}),s("Basic Usage")]),t(n,null,{default:e(()=>[_]),_:1})]),a("div",f,[a("h3",y,[t(l,{to:"#Size"},{default:e(()=>[s("#")]),_:1}),s("Size")]),t(n,null,{default:e(()=>[S]),_:1})]),a("div",w,[a("h3",k,[t(l,{to:"#ValueMapping"},{default:e(()=>[s("#")]),_:1}),s("Value Mapping")]),t(n,null,{default:e(()=>[M]),_:1})]),a("div",P,[a("h3",x,[t(l,{to:"#Scrollable"},{default:e(()=>[s("#")]),_:1}),s("Scrollable")]),z,t(n,null,{default:e(()=>[T]),_:1})]),a("div",E,[a("h3",B,[t(l,{to:"#OptionDisabled"},{default:e(()=>[s("#")]),_:1}),s("Option Disabled")]),t(n,null,{default:e(()=>[D]),_:1})]),a("div",V,[a("h3",C,[t(l,{to:"#Multiple"},{default:e(()=>[s("#")]),_:1}),s("Multiple")]),t(n,null,{default:e(()=>[N]),_:1})]),a("div",O,[a("h3",L,[t(l,{to:"#DisableCloseOnSelect"},{default:e(()=>[s("#")]),_:1}),s("Disable Close On Select")]),W,t(n,null,{default:e(()=>[U]),_:1})]),$,a("div",A,[a("h3",I,[t(l,{to:"#Props"},{default:e(()=>[s("#")]),_:1}),s("Props")]),R]),a("div",q,[a("h3",H,[t(l,{to:"#Placement"},{default:e(()=>[s("#")]),_:1}),s("Placement")]),Q]),a("div",Z,[a("h3",F,[t(l,{to:"#Methods"},{default:e(()=>[s("#")]),_:1}),s("Methods")]),G]),a("div",J,[a("h3",K,[t(l,{to:"#Events"},{default:e(()=>[s("#")]),_:1}),s("Events")]),X]),a("div",Y,[a("h3",ss,[t(l,{to:"#Slots"},{default:e(()=>[s("#")]),_:1}),s("Slots")]),as]),a("div",ts,[a("h3",es,[t(l,{to:"#StyleVariables"},{default:e(()=>[s("#")]),_:1}),s("Style Variables")]),ls])])}const js=d(h,[["render",ns]]);export{js as default};
