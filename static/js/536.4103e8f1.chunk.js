(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[536],{1132:function(e,t,n){!function(e){"use strict";e.defineMode("elm",(function(){function e(e,t,n){return t(n),n(e,t)}var t=/[a-z]/,n=/[A-Z]/,r=/[a-zA-Z0-9_]/,i=/[0-9]/,o=/[0-9A-Fa-f]/,u=/[-&*+.\\/<>=?^|:]/,a=/[(),[\]{}]/,f=/[ \v\f]/;function s(){return function(x,h){if(x.eatWhile(f))return null;var k=x.next();if(a.test(k))return"{"===k&&x.eat("-")?e(x,h,function e(t){return 0==t?s():function(n,r){for(;!n.eol();){var i=n.next();if("{"==i&&n.eat("-"))++t;else if("-"==i&&n.eat("}")&&0===--t)return r(s()),"comment"}return r(e(t)),"comment"}}(1)):"["===k&&x.match("glsl|")?e(x,h,m):"builtin";if("'"===k)return e(x,h,p);if('"'===k)return x.eat('"')?x.eat('"')?e(x,h,l):"string":e(x,h,c);if(n.test(k))return x.eatWhile(r),"variable-2";if(t.test(k)){var d=1===x.pos;return x.eatWhile(r),d?"def":"variable"}if(i.test(k)){if("0"===k){if(x.eat(/[xX]/))return x.eatWhile(o),"number"}else x.eatWhile(i);return x.eat(".")&&x.eatWhile(i),x.eat(/[eE]/)&&(x.eat(/[-+]/),x.eatWhile(i)),"number"}return u.test(k)?"-"===k&&x.eat("-")?(x.skipToEnd(),"comment"):(x.eatWhile(u),"keyword"):"_"===k?"keyword":"error"}}function l(e,t){for(;!e.eol();)if('"'===e.next()&&e.eat('"')&&e.eat('"'))return t(s()),"string";return"string"}function c(e,t){for(;e.skipTo('\\"');)e.next(),e.next();return e.skipTo('"')?(e.next(),t(s()),"string"):(e.skipToEnd(),t(s()),"error")}function p(e,t){for(;e.skipTo("\\'");)e.next(),e.next();return e.skipTo("'")?(e.next(),t(s()),"string"):(e.skipToEnd(),t(s()),"error")}function m(e,t){for(;!e.eol();)if("|"===e.next()&&e.eat("]"))return t(s()),"string";return"string"}var x={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};return{startState:function(){return{f:s()}},copyState:function(e){return{f:e.f}},token:function(e,t){var n=t.f(e,(function(e){t.f=e})),r=e.current();return x.hasOwnProperty(r)?"keyword":n}}})),e.defineMIME("text/x-elm","elm")}(n(668))}}]);