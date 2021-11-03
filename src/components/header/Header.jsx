import React from 'react'
import './style.css'
import { RiShoppingCart2Fill, RiShoppingCart2Line } from "react-icons/ri";

function Header(){
    return (
        <header>
            <p>icone</p>

            <ul>
                <li>Home</li>
                <li>Cocktails</li>
                <li>Contact us</li>
            </ul>

            {/* <RiShoppingCart2Fill /> */}
            <RiShoppingCart2Line className = 'iconStore'/>
        </header>
    )
}

export default Header