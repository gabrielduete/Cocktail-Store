import React from 'react'
import { RiHeart3Fill, RiShoppingCart2Line } from "react-icons/ri"
import { Link } from "react-router-dom"

function IconLinks(props) {

    const showBuysCount = () => {
        let verify = props.buysCount !== 0
        return verify ? <span>{props.buysCount}</span> : <span></span>
    }

    return (
        <div className="storeLove">
            <i>
                <Link
                    to="/favs"
                    className="link"
                    arrayFavs={props.arrayFavs}
                    setArrayFavs={props.setArrayFavs}
                    removeDrink={props.removeDrink}
                >
                    <RiHeart3Fill className="heart" />
                </Link>

                <Link
                    to="/shop"
                    className="link"
                    arrayShop={props.arrayShop}
                    setArrayShop={props.setArrayShop}
                    removeDrink={props.removeDrink}
                >
                    {showBuysCount()}
                    <RiShoppingCart2Line className="store" />
                </Link>
            </i>
        </div>
    )
}

export default IconLinks