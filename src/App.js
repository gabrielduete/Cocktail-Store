import React, { useState } from 'react'
import './App.css'
import ContainerComponents from './components/container/ContainerComponents'
import PageFavs from './Pages/pageFavs/PageFavs'
import Shopping from './Pages/buys/Shopping'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App(){

  const [arrayFavs, setArrayFavs] = useState([
    {
    srcImg: "",
    nameDrink: ''
    }
  ])

  const handleFav = (drinkImg, drinkName) => { 
    if (arrayFavs.map(el => el.nameDrink).findIndex(drink => drink.toUpperCase() === drinkName.toUpperCase()) === -1){ 
      setArrayFavs([...arrayFavs, {
        srcImg: drinkImg,
        nameDrink: drinkName
      }])
    }
  }

  const [arrayShop, setArrayShop] = useState([{
    srcImg: 'https://www.thecocktaildb.com/images/media/drink/b3n0ge1503565473.jpg"',
    nameDrink: 'Teste'
  }])

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          exact 
          element = {
            <ContainerComponents 
            handleFav = {handleFav}
            arrayFavs = {arrayFavs}/>
          } 
        />

        <Route 
          path="/favs" 
          exact
          element = {
            <PageFavs 
              arrayFavs = {arrayFavs}/>
          }
        />

        <Route 
          path="/shop" 
          exact
          element = {
            <Shopping
            
            />
          }
        />
      </Routes>
  </Router>
  )
}

export default App