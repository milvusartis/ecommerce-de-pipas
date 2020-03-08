import React, { Component } from 'react';
import ControlledCarousel from '../../componentes/ControlledCarousel';
import MyCarousel from '../../componentes/MyCarrousel';
// import './styles.css';

export default class Main extends Component {
 
    render() {
        return (
            <main>
                {/* <ControlledCarousel/> */}
                <MyCarousel/>
            </main>
        );
    }
}
