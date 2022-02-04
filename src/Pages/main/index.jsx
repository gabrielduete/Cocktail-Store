import React from "react"
import "./style.css"
import Header from "../../components/header/index"
import Title from "../../components/title/index"
import CarouselImgs from "../../components/carousel/index"
import Main from "../../components/main/index"
import Contact from "../../components/contact/index"
import Footer from "../../components/footer/index"

function ContainerComponents(props) {
  return (
    <div>
      <Header
        arrayFavs={props.arrayFavs}
        setArrayFavs={props.setArrayFavs}
        arrayShop={props.arrayShop}
        setArrayShop={props.setArrayShop}
        removeDrink={props.removeDrink}
      />
      <Title />
      <CarouselImgs />
      <Main
        handleFav={props.handleFav}
        arrayFavs={props.arrayFavs}
        setArrayFavs={props.setArrayFavs}
        handleShop={props.handleShop}
        arrayShop={props.arrayShop}
        setArrayShop={props.setArrayShop}
        buy={props.buy}
        setBuy={props.setBuy}
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContainerComponents;
