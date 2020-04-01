import axios from "axios";

const api = axios.create({baseURL:'http://localhost:8080/api/ecommerce'});


api.interceptors.request.use(function(config) {
    config.auth = JSON.parse(sessionStorage.getItem("credenciais"))
return config;
});



export default api;