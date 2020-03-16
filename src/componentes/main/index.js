import React, { Component } from 'react';
import CarouselResponive from '../CarrouselResponive';
import ListaDeProdutos from '../../componentes/ListaDeProdutos';
// import './styles.css';

export default class Main extends Component {
 
    render() {
        return (
            <main>
                {/* <ControlledCarousel/> */}
                <CarouselResponive/>
                <ListaDeProdutos/>
            </main>
        );
    }
}
