import React, { Component } from 'react';

import './Produto.css';

import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody,
} from 'reactstrap';

// import { Container } from './styles';

export default class Produto extends Component {
    render() {
        return (
            <>
                <Card>
                    <CardImg top width="100%" src="https://http2.mlstatic.com/D_NQ_NP_635113-MLB40086962810_122019-V.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Pipa personagens</CardTitle>
                        <CardSubtitle>R$ 2,00 uni ou R$25,00 pacote com 15 unidades</CardSubtitle>
                        <CardText></CardText>
                        <Button color="success" href="http://localhost:3000/produtocompleto">Comprar</Button>
                    </CardBody>
                </Card>
            </>
        );
    }
}
