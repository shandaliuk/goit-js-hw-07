import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListElement = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(item => {
    return `
    <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
  })
  .join('');

galleryListElement.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
