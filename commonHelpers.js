import{i as f,S as p}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();//! У файлі render-functions.js - функції для відображення елементів інтерфейсу.
function h(o){return o.map(({largeImageURL:t,webformatURL:i,tags:n,likes:e,views:r,comments:s,downloads:u})=>`<li>
    <a href="${t}">
        <img src="${i}" alt="${n}" width="360" height="155"/>
    </a>
        <ul class="characteristics">
            <li>Likes<br> <span class="span">${e}</span></li>
            <li>Views<br> <span class="span">${r}</span></li>
            <li>Comments<br> <span class="span">${s}</span></li>
            <li>Downloads<br> <span class="span">${u}</span></li>
        </ul>
    </li>`).join("")}//! У файлі pixabay-api.js зберігаються функції для HTTP-запитів.
const d="43217823-e472439c26018cf28ab0cff6b";function m(){const o=new URLSearchParams({key:d,q:l.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});a.innerHTML="",fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw Error(t.status);return t.json()}).then(t=>{a.insertAdjacentHTML("beforeend",h(t.hits)),b.refresh(),t.hits.length===0&&f.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"})}).catch(t=>alert(t)).finally(()=>{S()})}//! У файлі main.js знаходиться вся логіка роботи додатка.
const y=document.querySelector(".search-form"),c=document.querySelector(".loader"),l=document.querySelector(".search-input"),a=document.querySelector("ul");function g(o){o.preventDefault(),l.value.trim()!==""&&(L(),m())}const b=new p(".list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8});y.addEventListener("submit",g);function L(){c.classList.remove("none")}function S(){c.classList.add("none")}
//# sourceMappingURL=commonHelpers.js.map
