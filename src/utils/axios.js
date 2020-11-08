import axios from 'axios';

const instance = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/" + process.env.REACT_APP_API_URL + process.env.REACT_APP_ACCESS_TOKEN,
    // timeout: 3000,
    // headers: {'Access-Control-Allow-Origin': '*'}
});
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = "*";

export default instance;