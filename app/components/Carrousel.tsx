'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "./interface";


interface Props {
    images: Image[];
}

var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 2,
    speed: 500,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "60px",
                slidesToShow: 1,
                speed: 500,
                arrows: false,
            }
        }

    ]
};

export const Carrousel = ( {images}: Props ) => {

    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        images.map((image, index) => {
                            return (
                                <div key={index} className="carrousel">
                                    <div className="img">
                                        <img className="photo" src={image.image} alt="Couple photo" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}
