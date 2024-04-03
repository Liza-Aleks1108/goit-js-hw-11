//! У файлі render-functions.js - функції для відображення елементів інтерфейсу.

export default function createMarkup(arr) {
  return arr
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li>
    <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}"/>
    </a>
        <ul>
            <li>Likes ${likes}</li>
            <li>Views ${views}</li>
            <li>Comments ${comments}</li>
            <li>Downloads ${downloads}</li>
        </ul>
    </li>`;
      }
    )
    .join('');
}
