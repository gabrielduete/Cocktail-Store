import React from 'react'
import { Link } from "react-router-dom"
import { IoReturnDownBackSharp } from "react-icons/io5"
import './button.css'

function ButtonReturn(){
    return (
        <Link 
            to = '/'
        >
            <button>
                <IoReturnDownBackSharp className = 'icon'/>
            </button>      
        </Link>
    )
}

export default ButtonReturn