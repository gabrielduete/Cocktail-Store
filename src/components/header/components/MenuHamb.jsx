import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import IconLinks from './IconsLinks'

function MenuHamb(props) {
    return (
        <>
            <div
                className='divMenu'
                style={props.openMenu ? { display: 'block' } : { display: 'none' }}
            >

                <ul className='itensMobile'>
                    <li className='liMenu'>Home</li>
                    <li className='liMenu'>Cocktails</li>
                    <li className='liMenu'>Contact us</li>
                    <li className='liMenu'>Favorited</li>
                    <li className='liMenu'>Stored</li>
                </ul>
                <IconLinks />
            </div>
            <AiOutlineMenu
                className='iconHamb'
                onClick={() => props.changeMenu()}
                style={props.openMenu ? { display: 'none' } : { display: 'block' }}
            />
            <AiOutlineClose
                className='iconHamb'
                onClick={() => props.changeMenu()}
                style={props.openMenu ? { display: 'block' } : { display: 'none' }}
            />
        </>
    )
}

export default MenuHamb