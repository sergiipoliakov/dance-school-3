const refs = {
  listEl: document.querySelector('.dataTime__list1'),
  closeModalBtn: document.querySelector('[data-action="close-eventbox"]'),
  modal: document.querySelector('.js-eventbox'),
  modalContent: document.querySelector('.eventbox__content'),
};

function openModal() {
  refs.modal.classList.toggle('is-open');

  window.addEventListener('keydown', onEscKeyPress);
}
function closeModal() {
  refs.modal.classList.toggle('is-open');
  window.removeEventListener('keydown', onEscKeyPress);
}

function onLinkClick(event) {
  const id = event.target.dataset.id;
  if (event.target.className === 'dataTime__link truncate-text-3') {
    openModal();
    makeFetch(id);
  }
}

function makeFetch(id) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(
    `https://egdanceschool-api.herokuapp.com/api/events/${id}`,
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      // console.log(result);
      makeModalMarkup(result);
    })
    .catch(error => console.log('error', error));
}

function makeModalMarkup({ data }) {
  // console.log(data.event);
  if (data?.event) {
    refs.modalContent.innerHTML = `<h3 class="modal__content-title">${data.event.title}</h3>

    <h1 class="modal__content-about-title">О событии</h1>
      <p class="modal__content-text">${data.event.text}</p>
      <span class="modal__content-date">${data.event.time}</span>
      <p class="modal__content-date">${data.event.date}</p>
      `;
  }
}

document.addEventListener('click', onLinkClick);
refs.closeModalBtn.addEventListener('click', closeModal);

function onEscKeyPress(evt) {
  //   console.log(evt);
  if (evt.code === 'Escape') {
    closeModal();
  }
}
