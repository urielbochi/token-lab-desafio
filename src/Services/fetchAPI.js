import axios from "axios";

export async function registerAccount(loginData, setMsg) {
  axios
    .post("http://localhost:3000/register", {
      name: loginData.username,
      email: loginData.email,
      password: loginData.password,
      confirmPassword: loginData.confirmPassword,
    })
    .then((response) => {
      console.log(response.data);
      setMsg({ sucess: "Your account has been successfully created!" });
    })
    .catch((err) => setMsg(err.response.data));
}

export async function loginAccount(loginInput, setMsg, setStatus) {
  axios
    .post("http://localhost:3000/login", {
      email: loginInput.email,
      password: loginInput.password,
    })
    .then((response) => {
      localStorage.setItem(
        "userToken",
        JSON.stringify(response.data.access_token)
      );
      setStatus(response.status);
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
      setMsg(err.response.data);
    });
}

export async function getUser(setUserIdData, userToken) {
  const AuthStr = "Bearer ".concat(userToken);
  axios
    .get("http://localhost:3000/user", { headers: { Authorization: AuthStr } })
    .then((response) => {
      setUserIdData(response.data.id);
    })
    .catch((error) => {
      console.log("error " + error);
    });
}

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
      console.log(eventData);
    });
}
