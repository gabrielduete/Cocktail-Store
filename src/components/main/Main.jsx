import React, { useState, useCallback, useEffect } from 'react'
import './style.css'
import { getCocktails } from '../../api/api'
import Drinks from '../drinks/Drinks'

function Main(){

    const [drinks, setDrinks] = useState([])

    const handleCoktails = () => {
        getCocktails()
        .then(response => {
            console.log(response)
            setDrinks(response.data.drinks)
        })
    }

    useEffect(() => {
        handleCoktails()
    }, [])

    return (
        <main>
            <h3>Choose your drinks: </h3>
            <Drinks drinks={drinks}/>
        </main>
    )
}

export default Main