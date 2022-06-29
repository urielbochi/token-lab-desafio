import axios from "axios";

export async function getEvents(userId, setEventList) {
  axios
    .get(`http://localhost:3000/event/list/${userId}`, {})
    .then((response) => {
      setEventList(response.data);
    })
    .catch((err) => console.log(err));
}

export async function postEvent(
  eventData,
  eventList,
  setEventList,
  userTokenId
) {
  axios
    .post("http://localhost:3000/event/create", {
      title: eventData.title,
      description: eventData.description,
      date: eventData.date,
      st: eventData.st,
      et: eventData.et,
      userId: userTokenId,
    })
    .then((response) => {
      setEventList([...eventList, response.data]);
      console.log({
        title: eventData.title,
        description: eventData.description,
        date: eventData.date,
        st: eventData.st,
        et: eventData.et,
        userId: userTokenId,
      });
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

export async function deleteEvent(eventId) {
  axios
    .delete(`http://localhost:3000/event/delete/${eventId}`)
    .then((response) => {})
    .catch((err) => console.log(err));
}
