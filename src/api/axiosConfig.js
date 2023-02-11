import axios from "axios";

export default axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: 'https://movieapi-backend.herokuapp.com',
    headers: {'Access-Control-Allow-Origin': '*'}
    // headers: {"ngrok-skip-browser-warning": "true"} //CORS resolution
});
