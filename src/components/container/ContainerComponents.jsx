import React from 'react'
import './style.css'
import Header from '../header/Header'
import Title from '../title/Title'
import CarouselImgs from '../carousel/Carousel'
import Main from '../main/Main'
import Footer from '../footer/Footer'

function ContainerComponents(){
    return (
        <div>
            <Header />
            <Title />
            <CarouselImgs />
            <Main />
            <Footer />
      </div>
    )   
}

export default ContainerComponents