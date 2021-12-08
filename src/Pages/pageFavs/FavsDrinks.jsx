import React from 'react'
import './pageFavs.css'

function FavDrinks(props){
    return (
        <div className = 'favDrinks'>
            <div className = 'favDrink'>
                    <img src = {props.image} alt="image_cocktail" />
                    <p>{props.nameDrink}</p>
            </div>
        </div>
    )
}

export default FavDrinks