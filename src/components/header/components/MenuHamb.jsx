import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import IconLinks from './IconsLinks'
import { Link } from "react-router-dom"

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

                    <li className='liMenu'>
                        <Link to="/favs"
                            className="link"
                            arrayShop={props.arrayShop}
                            setArrayShop={props.setArrayShop}
                            removeDrink={props.removeDrink}>
                            Favorited
                        </Link>
                    </li>
                    <li className='liMenu'>
                        <Link to="/shop"
                            className="link"
                            arrayShop={props.arrayShop}
                            setArrayShop={props.setArrayShop}
                            removeDrink={props.removeDrink}>
                            Shopping
                        </Link>
                    </li>
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