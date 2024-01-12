// nitip
// let title = "Red Sea attacks halt Tesla production Germany"
// console.log((title.split(' ')).join('-').toLowerCase())
// red-sea-attacks-halt-tesla-production-germany

import axios from "axios";
// import { config } from "localforage";

const apiConfig = (config: any) => {

    config.headers = {
        'Authorization': '0bc00825346244b3a4b28c881462f279',
        'Accept' : 'application/json'

    }
    return config;
}

const baseApi = axios.create ({
    baseURL : 'https://newsapi.org/v2/',
    timeout: 90_000

})

baseApi.interceptors.request.use(apiConfig)

export default baseApi