import images from './gallery-items.js';
console.log(images);

const galleryList = document.querySelector('.js-gallery');

const imagesMarkup = createImagesMarkup(images);

galleryList.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(images) {
  return images
    .map(({ preview, original, description, name }) => {
      return `
    <li class="item gallery__item">
    
  <a
    class="gallery__link"
   href='${original}';
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    })
    .join('');
}
