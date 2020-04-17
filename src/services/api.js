import axios from "axios";
import { history } from "./../index";
import handleLogout from "./logout";
import { toast } from "react-toastify";

// const api = axios.create({ baseURL: 'http://localhost:8080/api/ecommerce' });
const api = axios.create({ baseURL: 'http://ffe680b2.ngrok.io/api/ecommerce' });





api.interceptors.request.use(function (config) {
    // const decodificar = sessionStorage.getItem("credenciais");
    // if(decodificar!==null){
    //     config.auth = JSON.parse(atob(decodificar))
    // }

    const token = sessionStorage.getItem("token");
    if (token !== null) {
        config.headers['Authorization'] = JSON.parse(token);
    }

    return config;
});



api.interceptors.response.use((response) => {
    return response;
}, function (error) {

    if (error.mmessage === 'Network Error' && !error.response) {
        toast.error('falha na conexão com o servidor!');
    }

    const { status, data, config } = error.response;

    if (status === 401) {
        handleLogout();
        history.push("/login")
        sessionStorage.setItem("msg", btoa("pssInvalid"));
        toast.error('Falha no Login, tente novamente');
    }

    if (status === 403) {
        handleLogout();

    }

    if (status === 404) {
        toast.error('Houston we have a problem');
    }

    if (status === 400 && config.method === 'get' && data.error.hasOwnProperty('id')) {
        history.push("/");
    }

    if (status === 500) {
        toast.warn('Erro no servidor');
    }

    return Promise.reject(error.response);
});

export default api;

// toast.success('Sucesso')
// toast.error('Erro');
// toast.warn("Aviso")
// toast.info("Info")


