import React, { useState, useEffect } from 'react'
import './style.css'
import { getCocktails } from '../../api/api'
import Drinks from '../drinks/Drinks'

function Main(){

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
        <main>
            <h3>Choose your <span>cocktails</span></h3>
            <Drinks drinks={drinks}/>
        </main>
    )
}

export default Main