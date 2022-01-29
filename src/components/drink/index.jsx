import React, { useState } from 'react'
import './style.css'
import { RiHeart3Fill, RiShoppingCart2Line } from "react-icons/ri";

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
                        className='heart'
                        onClick={() =>
                            clickHeart()
                        }
                    />

                    <RiShoppingCart2Line
                        className='store'
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