const popupOpenButtonMenu = document.querySelector('.header__nav-image-menu');
const popupCloseButtonMenu = document.querySelector('.popup-menu__navigation-item_button');
const popupMenu = document.querySelector('.popup');
const buttons = document.querySelectorAll('.reproduction-button');

const cards = {
    'Франция': document.getElementById('card-france'),
    'Германия': document.getElementById('card-germany'),
    'Англия': document.getElementById('card-england')
};

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc); 
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc); 
}

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        if (popupOpened) {
            closePopup(popupOpened);
        }
    }
}



function resetSelection() {
    buttons.forEach(button => {
        button.style.background = 'rgba(212, 232, 217, 1)';
        button.style.color = ''; 
    });
    Object.values(cards).forEach(card => {
        card.style.display = 'none'; 
    });
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        resetSelection(); 

        button.style.background = 'rgba(55, 107, 68, 1)';
        button.style.color = 'rgba(244, 246, 245, 1)';

        const country = button.textContent.trim();
        if (cards[country]) {
            cards[country].style.display = 'grid'; 
        }
    });
});

popupOpenButtonMenu.addEventListener('click', () => openPopup(popupMenu));

popupCloseButtonMenu.addEventListener('click', () => closePopup(popupMenu));

popupMenu.addEventListener('mousedown', function (evt) {
    if (evt.target === popupMenu) {
        closePopup(popupMenu);
    }
});