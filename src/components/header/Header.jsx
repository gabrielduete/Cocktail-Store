import React, { useState } from "react"
import "./style.css"
import Icone from "../../assets/img/iconByFreepik.png"
import MenuHamb from "./components/MenuHamb"
import IconLinks from "./components/IconsLinks"

function Header(props) {

  const [openMenu, setOpenMenu] = useState(false)

  const changeMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (

    <>
      <header>
        <img src={Icone} alt="iconHeader" />
        <ul>
          <li className='liMenu'>Home</li>
          <li className='liMenu'>Cocktails</li>
          <li className='liMenu'>Contact us</li>
        </ul>
        <IconLinks
          arrayFavs={props.arrayFavs}
          setArrayFavs={props.setArrayFavs}
          removeDrink={props.removeDrink}
          arrayShop={props.arrayShop}
          setArrayShop={props.setArrayShop}
        />
        <MenuHamb
          className='componentMenu'
          openMenu={openMenu}
          changeMenu={changeMenu}
        />
      </header>
    </>

  )
}

export default Header
