import React from 'react'
import './style.css'

function Form(){

    return (
        <form className = 'containerForm' action="https://api.staticforms.xyz/submit" method="post" >
            
            {/* Inputs ocultos para configuração da API Static Forms */}
            <input type = "hidden" name = "accessKey" value = "7caa4f10-d692-492c-9aa8-3845a46aa7f8" />
            <input type = "hidden" name = "redirectTo" value = {window.location.toString()} />
            <input type = "hidden" name = "replyTo" value="@" />

            <div className = 'inputs'>
                <input type = "text" name = "name" placeholder = 'Name' required/> 
                <input type = "email" name = "email" placeholder  = 'E-mail' required/>
            </div>
            
            <textarea name = "message" cols = "30" rows="10" placeholder = 'Send a message' required></textarea>

            <button type = "submit" value = "Submit"> Submit </button>
        </form>
        
    )
}

export default Form