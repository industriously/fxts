"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3537],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=i,y=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7455:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],p={id:"isEmpty"},s=void 0,l={unversionedId:"isEmpty",id:"isEmpty",isDocsHomePage:!1,title:"isEmpty",description:"isEmpty() function",source:"@site/docs/isEmpty.md",sourceDirName:".",slug:"/isEmpty",permalink:"/docs/isEmpty",tags:[],version:"current",frontMatter:{id:"isEmpty"},sidebar:"api",previous:{title:"isArray",permalink:"/docs/isArray"},next:{title:"isNil",permalink:"/docs/isNil"}},u=[{value:"isEmpty() function",id:"isempty-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"isempty-function"},"isEmpty() function"),(0,o.kt)("p",null,"Returns true if the given value is empty value, false otherwise."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function isEmpty(value: unknown): boolean;\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'isEmpty(1); // false\nisEmpty(0); // false\nisEmpty(false); // false\nisEmpty(true); // false\nisEmpty(new Date()); // false\nisEmpty(undefined); // true\nisEmpty(null); // true\n\nisEmpty({}); // true\nisEmpty({a:1}); // false\n\nisEmpty([]); // true\nisEmpty([1]); // false\n\nisEmpty(""); // true\nisEmpty("a"); // false\n\nisEmpty(function(){}); // false\nisEmpty(Symbol("")); // false\n')))}m.isMDXComponent=!0}}]);