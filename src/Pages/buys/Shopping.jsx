import React from 'react'
import DrinkShop from './DrinksShop'
import './shopping.css'

function Shopping(props){

    console.log(props.arrayShop)

    return (
        <div className = 'container-bg'>
            <div className = 'containerShop-bg'>
                <h1 className = 'tittle-Shop'>Shopping</h1>
                <p><span>PROMOTION:</span> All drinks for $59.99!</p>
                <div className = 'containerShop-drinks'>
                    {
                        props.arrayShop.map( el => 
                            <DrinkShop 
                                image = {el.srcImg}
                                nameDrink = {el.nameDrink}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Shopping