import React from 'react'
import './style.css'
import Icone from '../../assets/img/iconByFreepik.png'
import { RiHeart3Fill, RiShoppingCart2Line } from "react-icons/ri"
import { Link } from "react-router-dom"

function Header(props){
    return (
        <header>
            <img src = {Icone} alt = 'iconHeader' />

            <ul>
                <li>Home</li>
                <li>Cocktails</li>
                <li>Contact us</li>
            </ul>

            <div className = 'storeLove'>
                <i>
                    <Link 
                        to = '/favs' 
                        arrayFavs = {props.arrayFavs}
                        className = 'link'
                    > 
                        <RiHeart3Fill className = 'heart'/> 
                    </Link>
                </i>
                <RiShoppingCart2Line className = 'store' />
            </div>
        </header>
    )
}

export default Header