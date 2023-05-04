import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../../public/pexels-cats-coming-406152.jpg"
import img2 from "../../../public/pexels-fauxels-3184183.jpg"

const Banner = () => {
    return (
        <div className='mb-3'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src = {img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Welcome to RECIPIES MASTER</h1>
                        <h2>Come to us for fresh and delicious food</
                        h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src = {img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1>Welcome to RECIPIES MASTER</h1>
                        <h2>Come to us for fresh and delicious food</ h2>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    )
}

export default Banner;