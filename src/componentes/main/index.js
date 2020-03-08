import React, { Component } from 'react';
import ControlledCarousel from '../../componentes/ControlledCarousel';
import CarouselResponive from '../CarrouselResponive';
// import './styles.css';

export default class Main extends Component {
 
    render() {
        return (
            <main>
                {/* <ControlledCarousel/> */}
                <CarouselResponive/>
            </main>
        );
    }
}
