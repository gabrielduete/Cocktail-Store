import React from 'react'
import './pageFavs.css'

function FavDrinks(props){
    return (
        <>
            <div className = 'drinkShop'>
                    <img src = {props.image} alt="image_cocktail" />
                    <p>{props.nameDrink}</p>
            </div>
            <hr />
        </>
    )
}

export default FavDrinks