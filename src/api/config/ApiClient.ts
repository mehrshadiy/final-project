import axios from "axios";
import {toast} from "react-toastify";

export const apiClient = axios.create({
    baseURL: 'https://nest.navaxcollege.com/api',
    timeout: 120000
})

apiClient.interceptors.response.use(function (response) {
    return response
}, function (error){
    if (error.response){
        if (error.response.status === 404){
            toast.error('requested source not found')
        }else if (error.response.status === 400){
            toast.error('sending parameters are wrong')
        }else if (error.response.status === 401){
            toast.error('please login')
        }else if (error.response.status === 403){
            toast.error('you dont have required access to this source')
        } else {
            toast.error('something went wrong')
        }
    } else if (error.request){
        toast.error('server is out')
    } else {
        toast.error("unknown error")
    }

    return Promise.reject(error)
})