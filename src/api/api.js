import * as axios from "axios";


const instanse = axios.create({
    baseURL : 'http://test1.web-gu.ru/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
    // baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    // withCredentials: true,
    // headers: {
    //     "API-KEY": "4d14356f-05ff-48ec-8658-216bd0815cbf"
    // }
})


export let mainAPI = {
    getCategoty() {
        return instanse.get(``)
            .then(response => response.data)
    }
}