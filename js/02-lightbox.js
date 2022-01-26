import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('ul.gallery');
const htmlGallery = galleryItems.reduce((acc, {preview, description}) => {
    acc += `<li> <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image"
   src='${preview}',
    alt='${description}', />
    </a> </Li> `;
    return acc;
},'');
containerGallery.insertAdjacentHTML('beforeend', htmlGallery);
containerGallery.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    console.log(event.target);
    
      
}
let lightbox = new SimpleLightbox('.gallery ', '${htmlGallery}');
console.log(galleryItems);
