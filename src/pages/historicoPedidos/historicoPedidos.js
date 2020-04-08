import React, { useState, useEffect } from 'react';
import ItemHistoricoDePedido from '../../components/ItemHistoricoDePedido/ItemHistoricoDePedido';
import api from '../../services/api'
import { makeStyles } from '@material-ui/core/styles';

import './historicoPedidos.scss'

const { idUsuario } = JSON.parse(sessionStorage.getItem('usuario'));



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));



export default function HistoricoPedidosl() {

    const classes = useStyles();
    const [pedidos, setPedidos] = useState([]);


    useEffect(() => {
        api.get(`historico-pedidos/4`, {

        }).then(response => {
            // setPedidos(response.data)
            setPedidos(response.data);

        })
    }, [idUsuario]);



    // api.get('/auth/token', {

    // }).then((response => {
    //     sessionStorage.setItem("usuario", JSON.stringify(response.data))
    //     history.push("/")
    //     window.location.reload();


    // })).catch((error) => {
    //     if (401 === error.response.status){
    //         return alert("Usuário ou senha não conferem");
    // }
    //     alert("Erro não esperado");
    // });



    return (
        <>
            <div className="pedido-container">
                <div className="content">
                    <h1>Pedidos realizados</h1>
                    <div className={classes.root}>
                        {pedidos.map(pedido => (
                            <ItemHistoricoDePedido key={pedido.idPedido} pedido={pedido} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    );

}