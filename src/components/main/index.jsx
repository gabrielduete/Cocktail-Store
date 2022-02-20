import React, { useEffect, useContext } from 'react'
import './style.css'
import Drinks from '../drinks/index'
import { CooktailContext } from '../../contexts/CooktailContext'

function Main(props) {
    const {
        handleCoktails,
        drinks
    } = useContext(CooktailContext)

    useEffect(() => {
        handleCoktails()
    }, [handleCoktails])

    return (
        <main id='cocktails'>
            <h3>Choose your <span>cocktails</span></h3>
            <Drinks
                drinks={drinks}
                handleFav={props.handleFav}
                arrayFavs={props.arrayFavs}
                setArrayFavs={props.setArrayFavs}
                buy={props.buy}
                setBuy={props.setBuy}
                buysCount={props.buysCount}
                setBuysCount={props.setBuysCount}

                handleShop={props.handleShop}
                arrayShop={props.arrayShop}
                setArrayShop={props.setArrayShop}
            />
        </main>
    )
}

export default Main