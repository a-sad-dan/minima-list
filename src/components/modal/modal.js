import './modal.css'

const Modal = (() => {
    const modalWindow = document.createElement('div');
    modalWindow.id = 'modal-window';
    modalWindow.classList.add('hidden');
    document.body.appendChild(modalWindow);

    //Methods
    const renderModal = (content) => {
        modalWindow.innerHTML = ''
        modalWindow.appendChild(content);
        modalWindow.classList.remove('hidden');
    }

    const closeModal = () => {
        modalWindow.classList.add('hidden');
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