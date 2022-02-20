import React, { useState } from 'react'
import './style.css'
import { RiHeart3Fill, RiShoppingCart2Line } from "react-icons/ri"

function Drink(props) {

    const [styleImgs, setStyleImgs] = useState({
        filter: 'opacity(100%)',
    })

    const [styleButtons, setStyleButtons] = useState({
        display: 'none'
    })

    const clickHeart = () => {
        props.handleFav(props.drinkImg, props.drinkName)
    }

    const clickStore = () => {
        props.handleShop(props.drinkImg, props.drinkName)
        props.setBuy(true)
        if (
            props.arrayShop
                .map((el) => el.nameDrink)
                .findIndex(
                    (drink) => drink.toUpperCase() === props.drinkName.toUpperCase()
                ) === -1
        ) {
            props.setBuysCount(props.buysCount + 1)
        }
    }

    return (
        <div>
            <div
                className='drinks'

                onMouseEnter={() => {
                    setStyleImgs({
                        filter: 'opacity(40%)'
                    })

                    setStyleButtons({
                        display: 'flex'
                    })
                }}

                onMouseLeave={() => {
                    setStyleImgs({
                        filter: 'opacity(100%)'
                    })

                    setStyleButtons({
                        display: 'none'
                    })
                }}
            >

                <div className='containerButtons' style={styleButtons}>
                    <RiHeart3Fill
                        className='heart heart-2'
                        onClick={() =>
                            clickHeart()
                        }
                    />

                    <RiShoppingCart2Line
                        className='store store-2'
                        onClick={() =>
                            clickStore()
                        }
                    />
                </div>

                <img src={props.drinkImg} alt="imagemCocktail" style={styleImgs} />
                <p style={styleImgs}> {props.drinkName} </p>

            </div>
        </div>
    )
}

export default Drink