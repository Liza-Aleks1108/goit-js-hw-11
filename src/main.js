//! У файлі main.js знаходиться вся логіка роботи додатка.
import fetchData from '../src/js/pixabay-api';

// Пошук елементів форми та список
const searchForm = document.querySelector('.search-form');
export const searchInput = document.querySelector('.search-input');
export const list = document.querySelector('ul');
// const searchButton = searchForm.querySelector('.search-button');

// handleSubmit
function handleSubmit(event) {
  event.preventDefault();

  if (searchInput.value.trim() === '') {
    console.log('Empty string');
    return;
  }
  fetchData();
  console.log(searchInput.value.trim());
}

// Додаємо слухача події на форму
searchForm.addEventListener('submit', handleSubmit);
