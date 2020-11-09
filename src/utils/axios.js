import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // timeout: 3000,
  // headers: {'Access-Control-Allow-Origin': '*'}
});
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = "*";

export default instance;
