import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryCardsMarkup(galleryItems);

const simplelightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

function createGalleryCardsMarkup(array) {
    return array
    .map(item => {
        return `
        <a class="gallery__item" href="${item.original}">
            <img 
            class="gallery__image" 
            src="${item.preview}" 
            alt="${item.description}" />
        </a>`
    })
    .join('');
}