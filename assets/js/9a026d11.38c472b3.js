"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5473],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3831:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],p={id:"pick"},c=void 0,s={unversionedId:"pick",id:"pick",isDocsHomePage:!1,title:"pick",description:"pick() function",source:"@site/docs/pick.md",sourceDirName:".",slug:"/pick",permalink:"/docs/pick",tags:[],version:"current",frontMatter:{id:"pick"},sidebar:"api",previous:{title:"partition",permalink:"/docs/partition"},next:{title:"pickBy",permalink:"/docs/pickBy"}},u=[{value:"pick() function",id:"pick-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],l={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pick-function"},"pick() function"),(0,a.kt)("p",null,"Returns a partial copy of an object containing given keys."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function pick<T extends object, U extends readonly []>(iterable: U, obj: T): Record<string, never>;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Record","<","string, never",">"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const person = {\n  name: "james",\n  age: 40,\n  numberOfKids: 2,\n  team: "Software Development",\n  preferredLanguage: "Rust",\n};\n\nconst dad = pick(["name", "age", "numberOfKids"], person);\n// { name: "james", age: 40, numberOfKids: 2 }\n\nconst developer = pick(["name", "team", "preferredLanguage"], person);\n// { name: "james", team: "Software Development", preferredLanguage: "Rust" }\n\n// with pipe\npipe(\n person,\n pick(["name", "age", "numberOfKids"]),\n);\n\n// if you want to use AsyncIterable as the list of property names\nconst anonymousDeveloper = await pick(toAsync(["preferredLanguage"] as const), person);\n')),(0,a.kt)("p",null,"see ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/pipe"},"pipe"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toAsync"},"toAsync"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/omit"},"omit"),","))}f.isMDXComponent=!0}}]);