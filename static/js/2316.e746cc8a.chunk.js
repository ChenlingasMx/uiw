(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2316],{84934:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=84934,e.exports=n},86082:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(50189),o=t(53782),i=t(11026),c=t(41473),s=t(91025),d=t(75752),a=t(64508),u=t(69286),l=["version","dependencies","codePen","codeSandbox"];function p(e){var n=e.version,t=e.dependencies,i=e.codePen,c=e.codeSandbox,s=(0,o.Z)(e,l),d=(0,r.Z)({},s);return i&&(d.codePenOption={title:"uiw".concat(n," - demo"),includeModule:["uiw"],js:(d.code||"").replace("_mount_",'document.getElementById("container")'),html:'<div id="container" style="padding: 24px"></div>',css_external:"https://unpkg.com/uiw@".concat(n,"/dist/uiw.min.css"),js_external:"https://unpkg.com/react@17.x/umd/react.development.js;https://unpkg.com/react-dom@17.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@".concat(n,"/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js")}),c&&(d.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n            "template": "node",\n            "container": {\n              "startScript": "start",\n              "node": "14"\n            }\n          }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:(d.code||"").replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"uiw-demo",description:"uiw v".concat(n," - demo"),dependencies:{react:"^17.0.2","react-dom":"^17.0.2",uiw:"latest"},devDependencies:{"@kkt/less-modules":"~7.1.1",kkt:"~7.1.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,u.jsx)(a.Z,(0,r.Z)((0,r.Z)({},d),{},{dependencies:t,style:{marginBottom:0}}))}var h=t(50482);function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.path,t=/^http/.test(n||"")?n:"https://github.com/uiwjs/uiw/blob/master/".concat(n);return(0,u.jsxs)(c.Fragment,{children:["\u72af\u4e86\u9519\u8bef\u8fd8\u662f\u60f3\u5bf9\u6587\u4ef6\u505a\u51fa\u8d21\u732e\uff1f",t&&(0,u.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,u.jsx)("br",{}),(0,u.jsx)("a",{href:"https://github.com/uiwjs/uiw/issues",target:"_blank",rel:"noopener noreferrer",children:"\u53cd\u9988\u5efa\u8bae"}),(0,u.jsx)(h.Divider,{type:"vertical"}),(0,u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw/issues/new",children:"\u63d0\u4ea4bug"}),(0,u.jsx)(h.Divider,{type:"vertical"}),(0,u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"Github"}),(0,u.jsx)(h.Divider,{type:"vertical"}),(0,u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,u.jsx)(h.Divider,{type:"vertical"}),(0,u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt-ssr",children:"@kkt/ssr"}),(0,u.jsx)(h.Divider,{type:"vertical"}),(0,u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://uiw.gitee.io",children:"\u56fd\u5185\u955c\u50cf"})]})}var m="index_docinfo__3Vx8S",v="index_markdown__hcQCp",k=["inline","node"],x=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t};function b(e){var n=e.renderPage,t=e.dependencies,a=e.path,l=(0,c.useState)(""),h=(0,i.Z)(l,2),b=h[0],j=h[1],g=d.i8||"2.0.0";return(0,c.useEffect)((function(){n&&n().then((function(e){j(e)})).catch((function(){}))}),[]),b?(0,u.jsxs)("div",{children:[(0,u.jsx)(s.Z,{source:b,className:v,components:{code:function(e){var n=e.inline,i=e.node,c=(0,o.Z)(e,k),s=c,d=s.noPreview,a=s.bordered,l=s.noScroll,h=s.bgWhite,f=s.noCode,m=s.codePen,v=s.codeSandbox;if(n)return(0,u.jsx)("code",(0,r.Z)({},c));var b={noPreview:d,bordered:a,noScroll:l,bgWhite:h,noCode:f,codePen:m,codeSandbox:v};return 0===Object.keys(b).filter((function(e){return void 0!==b[e]})).length?(0,u.jsx)("code",(0,r.Z)({},c)):(0,u.jsx)(p,{version:g,code:x(i.children),dependencies:t,noPreview:d,bordered:a,noScroll:l,bgWhite:h,noCode:f,codePen:m,codeSandbox:v})}}}),(0,u.jsx)("div",{className:m,children:(0,u.jsx)(f,{path:a})})]}):null}},62462:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(27791),o=t(57135),i=t.n(o),c=(t(41473),t(50482)),s=t(86082),d=t(69286);function a(){return(0,d.jsx)(s.Z,{path:"https://github.com/uiwjs/uiw/tree/master/packages/react-popover/README.md",dependencies:{Popover:c.Popover,Button:c.Button,Icon:c.Icon,Row:c.Row,Input:c.Input,Col:c.Col,Card:c.Card},renderPage:(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(6536).then(t.bind(t,36536));case 2:return n=e.sent,e.abrupt("return",n.default||n);case 4:case"end":return e.stop()}}),e)})))})}}}]);
//# sourceMappingURL=2316.e746cc8a.chunk.js.map