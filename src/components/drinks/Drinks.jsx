import React from 'react'
import './style.css'
import Drink from '../drink/Drink'

function Drinks(props){

    return (
        <section className = 'containerDrinks'>
            {props.drinks.map(drink => <Drink drinkName = {drink.strDrink} drinkImg={drink.strDrinkThumb} />)}
        </section>
    )
}

export default Drinks