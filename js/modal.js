const modal = () => {

    const modal = document.querySelector('.search-model');
    const modalBtn = document.querySelector('.icon_search');
    const modalClose = modal.querySelector('.search-close-switch');
    const modalInput = modal.querySelector('#search-input');


    modalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modalInput.addEventListener('click', () => {
        console.log(modalInput.value);
    });
};

modal();
