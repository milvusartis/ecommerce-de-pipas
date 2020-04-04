import React from 'react';
import './style.css'



export default function HistoricoPedidos () {

    return (
    <div className="pedido-container">
        <div className="content">

            <h1>Pedidos realizados</h1>

            <ul>
                
                    <li>
                    <strong>NUMERO DO PEDIDO:</strong>
                    <p>{}</p>

                    <strong>DESCRIÇÂO:</strong>
                    <p>{}</p>

                    <strong>VALOR:</strong>
                    <p></p>
                    </li>
                
            </ul>

            <ul>
                
                <li>
                <strong>NUMERO DO PEDIDO:</strong>
                <p></p>

                <strong>DESCRIÇÂO:</strong>
                <p>{}</p>

                <strong>VALOR:</strong>
                <p></p>
                </li>
            
            </ul>
        </div>
    </div>
    )
}