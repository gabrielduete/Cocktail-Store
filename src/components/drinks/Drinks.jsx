import React from 'react'
import './style.css'

function Drinks(props){

    const handleDivsDrinks = () => {
        for(let i = 0; i <= 99; i++){
            return (
                <div className = 'drinks'>
                    <img src= {props.drinksImgs[i]} alt="imagemCocktail" />
                    <p>{props.drinksNames[i]}</p>
                </div>
            )
        }
    }

    return (
        <section className = 'containerDrinks'>
            {handleDivsDrinks()}
        </section>
    )
}

export default Drinks