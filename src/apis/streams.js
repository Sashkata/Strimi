import axios from "axios";

//const port = process.env.PORT;
export default axios.create({
  baseURL: "https://apiserver2.herokuapp.com/",
});
//https://apiserver2.herokuapp.com/
//http://192.168.1.9:25545
