import React from "react";
import FavsDrinks from "./FavsDrinks";
import ButtonReturn from "../../components/buttonReturn/ButtonReturn";
import "./pageFavs.css";

function Favs(props) {
  return (
    <section className="container-bg">
      <div className="container-Shop-all">
        <div className="containerShop-bg">
          <h1 style={{ marginBottom: "3%" }}>Favorite Drinks</h1>
          <ButtonReturn />
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
        </div>
      </div>
    </section>
  );
}

export default Favs;
