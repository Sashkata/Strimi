import axios from "axios";

//const port = process.env.PORT;
export default axios.create({
  baseURL: "https://apiserver2.herokuapp.com",
});
