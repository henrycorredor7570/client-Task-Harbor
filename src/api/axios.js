import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:3000/api",
    baseURL: "https://taskharbor-production.up.railway.app",
    withCredentials: true,
})

export default instance;