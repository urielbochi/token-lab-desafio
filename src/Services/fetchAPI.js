import axios from "axios";


export async function registerAccount(loginData, msg, setMsg) {
  axios
    .post("http://localhost:3000/register", {
      name: loginData.username,
      email: loginData.email,
      password: loginData.password,
      confirmPassword: loginData.confirmPassword
    })
    .then((response) => {
        console.log(response.data)
        setMsg({ sucess: "Your account has been successfully created!"})
    } )
    .catch((err) => setMsg(err.response.data));
}


export async function postEvent(eventData, eventList, setEventList) {
    axios.post('http://localhost:3000/event/create', {
        title: eventData.title,
        description: eventData.description,
        date: eventData.date,
        startTime: eventData.stTime,
        endTime: eventData.edTime,
        userId: 1,
    }).then((response) => {
        setEventList([...eventList, response.data])

    }).catch((err) => console.log(err))
}


export async function getEvents(userId, setEventList) {
    axios.get(`http://localhost:3000/event/list/${userId}`, {
    }).then((response) => setEventList(response.data)).catch((err) => console.log(err))
}