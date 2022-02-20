import React, { useState } from 'react'
import DrinkShop from './components/DrinksShop'
import './shopping.css'
import ButtonReturn from '../../components/buttonReturn/index'

function Shopping(props) {

    let cont = 0

    const [initialCont, setInitialCont] = useState(false)

    const [count, setCount] = useState(0)

    const changeCount = (number) => {
        setCount(count + number * 59.99)
    }

    const initialCount = () => {
        setCount(cont)
        setInitialCont(true)
    }

    const renderButton = () => {
        return (
            <>
                {
                    props.buy && (
                        <button
                            className='buttonBuy'
                            onClick={() => buyDrinks()}
                        >Buy</button>
                    )
                }
            </>
        )
    }

    const renderDrinks = () => {
        if (props.arrayShop.length === 0) {
            return (
                <>
                    <p>You didn't buy anything</p>
                </>
            )
        } else {
            return (
                <>
                    <div className='containerShop-drinks'>
                        {
                            props.arrayShop.map(el =>
                                <DrinkShop
                                    image={el.srcImg}
                                    nameDrink={el.nameDrink}
                                    removeDrink={props.removeDrink}
                                    setArrayShop={props.setArrayShop}
                                    array={props.arrayShop}
                                    changeCount={changeCount}
                                    initialCount={initialCount}
                                    initialCont={initialCont}
                                />
                            )
                        }

                        {
                            props.arrayShop.forEach(() => {
                                cont += 59.99
                            })
                        }
                    </div>
                    <p style={{ marginTop: '3%' }}>Value: {count.toFixed(2)}</p>
                </>
            )
        }
    }

    const buyDrinks = () => {
        props.setArrayShop([])
        props.setBuy(false)
    }

    return (
        <section className='container-bg'>
            <div className='container-Shop-all'>
                <div className='containerShop-bg'>
                    <h1 className='tittle-Shop'>Shopping</h1>
                    <p><span>PROMOTION:</span> All drinks for $59.99!</p>
                    {renderDrinks()}
                </div>
                <div className='buttons'>
                    <ButtonReturn />
                    {renderButton()}
                </div>
            </div>
        </section>
    )
}

export default Shopping