import React from 'react'
import FavsDrinks from './FavsDrinks'
import './pageFavs.css'

function Favs(props){

    console.log(props.arrayFavs)

    return(
        <div className = 'containerFavs-bg'>
            <section className = 'containerFavs'>
                    <h1>Drinks Favoritados</h1>

                    <div className = 'favDrinks'>
                        {
                            props.arrayFavs.map( el => <FavsDrinks
                                                            nameDrink = {el.nameDrink}
                                                            image = {el.srcImg}
                                                        />
                            )
                        }
                    </div>
            </section>
        </div>
    )
}

export default Favs