webpackJsonp([0],{0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t(1);var r=t(6),i=o(r),u=t(7),l=o(u),c=t(8),d=o(c);t(108);var f=document.createElement("div"),s=Promise.resolve(42);s.then(function(e){(0,l["default"])("body").append("<p>promise result is "+e+" now is "+(0,d["default"])().format()+"</p>"),(0,l["default"])("p").greenify()}),f.innerHTML="<h1>Hello World, This is Webpack</h1>",document.body.appendChild(f),f.appendChild((0,i["default"])())},6:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){var e=document.createElement("h2");return e.innerHTML="Hello h2 world",e}},108:function(e,n,t){(function(e){"use strict";!function(e){var n="#556b2f";e.fn.greenify=function(){return this.css("color",n),this}}(e)}).call(n,t(7))}});