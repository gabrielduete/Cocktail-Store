import React from 'react'
import './style.css'
import Form from '../form/index'
import Mapp from '../Map/index'

function Contact() {
    return (
        <article>
            <h3>Contact <span>Us</span></h3>

            <p className='pContact'>Localization</p>

            <div className='containerM'>
                <Mapp />
            </div>

            <p className='pContact'>Send a message</p>
            <Form />
        </article>
    )
}

export default Contact