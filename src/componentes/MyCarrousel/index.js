import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/uploads/BANNER-PAPEL-DE-SEDA-RECORTE-012020.png" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/uploads/BANNER-LAPIS-50-012020.png" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/uploads/BANNER-LINHA-100-AERO-012020.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
};
