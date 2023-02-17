import '../sass/style.scss';

$(document).ready(() => {
    const modal = document.querySelector('.modal'),
        overlay = document.querySelector('.overlay');

    function openModal() {
        const btns = document.querySelectorAll('.btn');
        btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const title = btn.getAttribute('data-title');
                if (title) {
                    modal.querySelector('.modal-subtitle').textContent = title;
                }
                modal.classList.add('active');
                overlay.classList.add('active');
            });
        });
    }

    function closeModal() {
        overlay.addEventListener('click', () => {
            modal.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    openModal();
    closeModal();
});
