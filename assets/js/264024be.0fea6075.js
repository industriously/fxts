"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5372],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return b}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=a,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||c;return r?t.createElement(d,o(o({ref:n},u),{},{components:r})):t.createElement(d,o({ref:n},u))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7737:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var t=r(7462),a=r(3366),c=(r(7294),r(3905)),o=["components"],l={id:"scan"},i=void 0,s={unversionedId:"scan",id:"scan",isDocsHomePage:!1,title:"scan",description:"scan() function",source:"@site/docs/scan.md",sourceDirName:".",slug:"/scan",permalink:"/docs/scan",tags:[],version:"current",frontMatter:{id:"scan"},sidebar:"api",previous:{title:"reverse",permalink:"/docs/reverse"},next:{title:"slice",permalink:"/docs/slice"}},u=[{value:"scan() function",id:"scan-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],f={toc:u};function p(e){var n=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"scan-function"},"scan() function"),(0,c.kt)("p",null,"Returns a Iterable/AsyncIterable of successively reduced values from the left. It's similar to reduce"),(0,c.kt)("b",null,"Signature:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function scan<A>(f: (a: A, b: A) => A, iterable: Iterable<A>): IterableIterator<A>;\n\ndeclare function scan<A extends readonly []>(f: Arrow, iterable: A): IterableIterator<never>;\n\ndeclare function scan<A, B>(f: (a: B, b: A) => B, iterable: Iterable<A>): IterableIterator<B>;\n\ndeclare function scan<A extends readonly [], B>(f: Arrow, seed: B, iterable: A): IterableIterator<B>;\n\ndeclare function scan<A, B>(f: (a: B, b: A) => B, seed: B, iterable: Iterable<A>): IterableIterator<B>;\n\ndeclare function scan<A>(f: (a: A, b: A) => A | Promise<A>, iterable: AsyncIterable<A>): AsyncIterableIterator<A>;\n\ndeclare function scan<A, B>(f: (a: Awaited<B>, b: A) => B | Promise<B>, iterable: AsyncIterable<A>): AsyncIterableIterator<Awaited<B>>;\n\ndeclare function scan<A, B>(f: (a: Awaited<B>, b: A) => B | Promise<B>, seed: B | Promise<B>, iterable: AsyncIterable<A>): AsyncIterableIterator<B>;\n\ndeclare function scan<A extends Iterable<unknown> | AsyncIterable<unknown>, B>(f: (a: B, b: IterableInfer<A>) => B | Promise<B>): (iterable: A) => ReturnIterableIteratorType<A, B>;\n\ndeclare function scan<A extends Iterable<unknown> | AsyncIterable<unknown>>(f: (a: IterableInfer<A>, b: IterableInfer<A>) => IterableInfer<A> | Promise<IterableInfer<A>>): (iterable: A) => ReturnIterableIteratorType<A, IterableInfer<A>>;\n")),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"const iter = scan((acc, cur) => acc * cur, 1, [1, 2, 3, 4 ]);\niter.next(); // {value: 1, done:false}\niter.next(); // {value: 1, done:false}\niter.next(); // {value: 2, done:false}\niter.next(); // {value: 6, done:false}\niter.next(); // {value: 24, done:false}\niter.next(); // {value: undefined, done: true}\n\n// with pipe\npipe(\n  [1, 2, 3, 4],\n  scan((acc, cur) => acc * cur),\n  toArray,\n); // [1, 2, 6, 24]\n")))}p.isMDXComponent=!0}}]);