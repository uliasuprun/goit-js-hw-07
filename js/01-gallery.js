import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);


function createGalleryCardsMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `    
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
    `;
})
.join('');
}

function onGalleryContainerClick(e) {
    e.preventDefault();

if (!e.target.classList.contains('gallery__image')) {
    return;
}
}

function openModal(e)  {

    if (e.target.classList.contains('gallery__image')) {
    const instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}">`
    );
    instance.show();
}
}

galleryContainer.addEventListener('click', openModal);




