import React from 'react'
import '../shopping.css'
import Remove from '../../../components/remove/index'

function DrinkShop(props) {
    let validate = props.initialCont === false
    validate && (
        props.initialCount()
    )

    return (
        <>
            <div className='drinkShop'>
                <img src={props.image} alt="image_cocktail" />
                <div className='drinkShop-texts'>
                    <p>{props.nameDrink}</p>
                    <p>$59.99</p>
                    <div className='actions'>
                        <div>
                            <span>QTD:</span>
                            <input type="number" defaultValue='1' min='1' onChange={e => props.changeCount(e.target.value)} />
                        </div>
                        <Remove
                            removeDrink={props.removeDrink}
                            setArray={props.setArrayShop}
                            nameDrink1={props.nameDrink}
                            array={props.array}
                        />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default DrinkShop