import React from 'react'
import './style.css'

function Drink(props){

    return (
        <div className = 'drinks'>
            <img src= {props.drinkImg} alt="imagemCocktail" />
            <p>{props.drinkName}</p>
        </div>
    )
}

export default Drink