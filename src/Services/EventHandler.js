import axios from "axios";

export async function getEvents(authToken, setEventList) {
  axios
    .get(`http://localhost:3000/event`, { headers: { Authorization: authToken } })
    .then((response) => {
      setEventList(response.data);
    })
    .catch((err) => console.log(err));
}

export async function postEvent(
  eventData,
  eventList,
  setEventList,
  authToken
) {
  axios
    .post("http://localhost:3000/event", {
      title: eventData.title,
      description: eventData.description,
      date: eventData.date,
      st: eventData.st,
      et: eventData.et,
    }, { headers: { Authorization: authToken } })
    .then((response) => {
      setEventList([...eventList, response.data]);
    })
    .catch((err) => console.log(err));
}

export async function editEvent(eventData) {
  axios
    .patch(`http://localhost:3000/event/edit/`, {
      title: eventData.title,
      description: eventData.description,
      date: eventData.date,
      st: eventData.st,
      et: eventData.et,
      id: eventData.id,
    })
    .then((response) => {
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function deleteEvent(eventId, authToken) {
  axios
    .delete(`http://localhost:3000/event/${eventId}`, { headers: { Authorization: authToken } })
    .then((response) => {})
    .catch((err) => console.log(err));
}
