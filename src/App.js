import React from 'react'
import './App.css'
import ContainerComponents from './components/container/ContainerComponents'
import PageFavs from './Pages/pageFavs/PageFavs'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App(){
  return (
    <Router>

      <Routes>

        <Route path="/" exact element = {<ContainerComponents />} />

        <Route path="/favs" element = {<PageFavs />} />

      </Routes>

  </Router>
  )
}

export default App