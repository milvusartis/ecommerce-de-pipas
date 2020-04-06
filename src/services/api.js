import axios from "axios";

const api = axios.create({baseURL:'http://localhost:8080/api/ecommerce'});


api.interceptors.request.use(function(config) {
    const decodificar = sessionStorage.getItem("credenciais");
    if(decodificar!==null){
        config.auth = JSON.parse(atob(decodificar))
    }
  
return config;
});



export default api;