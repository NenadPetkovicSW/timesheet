import axios from "axios";

// TODO: Make sevices' then in services classes (Promise...)
export default axios.create({
  baseURL: "http://localhost:8080/",
  withCredentials: true,
  headers: {
    "Content-type": "application/json"
  }
});