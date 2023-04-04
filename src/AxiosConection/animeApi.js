import axios from "axios"
import { getEnvVariables } from "../envExports/getEnvVariables"
const {VITE_API_URL} = getEnvVariables()

const animeApi = axios.create({
    baseURL:VITE_API_URL
})

//TODO: Configurar interceptores


animeApi.interceptors.request.use(config => {
   
    config.headers = {
        ...config.headers,
        "x-token": localStorage.getItem("token")
    }
   
    return config


})


export default animeApi;