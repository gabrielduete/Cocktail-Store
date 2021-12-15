import React from 'react'
import FavsDrinks from './FavsDrinks'
import ButtonReturn from '../../components/buttonReturn/ButtonReturn'
import './pageFavs.css'

function Favs(props){

    const marginTop = {
        marginTop: '3%'
    }

    return(
        <section className = 'bg-favs'>
            <div className = 'container-Shop-all'>
                <div className = 'containerShop-bg'>
                        <h1>Favorite Drinks</h1>
                        <ButtonReturn />
                        <div style = {marginTop} className = 'containerShop-drinks'>
                                {
                                    props.arrayFavs.map( el => <FavsDrinks
                                                                    nameDrink = {el.nameDrink}
                                                                    image = {el.srcImg}
                                                                />

                                    )
                                }
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Favs