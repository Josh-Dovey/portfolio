parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
function e(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=t(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,d=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return s=e.done,e},e:function(e){d=!0,a=e},f:function(){try{s||null==o.return||o.return()}finally{if(d)throw a}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var o=document,r=o.getElementById("js-portfolio"),i=o.getElementById("js-natours"),a=o.getElementById("js-trillo"),s=o.getElementById("js-omnifood"),d=o.getElementById("js-nexter"),l=o.getElementById("js-noticeboard"),c=function(){o.documentElement.style.setProperty("--bg","#000"),o.documentElement.style.setProperty("--bg-2","#0f0f0f"),o.documentElement.style.setProperty("--text","#fff"),o.documentElement.style.setProperty("--input","#151515"),r.classList.remove("project-box-portfolio"),i.classList.remove("project-box-natours"),a.classList.remove("project-box-trillo"),s.classList.remove("project-box-omnifood"),d.classList.remove("project-box-nexter"),l.classList.remove("project-box-noticeboard"),r.classList.add("project-box-portfolio-dark"),i.classList.add("project-box-natours-dark"),a.classList.add("project-box-trillo-dark"),s.classList.add("project-box-omnifood-dark"),d.classList.add("project-box-nexter-dark"),l.classList.add("project-box-noticeboard-dark"),o.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")},f=function(){o.documentElement.style.setProperty("--bg","#fff"),o.documentElement.style.setProperty("--bg-2","#fff"),o.documentElement.style.setProperty("--text","#000"),o.documentElement.style.setProperty("--input","#fff"),r.classList.add("project-box-portfolio"),i.classList.add("project-box-natours"),a.classList.add("project-box-trillo"),s.classList.add("project-box-omnifood"),d.classList.add("project-box-nexter"),l.classList.add("project-box-noticeboard"),r.classList.remove("project-box-portfolio-dark"),i.classList.remove("project-box-natours-dark"),a.classList.remove("project-box-trillo-dark"),s.classList.remove("project-box-omnifood-dark"),d.classList.remove("project-box-nexter-dark"),l.classList.remove("project-box-noticeboard-dark"),localStorage.setItem("theme","light"),o.documentElement.classList.remove("dark")};("dark"===localStorage.getItem("theme")||window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&"light"!==localStorage.getItem("theme"))&&c(),"light"===localStorage.getItem("theme")&&f();var u=window.screen.availHeight,m=o.getElementById("nav-box"),v=window.screen.availWidth;900>v?m.classList.add("nav-bg-fill"):o.addEventListener("scroll",function(){window.scrollY+300>u?m.classList.add("nav-bg-fill"):m.classList.remove("nav-bg-fill")});var g=o.getElementById("js-theme-switch");g.addEventListener("click",function(){o.documentElement.classList.contains("dark")?f():c()}),function(){var t,n;function r(){t=o.querySelectorAll(".hidden"),n=window.innerHeight}function i(){var o,r=e(t);try{for(r.s();!(o=r.n()).done;){var i=o.value;i.getBoundingClientRect().top-n<=-200&&(i.classList.add("fade-up-element"),i.classList.remove("hidden"))}}catch(a){r.e(a)}finally{r.f()}}window.addEventListener("scroll",i),window.addEventListener("resize",r),r(),i()}(),function(){var t,n;function r(){t=o.querySelectorAll(".hidden-fade"),n=window.innerHeight}function i(){var o,r=e(t);try{for(r.s();!(o=r.n()).done;){var i=o.value;i.getBoundingClientRect().top-n<=-200&&(i.classList.add("fade-in"),i.classList.remove("hidden-fade"))}}catch(a){r.e(a)}finally{r.f()}}window.addEventListener("scroll",i),window.addEventListener("resize",r),r(),i()}(),function(){var t,n;function r(){t=o.querySelectorAll(".hidden-fade-left"),n=window.innerHeight}function i(){var o,r=e(t);try{for(r.s();!(o=r.n()).done;){var i=o.value;i.getBoundingClientRect().top-n<=-200&&(i.classList.add("fade-left"),i.classList.remove("hidden-fade-left"))}}catch(a){r.e(a)}finally{r.f()}}window.addEventListener("scroll",i),window.addEventListener("resize",r),r(),i()}(),function(){var t,n;function r(){t=o.querySelectorAll(".hidden-fade-right"),n=window.innerHeight}function i(){var o,r=e(t);try{for(r.s();!(o=r.n()).done;){var i=o.value;i.getBoundingClientRect().top-n<=-200&&(i.classList.add("fade-right"),i.classList.remove("hidden-fade-right"))}}catch(a){r.e(a)}finally{r.f()}}window.addEventListener("scroll",i),window.addEventListener("resize",r),r(),i()}(),function(){var t,n;function r(){t=o.querySelectorAll(".hidden-extend"),n=window.innerHeight}function i(){var o,r=e(t);try{for(r.s();!(o=r.n()).done;){var i=o.value;i.getBoundingClientRect().top-n<=-200&&(i.classList.add("extend"),i.classList.remove("hidden-extend"))}}catch(a){r.e(a)}finally{r.f()}}window.addEventListener("scroll",i),window.addEventListener("resize",r),r(),i()}(),function(){var t,n;function r(){t=o.querySelectorAll(".hidden-bg-1"),n=window.innerHeight}function i(){var o,r=e(t);try{for(r.s();!(o=r.n()).done;){var i=o.value;i.getBoundingClientRect().top-n<=-200&&(i.classList.add("bg-left"),i.classList.remove("hidden-bg-1"))}}catch(a){r.e(a)}finally{r.f()}}window.addEventListener("scroll",i),window.addEventListener("resize",r),r(),i()}(),function(){var t,n;function r(){t=o.querySelectorAll(".hidden-bg-2"),n=window.innerHeight}function i(){var o,r=e(t);try{for(r.s();!(o=r.n()).done;){var i=o.value;i.getBoundingClientRect().top-n<=-200&&(i.classList.add("bg-right"),i.classList.remove("hidden-bg-2"))}}catch(a){r.e(a)}finally{r.f()}}window.addEventListener("scroll",i),window.addEventListener("resize",r),r(),i()}();
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/bundle.js.map