import React from "react";
import "./style.css";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import CarouselImgs from "../../components/carousel/Carousel";
import Main from "../../components/main/Main";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/Footer";

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
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContainerComponents;
