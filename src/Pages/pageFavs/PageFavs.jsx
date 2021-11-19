import React from 'react'
import './pageFavs.css'

function Favs(props){

    console.log(props.arrayFavs)

    return(
        <div className = 'containerFavs-bg'>
            <section className = 'containerFavs'>
                <div>
                    <h1>Drinks Favoritados</h1>
                </div>

                <div className = 'favDrinks'>
                    <div class = 'favDrink'>
                        <img src= {props.arrayFavs.srcImg} alt="image_cocktail" />
                        <p>{props.cu}</p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Favs