import React, { useState } from 'react'
import './App.css'
import ContainerComponents from './components/container/ContainerComponents'
import PageFavs from './Pages/pageFavs/PageFavs'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App(){

  const [arrayFavs, setArrayFavs] = useState([])

  const handleFav = (drinkImg, nameDrink) => {
      setArrayFavs([...arrayFavs, {
          srcImg: drinkImg,
          nameDrink: nameDrink
      }])
  }

  // const handleRemoveFav = (drinkImg, nameDrink){
  //   arrayFavs.
  // }

  console.log(arrayFavs)

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

      </Routes>

  </Router>
  )
}

export default App