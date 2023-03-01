"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1196],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4610:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={id:"dropWhile"},p=void 0,c={unversionedId:"dropWhile",id:"dropWhile",isDocsHomePage:!1,title:"dropWhile",description:"dropWhile() function",source:"@site/docs/dropWhile.md",sourceDirName:".",slug:"/dropWhile",permalink:"/docs/dropWhile",tags:[],version:"current",frontMatter:{id:"dropWhile"},sidebar:"api",previous:{title:"dropUntil",permalink:"/docs/dropUntil"},next:{title:"entries",permalink:"/docs/entries"}},s=[{value:"dropWhile() function",id:"dropwhile-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dropwhile-function"},"dropWhile() function"),(0,a.kt)("p",null,"Returns Iterable/AsyncIterable excluding elements dropped from the beginning. Elements are dropped until the value applied to ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," returns falsey."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function dropWhile<A, B = unknown>(f: (a: A) => B, iterable: Iterable<A>): IterableIterator<A>;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"IterableIterator","<","A",">"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const iter = dropWhile((a) => a < 3, [1, 2, 3, 4, 5]);\niter.next(); // {done:false, value: 3}\niter.next(); // {done:false, value: 4}\niter.next(); // {done:false, value: 5}\n\n// with pipe\npipe(\n [1, 2, 3, 4, 5],\n dropWhile((a) => a < 3),\n toArray,\n); // [3, 4, 5]\n\nawait pipe(\n Promise.resolve([1, 2, 3, 4, 5]),\n dropWhile((a) => a < 3),\n toArray,\n); // [3, 4, 5]\n\n// if you want to use asynchronous callback\nawait pipe(\n Promise.resolve([1, 2, 3, 4, 5]),\n toAsync,\n dropWhile(async (a) => a < 3),\n toArray,\n); // [3, 4, 5]\n\n// with toAsync\nawait pipe(\n [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), Promise.resolve(4), Promise.resolve(5)],\n toAsync,\n dropWhile((a) => a < 3),\n toArray,\n); // [3, 4, 5]\n\n")),(0,a.kt)("p",null,"see ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/pipe"},"pipe"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toAsync"},"toAsync"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toArray"},"toArray")))}d.isMDXComponent=!0}}]);