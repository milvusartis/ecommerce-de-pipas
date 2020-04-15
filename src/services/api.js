import axios, {AxiosResponse} from "axios";
// import hitory from "./history";

import { toast } from "react-toastify";

const api = axios.create({baseURL:'http://localhost:8080/api/ecommerce'});


api.interceptors.request.use(function(config) {
    // const decodificar = sessionStorage.getItem("credenciais");
    // if(decodificar!==null){
    //     config.auth = JSON.parse(atob(decodificar))
    // }

    const token = sessionStorage.getItem("token");
    if(token!==null){
        config.headers['Authorization'] =  JSON.parse(token);
    }
   
return config;
});



api.interceptors.response.use((response) => {
    return response;
}, function (error) {
    // Do something with response error
   
    if(error.mmessage === 'Network Error' && !error.response){
        toast.error('Network error - make') 
    }
   
     
   

    const {status, data, config} = error.response;

    if (status === 401) {
        console.log('unauthorized, logging out ...');
        window.location.reload();
        // auth.logout();
        // router.replace('/auth/login');
    }


    if(status ===404){
       console.log("404")
    }

    if(status===400 && config.method === 'get' && data.error.hasOwnProperty('id')){
        console.log("400")
    }

    if(status===500){
       console.log("500")
    }




    return Promise.reject(error.response);
});





export default api;