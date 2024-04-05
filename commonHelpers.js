import{S as u,i as f}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();//! У файлі pixabay-api.js зберігаються функції для HTTP-запитів.
const p="43217823-e472439c26018cf28ab0cff6b";function h(){const o=new URLSearchParams({key:p,q:c.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw Error(t.status);return t.json()})}//! У файлі render-functions.js - функції для відображення елементів інтерфейсу.
function d(o){return o.map(({largeImageURL:t,webformatURL:i,tags:n,likes:e,views:r,comments:s,downloads:l})=>`<li>
    <a href="${t}">
        <img src="${i}" alt="${n}" width="360" height="155"/>
    </a>
        <ul class="characteristics">
            <li>Likes<br> <span class="span">${e}</span></li>
            <li>Views<br> <span class="span">${r}</span></li>
            <li>Comments<br> <span class="span">${s}</span></li>
            <li>Downloads<br> <span class="span">${l}</span></li>
        </ul>
    </li>`).join("")}//! У файлі main.js знаходиться вся логіка роботи додатка.
const m=new u(".list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8}),y=document.querySelector(".search-form"),a=document.querySelector(".loader"),c=document.querySelector(".search-input"),g=document.querySelector("ul");function b(o){o.preventDefault(),c.value.trim()!==""&&(L(),h().then(t=>{g.insertAdjacentHTML("beforeend",d(t.hits)),m.refresh(),t.hits.length===0&&f.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"})}).catch(t=>alert(t)).finally(()=>{S()}))}y.addEventListener("submit",b);function L(){a.classList.remove("none")}function S(){a.classList.add("none")}
//# sourceMappingURL=commonHelpers.js.map
