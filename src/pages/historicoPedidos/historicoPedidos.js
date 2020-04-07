import React from 'react';

import { Card, Button } from 'react-bootstrap';

import Accordion from 'react-bootstrap/Accordion'

// const decoratedOnClick = useAccordionToggle(eventKey, onClick);


import './historicoPedidos.css'



const historicoPedidos = () => (
    <>



        <div className="pedido-container">
            <div className="content">

                <h1>Pedidos realizados</h1>

                {/* <ul>

                    <li>
                    <strong>NUMERO DO PEDIDO:</strong>
                    <p>{}</p>

                    <strong>DESCRIÇÂO:</strong>
                    <p>{}</p>

                    <strong>VALOR:</strong>
                    <p></p>
                    </li>

            </ul> */}

                {/* <ul>

                <li>
                <strong>NUMERO DO PEDIDO:</strong>
                <p></p>

                <strong>DESCRIÇÂO:</strong>
                <p>{}</p>

                <strong>VALOR:</strong>
                <p></p>
                </li>

            </ul> */}

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Click me!
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>


            </div>
        </div>





    </>
);

export default historicoPedidos;
