"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9962],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||a;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6613:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={id:"concat"},p=void 0,l={unversionedId:"concat",id:"concat",isDocsHomePage:!1,title:"concat",description:"concat() function",source:"@site/docs/concat.md",sourceDirName:".",slug:"/concat",permalink:"/docs/concat",tags:[],version:"current",frontMatter:{id:"concat"},sidebar:"api",previous:{title:"compress",permalink:"/docs/compress"},next:{title:"concurrent",permalink:"/docs/concurrent"}},u=[{value:"concat() function",id:"concat-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],s={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"concat-function"},"concat() function"),(0,a.kt)("p",null,"Returns the result of concatenating the given iterable."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function concat<A extends Iterable<unknown> | AsyncIterable<unknown>, B extends Iterable<unknown> | AsyncIterable<unknown>>(iterable1: A, iterable2: B): ReturnConcatType<A, B>;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"ReturnConcatType","<","A, B",">"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const iter = concat([1, 2], [3, 4]);\niter.next() // {done:false, value: 1}\niter.next() // {done:false, value: 2}\niter.next() // {done:false, value: 3}\niter.next() // {done:false, value: 4}\niter.next() // {done:true, value: undefined}\n\n// with pipe\npipe(\n [3, 4],\n concat([1, 2]),\n toArray,\n); // [1, 2, 3, 4]\n\nawait pipe(\n Promise.resolve([3, 4]),\n concat([1, 2]),\n toArray,\n); // [1, 2, 3, 4]\n\n await pipe(\n [Promise.resolve(3), Promise.resolve(4)],\n toAsync,\n concat([1, 2]),\n toArray,\n); // [1, 2, 3, 4]\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/fxts-concat-mhd7d"},"Try It")),(0,a.kt)("p",null,"see ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/pipe"},"pipe"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toAsync"},"toAsync"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toArray"},"toArray")))}f.isMDXComponent=!0}}]);