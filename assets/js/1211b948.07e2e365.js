"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4650],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,y=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return n?t.createElement(y,c(c({ref:r},p),{},{components:n})):t.createElement(y,c({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6286:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={id:"unicodeToArray"},u=void 0,l={unversionedId:"unicodeToArray",id:"unicodeToArray",isDocsHomePage:!1,title:"unicodeToArray",description:"unicodeToArray() function",source:"@site/docs/unicodeToArray.md",sourceDirName:".",slug:"/unicodeToArray",permalink:"/docs/unicodeToArray",tags:[],version:"current",frontMatter:{id:"unicodeToArray"},sidebar:"api",previous:{title:"toArray",permalink:"/docs/toArray"}},p=[{value:"unicodeToArray() function",id:"unicodetoarray-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],s={toc:p};function f(e){var r=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"unicodetoarray-function"},"unicodeToArray() function"),(0,a.kt)("p",null,"Converts a Unicode ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," to an array."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function unicodeToArray(string: string): [] | RegExpMatchArray;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"[","]"," ","|"," RegExpMatchArray"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"}," unicodeToArray('\ud83d\ude47\u200d\u2642\ufe0f\ud83e\udd29\ud83d\ude2d'); // ['\ud83d\ude47\u200d\u2642\ufe0f','\ud83e\udd29','\ud83d\ude2d'];\n")))}f.isMDXComponent=!0}}]);