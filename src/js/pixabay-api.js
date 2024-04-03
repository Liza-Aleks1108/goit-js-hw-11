//! У файлі pixabay-api.js зберігаються функції для HTTP-запитів.
// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import createMarkup from './render-functions';
import {
  searchInput,
  list,
  lightbox,
  createLoader,
  removeLoader,
} from '../main';

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

  // Перед пошуком за новим ключовим словом необхідно повністю очищати вміст галереї, щоб не змішувати результати запитів.
  list.innerHTML = '';

  fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log('data', data);
      list.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      lightbox.refresh();

      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
      }
    })
    .catch(error => alert(error))
    .finally(() => {
      removeLoader();
    });
}
