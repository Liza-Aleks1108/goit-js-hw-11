import{i as f,S as m}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();//! У файлі render-functions.js - функції для відображення елементів інтерфейсу.
function d(o){return o.map(({largeImageURL:t,webformatURL:s,tags:n,likes:e,views:r,comments:i,downloads:u})=>`<li>
    <a href="${t}">
        <img src="${s}" alt="${n}"/>
    </a>
        <ul>
            <li>Likes ${e}</li>
            <li>Views ${r}</li>
            <li>Comments ${i}</li>
            <li>Downloads ${u}</li>
        </ul>
    </li>`).join("")}//! У файлі pixabay-api.js зберігаються функції для HTTP-запитів.
const h="43217823-e472439c26018cf28ab0cff6b";function p(){const o=new URLSearchParams({key:h,q:l.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});c.innerHTML="",fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw Error(t.status);return t.json()}).then(t=>{console.log("data",t),c.insertAdjacentHTML("beforeend",d(t.hits)),L.refresh(),t.hits.length===0&&f.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"})}).catch(t=>alert(t)).finally(()=>{S()})}//! У файлі main.js знаходиться вся логіка роботи додатка.
const y=document.querySelector(".search-form"),a=document.querySelector(".loader"),l=document.querySelector(".search-input"),c=document.querySelector("ul");function g(o){if(o.preventDefault(),l.value.trim()===""){console.log("Empty string");return}b(),p()}const L=new m(".list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8});y.addEventListener("submit",g);function b(){a.classList.remove("none")}function S(){a.classList.add("none")}
//# sourceMappingURL=commonHelpers.js.map
