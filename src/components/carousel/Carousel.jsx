import React from 'react'
import './style.css'
import cocktail1 from '../../assets/img/cocktail1.jpg'
import cocktail2 from '../../assets/img/cocktail2.jpg'
import cocktail3 from '../../assets/img/cocktail3.jpg'
import cocktail4 from '../../assets/img/cocktail4.jpg'
import cocktail5 from '../../assets/img/cocktail5.jpg'
import cocktail6 from '../../assets/img/cocktail6.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function CarouselImgs(){
    return (
        <div className = 'containerCarousel'>
            <h2>The best cocktail shop in the world!</h2>
            <Carousel 
                infiniteLoop = {true}
                interval = {1500}
                swipeable = {true}
                autoPlay = {true}
                showThumbs = {false}
                dynamicHeight = {true}
                emulateTouch = {true}
                showArrows = {false}
                showStatus = {false}
                className = 'carousel'
            >
                <div>
                    <img src = {cocktail1} alt = 'imagem_Cocktail1' />
                </div>
                <div>
                    <img  src = {cocktail2} alt = 'imagem_Cocktail2' />
                </div>
                <div>
                    <img  src = {cocktail3} alt = 'imagem_Cocktail3'/>
                </div>
                <div>
                    <img  src = {cocktail4} alt = 'imagem_Cocktail4' />
                </div>
                <div>
                    <img  src = {cocktail5} alt = 'imagem_Cocktail5' />
                </div>
                <div>
                    <img  src = {cocktail6} alt = 'imagem_Cocktail6' />
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselImgs