import React from 'react'

function DrinkShop(props){
    return (
            <div>
                    <img src = {props.image} alt="image_cocktail" />
                    <p>{props.nameDrink}</p>
            </div>
    )
}

export default DrinkShop