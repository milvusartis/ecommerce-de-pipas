import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./styles.css"

export default class CarouselResponsive extends Component {
    render() {
        return (
            <Carousel className="carousel mb-2" autoPlay={true} showThumbs={false} transitionTime={10} infiniteLoop={true} width="80%" showStatus={false}>
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
