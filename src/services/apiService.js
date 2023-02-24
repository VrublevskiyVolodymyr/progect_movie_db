import axios from "axios";

import {baseURL, access} from "../configs";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${access}`
    return config
})


export {apiService}
