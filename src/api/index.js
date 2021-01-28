import axios from "axios";

const API = {
   getTodos: () => axios.get(`http://localhost:4000/todos`)
}

export default API;