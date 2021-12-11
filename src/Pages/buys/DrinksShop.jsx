import React from 'react'
import './shopping.css'

function DrinkShop(props){
    return (
        <>
            <div className = 'drinkShop'>
                    <img src = {props.image} alt="image_cocktail" />
                    <div className = 'drinkShop-texts'>
                        <p>{props.nameDrink}</p>
                        <p>$59.99</p>
                    </div>
            </div>
            <hr/>
        </>
    )
}

export default DrinkShop