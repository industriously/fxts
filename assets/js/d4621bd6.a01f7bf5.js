"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9829],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2091:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"take"},c=void 0,p={unversionedId:"take",id:"take",isDocsHomePage:!1,title:"take",description:"take() function",source:"@site/docs/take.md",sourceDirName:".",slug:"/take",permalink:"/docs/take",tags:[],version:"current",frontMatter:{id:"take"},sidebar:"api",previous:{title:"reject",permalink:"/docs/reject"},next:{title:"takeUntil",permalink:"/docs/takeUntil"}},u=[{value:"take() function",id:"take-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],s={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"take-function"},"take() function"),(0,o.kt)("p",null,"Returns Iterable/AsyncIterable that taken the first argument ",(0,o.kt)("inlineCode",{parentName:"p"},"l")," values from iterable"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function take<A>(l: number, iterable: Iterable<A>): IterableIterator<A>;\n\ndeclare function take<A>(l: number, iterable: AsyncIterable<A>): AsyncIterableIterator<A>;\n\ndeclare function take<A extends Iterable<unknown> | AsyncIterable<unknown>>(l: number): (iterable: A) => ReturnIterableIteratorType<A>;\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const iter = take(2, [0, 1, 2, 3, 4, 5, 6]);\niter.next() // {done:false, value: 0}\niter.next() // {done:false, value: 1}\niter.next() // {done:true, value: undefined}\n\n// with pipe\npipe(\n [0, 1, 2, 3, 4, 5, 6],\n take(2),\n toArray,\n); // [0, 1]\n\nawait pipe(\n Promise.resolve([0, 1, 2, 3, 4, 5, 6]),\n take(2),\n toArray,\n); // [0, 1]\n\n// with toAsync\nawait pipe(\n [Promise.resolve(0), Promise.resolve(1), Promise.resolve(2),\n  Promise.resolve(3), Promise.resolve(4), Promise.resolve(5), Promise.resolve(6)],\n toAsync,\n take(2),\n toArray,\n); // [0, 1]\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/fxts-take-372bs"},"Try It")),(0,o.kt)("p",null,"see ",(0,o.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/pipe"},"pipe"),", ",(0,o.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toAsync"},"toAsync"),", ",(0,o.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toArray"},"toArray")))}f.isMDXComponent=!0}}]);