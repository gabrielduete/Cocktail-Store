import React from 'react'
import './App.css'
import ContainerComponents from './components/container/ContainerComponents'
import PageFavs from './Pages/pageFavs/PageFavs'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App(){
  return (
    <Router>

    <Switch>

      <Route exact path="/">
        <ContainerComponents />
      </Route>

      <Route path="/favs">
        <PageFavs />
      </Route>

    </Switch>
  </Router>
  )
}

export default App