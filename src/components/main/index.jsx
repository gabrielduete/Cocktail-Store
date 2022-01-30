import React, { useState, useEffect } from 'react'
import './style.css'
import { getCocktails } from '../../api/api'
import Drinks from '../drinks/index'

function Main(props) {

    const [drinks, setDrinks] = useState([])

    const handleCoktails = () => {
        getCocktails()
            .then(response => {
                setDrinks(response.data.drinks)
            })
    }

    useEffect(() => {
        handleCoktails()
    }, [])

    return (
        <main id='cocktails'>
            <h3>Choose your <span>cocktails</span></h3>
            <Drinks
                drinks={drinks}
                handleFav={props.handleFav}
                arrayFavs={props.arrayFavs}
                setArrayFavs={props.setArrayFavs}

                handleShop={props.handleShop}
                arrayShop={props.arrayShop}
                setArrayShop={props.setArrayShop}
            />
        </main>
    )
}

export default Main