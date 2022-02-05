import React from 'react'
import '../shopping.css'
import Remove from '../../../components/remove/index'

function DrinkShop(props) {
    return (
        <>
            <div className='drinkShop'>
                <img src={props.image} alt="image_cocktail" />
                <div className='drinkShop-texts'>
                    <p>{props.nameDrink}</p>
                    <p>$59.99</p>
                    <Remove
                        removeDrink={props.removeDrink}
                        setArray={props.setArrayShop}
                        nameDrink1={props.nameDrink}
                        array={props.array}
                    />
                </div>
            </div>
            <hr />
        </>
    )
}

export default DrinkShop