import{S as f,i as p}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();//! У файлі pixabay-api.js зберігаються функції для HTTP-запитів.
const h="43217823-e472439c26018cf28ab0cff6b";function m(s){const r=new URLSearchParams({key:h,q:a.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(o=>{if(!o.ok)throw Error(o.status);return o.json()})}//! У файлі render-functions.js - функції для відображення елементів інтерфейсу.
function d(s){return s.map(({largeImageURL:r,webformatURL:o,tags:i,likes:e,views:t,comments:n,downloads:u})=>`<li>
    <a href="${r}">
        <img src="${o}" alt="${i}" width="360" height="155"/>
    </a>
        <ul class="characteristics">
            <li>Likes<br> <span class="span">${e}</span></li>
            <li>Views<br> <span class="span">${t}</span></li>
            <li>Comments<br> <span class="span">${n}</span></li>
            <li>Downloads<br> <span class="span">${u}</span></li>
        </ul>
    </li>`).join("")}//! У файлі main.js знаходиться вся логіка роботи додатка.
const y=new f(".list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8}),g=document.querySelector(".search-form"),l=document.querySelector(".loader"),a=document.querySelector(".search-input"),c=document.querySelector("ul");function b(s){s.preventDefault(),a.value.trim()!==""&&(L(),m(a.value.trim()).then(r=>{c.innerHTML="",c.insertAdjacentHTML("beforeend",d(r.hits)),y.refresh(),r.hits.length===0&&p.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"})}).catch(r=>alert(r)).finally(()=>{v()}))}g.addEventListener("submit",b);function L(){l.classList.remove("none")}function v(){l.classList.add("none")}
//# sourceMappingURL=commonHelpers.js.map
