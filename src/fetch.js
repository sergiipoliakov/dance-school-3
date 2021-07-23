let events;

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

fetch('https://eg-dance-school-api.herokuapp.com/api/events', requestOptions)
  .then(response => response.json())
  .then(result => {
    events = result.data.events;
    const eventsList = document.querySelector('.dataTime__list1');
    if (eventsList) {
      eventsList.innerHTML = events.map(
        event =>
          `<li class="dataTime__item">
          <h3 class="event_list-title">${event.title}</h3>
              <p class="dataTime__link truncate-text-3" data-id="${event.id}">${event.text}</p>
              <p class="dataTime__from">${event.date}</p>
            </li>`,
      );
    }

    // console.log(events);
  })
  .catch(error => console.log('error', error));

// console.log(eventsList);
// console.log(events);
