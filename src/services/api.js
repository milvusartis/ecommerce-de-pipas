import axios from "axios";

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



export default api;