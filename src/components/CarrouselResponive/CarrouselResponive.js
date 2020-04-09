import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./CarrouselResponsive.scss"

export default class CarouselResponsive extends Component {
    render() {
        return (
            <Carousel className="carousel mb-2" autoPlay={true} showThumbs={false} transitionTime={10} infiniteLoop={true} width="80%" showStatus={false}>
                <div>
                    <img src="https://i.ibb.co/6P1w6Tp/1.png" title="" alt=""/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://i.ibb.co/2qvvbZn/2.png" title="" alt=""/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://i.ibb.co/yQ2M9Kd/3.png" title="" alt=""/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="https://i.ibb.co/dDxXwnD/4.png" title="" alt=""/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>

               
            </Carousel>
        );
    }
};
