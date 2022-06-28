import axios from "axios";

export async function getEvents(userId, setEventList) {
  axios
    .get(`http://localhost:3000/event/list/${userId}`, {})
    .then((response) => {
      setEventList(response.data);
      console.log(response.data);
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
      startTime: eventData.stTime,
      endTime: eventData.edTime,
      userId: userTokenId,
    })
    .then((response) => {
      setEventList([...eventList, response.data]);
      console.log(response);
    })
    .catch((err) => console.log(err));
}

export async function editEvent(eventData) {
  axios
    .patch(`http://localhost:3000/event/edit/`, {
      title: eventData.title,
      description: eventData.description,
      date: eventData.date,
      st: eventData.stTime,
      et: eventData.edTime,
      id: eventData.id,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function deleteEvent(eventId) {
  axios
    .delete(`http://localhost:3000/event/delete/${eventId}`)
    .then((response) => {
    })
    .catch((err) => console.log(err));
}
