(()=>{var t={565:()=>{},396:()=>{},654:()=>{}},e={};function n(a){var c=e[a];if(void 0!==c)return c.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(396),e=n.n(t),a=n(654),c=n.n(a),s=n(565),o=n.n(s);function d(t){document.querySelectorAll(".nav-button").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}document.getElementById("content").appendChild(function(){const t=document.createElement("div");t.classList.add("header");const n=document.createElement("div");return n.classList.add("restaurant-name"),n.textContent="Scran St Radio",t.appendChild(n),t.appendChild(function(){const t=document.createElement("div");t.classList.add("nav-bar");const n=document.createElement("button");n.classList.add("nav-button"),n.textContent="Home",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(d(n),e()())}));const a=document.createElement("button");a.classList.add("nav-button"),a.textContent="Menu",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(d(a),c()())}));const s=document.createElement("button");return s.classList.add("nav-button"),s.textContent="Contact",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(d(s),o()())})),t.appendChild(n),t.appendChild(a),t.appendChild(s),t}()),t}())})()})();