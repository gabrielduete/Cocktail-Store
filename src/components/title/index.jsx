import React from 'react'
import './style.css'
import videoFundo from '../../assets/video/fundo.mp4'
import Typical from 'react-typical'

function Title() {
    return (
        <div className='containerVideo' id='home' >
            <video autoPlay loop muted controls=''>
                <source src={videoFundo} type="video/mp4" />
            </video>
            <Typical
                steps={['Cocktail Store!', 3000, '', 1000]}
                loop={Infinity}
                wrapper="h1"
                className='tittle-Tittle'
            />
        </div>
    )
}

export default Title