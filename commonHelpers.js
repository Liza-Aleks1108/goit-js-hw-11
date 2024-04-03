(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();//! У файлі render-functions.js - функції для відображення елементів інтерфейсу.
function u(o){return o.map(({largeImageURL:t,webformatURL:c,tags:n,likes:e,views:r,comments:i,downloads:l})=>`<li>
    <a href="${t}">
        <img src="${c}" alt="${n}"/>
    </a>
        <ul>
            <li>Likes ${e}</li>
            <li>Views ${r}</li>
            <li>Comments ${i}</li>
            <li>Downloads ${l}</li>
        </ul>
    </li>`).join("")}//! У файлі pixabay-api.js зберігаються функції для HTTP-запитів.
const a="43217823-e472439c26018cf28ab0cff6b";function f(){const o=new URLSearchParams({key:a,q:s.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw Error(t.status);return t.json()}).then(t=>{console.log(t),d.insertAdjacentHTML("beforeend",u(t.hits))}).catch(t=>alert(t))}//! У файлі main.js знаходиться вся логіка роботи додатка.
const m=document.querySelector(".search-form"),s=document.querySelector(".search-input"),d=document.querySelector("ul");function h(o){if(o.preventDefault(),s.value.trim()===""){console.log("Empty string");return}f(),console.log(s.value.trim())}m.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
