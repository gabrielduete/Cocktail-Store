import React, { useState } from "react"
import "./App.css"
import ContainerComponents from "./Pages/main/index"
import PageFavs from "./Pages/pageFavs/index"
import Shopping from "./Pages/buys/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  const [arrayFavs, setArrayFavs] = useState([])

  const [arrayShop, setArrayShop] = useState([])

  const handleFav = (drinkImg, drinkName) => {
    if (
      arrayFavs
        .map((el) => el.nameDrink)
        .findIndex(
          (drink) => drink.toUpperCase() === drinkName.toUpperCase()
        ) === -1
    ) {
      setArrayFavs([
        ...arrayFavs,
        {
          srcImg: drinkImg,
          nameDrink: drinkName,
          favorited: true,
        },
      ]);
    }
  };

  const handleShop = (drinkImg, drinkName) => {
    if (
      arrayShop
        .map((el) => el.nameDrink)
        .findIndex(
          (drink) => drink.toUpperCase() === drinkName.toUpperCase()
        ) === -1
    ) {
      setArrayShop([
        ...arrayShop,
        {
          srcImg: drinkImg,
          nameDrink: drinkName,
          favorited: true,
        },
      ]);
    }
  };

  const removeDrink = (array, setArray, nameDrink) => {
    setArray(array.filter((el) => el.nameDrink !== nameDrink));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <ContainerComponents
              handleFav={handleFav}
              arrayFavs={arrayFavs}
              setArrayFavs={setArrayFavs}
              removeDrink={removeDrink}
              handleShop={handleShop}
              arrayShop={arrayShop}
              setArrayShop={setArrayShop}
            />
          }
        />

        <Route
          path="/favs"
          exact
          element={
            <PageFavs
              arrayFavs={arrayFavs}
              setArrayFavs={setArrayFavs}
              removeDrink={removeDrink}
            />
          }
        />

        <Route
          path="/shop"
          exact
          element={
            <Shopping
              arrayShop={arrayShop}
              setArrayShop={setArrayShop}
              removeDrink={removeDrink}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App
