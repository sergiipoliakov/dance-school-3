// (() => {
//   const listEl = document.querySelector('.dataTime__list1');
//   console.log(listEl);

//   const refs = {
//     openModalEl: document.querySelector(
//       '[data-id="c73906d6-bbec-439b-a137-8559d9b46bd8"]',
//     ),
//     modal: document.querySelector('.js-eventbox'),
//   };

//   function openModal(event) {
//     const linkId = event.target.dataset.id;
//   }

//   listEl.addEventListener('click', openModal);
// })();

const refs = {
  listEl: document.querySelector('.dataTime__list1'),
  closeModalBtn: document.querySelector('[data-action="close-eventbox"]'),
  modal: document.querySelector('.js-eventbox'),
  modalContent: document.querySelector('.eventbox__content'),
};
console.log(refs.modal);

function openModal() {
  refs.modal.classList.toggle('is-open');
}
function closeModal() {
  refs.modal.classList.toggle('is-open');
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
    `https://eg-dance-school-api.herokuapp.com/api/events/${id}`,
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      console.log(result);
      makeModalMarkup(result);
    })
    .catch(error => console.log('error', error));
}

function makeModalMarkup({ data }) {
  console.log(data.event);
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
