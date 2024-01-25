import './modal.css'

const Modal = (() => {
    const modalWindow = document.createElement('div');
    const app = document.getElementById('app');

    modalWindow.id = 'modal-window';
    modalWindow.classList.add('hidden');
    document.body.appendChild(modalWindow);

    //Methods
    const renderModal = (content) => {
        modalWindow.innerHTML = ''
        modalWindow.appendChild(content);
        modalWindow.classList.remove('hidden');
        app.classList.add('blurred');
    }

    const closeModal = () => {
        modalWindow.classList.add('hidden');
        app.classList.remove('blurred');
    }

    modalWindow.addEventListener('click', (event) => { handleClick(event) });

    function handleClick(event) {
        if (event.target.matches('#modal-window')) {
            closeModal();
        }
    }

    return { renderModal, closeModal }
})();

export default Modal;