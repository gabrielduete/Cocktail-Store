import React from 'react'
import './style.css'
import Drink from '../drink/index'
import Slider from "react-slick"

function Drinks(props) {
  const settings = {
    dots: true,
    infinite: false,
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    speed: 1000,
    dotsClass: "button__bar",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <section className='containerDrinks'>
      <Slider {...settings}>

        {props.drinks.map(
          drink => <Drink
            drinkName={drink.strDrink}
            drinkImg={drink.strDrinkThumb}
            handleFav={props.handleFav}
            arrayFavs={props.arrayFavs}
            setArrayFavs={props.setArrayFavs}
            handleShop={props.handleShop}
            arrayShop={props.arrayShop}
            setArrayShop={props.setArrayShop}
            buy={props.buy}
            setBuy={props.setBuy}
          />
        )}

      </Slider>
    </section>
  )
}

export default Drinks