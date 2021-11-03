import React, { useState, useCallback, useEffect } from 'react'
import './style.css'
import { getCocktails } from '../../api/api'
import Drinks from '../drinks/Drinks'

function Main(){

    const [drinksNames,setDrinksNames] = useState([])
    const [drinksImgs, setDrinksImgs] = useState([])

    const handleAPI = useCallback(async () => {
		const data = await getCocktails()
        setDrinksNames(data.data.drinks.map(drink => drink.strDrink))
        setDrinksImgs(data.data.drinks.map(drink => drink.strDrinkThumb))
        console.log(drinksNames)
        console.log(drinksImgs)
        console.log('teste1')
	}, [])

	useEffect(() => {
		handleAPI()
	}, [handleAPI])

    return (
        <main>
            <h3>Choose your drinks: </h3>
            <Drinks drinksImgs = {drinksImgs} drinksNames = {drinksNames}/>
        </main>
    )
}

export default Main