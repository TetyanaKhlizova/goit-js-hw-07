import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('ul.gallery');
const htmlGallery = galleryItems.reduce((acc, {preview,  original, description}) => {
    acc += `<li> <a class="gallery__item" href='${original}'>
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
let lightbox = new SimpleLightbox('.gallery a ', {caphionsDelay: 250, captionsData: 'alt'});
console.log(galleryItems);
