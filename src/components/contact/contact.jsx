import React from 'react'
import './style.css'
import Form from '../form/Form'

function Contact(){
    return (
        <article>
            <h3>Contact <span>Us</span></h3>
            <p className = 'pContact'>Localization</p>
            <p className = 'pContact'>Send a message</p>
            <Form />
        </article>
    )
}

export default Contact