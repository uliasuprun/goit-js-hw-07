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

galleryContainer.addEventListener('click', openModal);

function openModal(e)  {
    if (!e.target.classList.contains('gallery__image')) {
        return;
    } else {
        const instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}" width="800" height="600">`,
        {onShow: () => {window.addEventListener('keydown', handleEscPress)},
        onClose: () => {window.removeEventListener('keydown', handleEscPress)}
    });
    instance.show();

function handleEscPress (e) {
    if (e.code === "Escape") {
        instance.close()}
}
}
}