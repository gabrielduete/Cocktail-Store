import React, { useState } from 'react'
import './style.css'

function Form(){
   return (
        <form className = 'containerForm' action = 'https://api.staticforms.xyz/submit' method = 'POST' encType = 'text/plain'>
            <input type="hidden" name="accessKey" value = "7caa4f10-d692-492c-9aa8-3845a46aa7f8" />

            <div className = 'inputs'>
                <input type = "text" name = "name" className = 'name' placeholder = "Name" required />
                <input type = "email" name = "email" className = "email" placeholder = "Email" required/>
            </div>
            
            <textarea name = "message" cols="30" rows="10" placeholder = 'Message' required></textarea>

            <p></p>
        
            <button type = "submit">Submit</button>
        </form>
    )
}

export default Form