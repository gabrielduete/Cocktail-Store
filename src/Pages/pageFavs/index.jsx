import React from "react"
import FavsDrinks from "./components/FavsDrinks"
import ButtonReturn from "../../components/buttonReturn/index"

function Favs(props) {
  const renderDrinks = () => {
    if (props.arrayFavs.length === 0) {
      return <p style={{ marginTop: '3%' }}>You didn't favorited anything</p>
    } else {
      return (
        <div style={{ marginTop: "3%" }} className="containerShop-drinks">
          {props.arrayFavs.map((el) => (
            <FavsDrinks
              nameDrink={el.nameDrink}
              image={el.srcImg}
              arrayFavs={props.arrayFavs}
              setArrayFavs={props.setArrayFavs}
              removeDrink={props.removeDrink}
            />
          ))}
        </div>
      )
    }
  }

  return (
    <section className="container-bg">
      <div className="container-Shop-all">
        <div className="containerShop-bg">
          <h1 className='tittle-big'>Favorite Drinks</h1>
          <ButtonReturn />
          {renderDrinks()}
        </div>
      </div>
    </section>
  )
}

export default Favs
