//! У файлі pixabay-api.js зберігаються функції для HTTP-запитів.

import createMarkup from './render-functions';
import { searchInput, list } from '../main';

// const для pixabay
const API_KEY = '43217823-e472439c26018cf28ab0cff6b';
export default function fetchData() {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchInput.value.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    })
    .catch(error => alert(error));
}
