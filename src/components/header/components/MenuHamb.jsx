import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import IconLinks from './IconsLinks'

function MenuHamb(props) {
    return (
        <>
            <AiOutlineMenu
                className='iconHamb'
                onClick={() => props.changeMenu()}
                style={props.openMenu ? { display: 'none' } : { display: 'block' }}
            />

            <div
                className='divMenu'
                style={props.openMenu ? { display: 'block' } : { display: 'none' }}
            >
                <ul>
                    <li className='liMenu'><a href="#">Home</a></li>
                    <li className='liMenu'><a href="#">Cocktails</a></li>
                    <li className='liMenu'><a href="#">Contact us</a></li>
                </ul>

                <AiOutlineClose
                    className='iconHamb'
                    onClick={() => props.changeMenu()}
                    style={props.openMenu ? { display: 'block' } : { display: 'none' }}
                />
                <IconLinks />
            </div>
        </>
    )
}

export default MenuHamb