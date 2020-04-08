import React from 'react';
import ItemHistoricoDePedido from '../../components/ItemHistoricoDePedido/ItemHistoricoDePedido';

import './historicoPedidos.scss'


export default function HistoricoPedidosl() {   

    return (
        <>
            <div className="pedido-container">
                <div className="content">
                    <h1>Pedidos realizados</h1>
                    <ItemHistoricoDePedido/>
                </div>
            </div>
        </>
    );

}