import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListElement = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(item => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
      <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    </a>
  </div>`;
  })
  .join('');

galleryListElement.insertAdjacentHTML('afterbegin', galleryMarkup);

const onGalleryListItemClick = event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const originalImage = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">
    `,
    {
      onShow() {
        document.addEventListener('keydown', onButtonPush);
      },
      onClose() {
        document.removeEventListener('keydown', onButtonPush);
      },
    }
  );

  originalImage.show();

  function onButtonPush(event) {
    if (event.code !== 'Escape') {
      return;
    }
    originalImage.close();
  }
};

galleryListElement.addEventListener('click', onGalleryListItemClick);
