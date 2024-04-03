//! У файлі main.js знаходиться вся логіка роботи додатка.

import fetchData from '../src/js/pixabay-api';

// SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Пошук елементів форми та список
const searchForm = document.querySelector('.search-form');
const searchLoading = document.querySelector('.loader');
export const searchInput = document.querySelector('.search-input');
export const list = document.querySelector('ul');

// handleSubmit
function handleSubmit(event) {
  event.preventDefault();

  if (searchInput.value.trim() === '') {
    console.log('Empty string');
    return;
  }
  createLoader();
  fetchData();
}

export const lightbox = new SimpleLightbox('.list a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

// Додаємо слухача події на форму
searchForm.addEventListener('submit', handleSubmit);

// Функція для створення елемента loader
export function createLoader() {
  searchLoading.classList.remove('none');
}

// Функція для видалення елемента loader
export function removeLoader() {
  searchLoading.classList.add('none');
}
