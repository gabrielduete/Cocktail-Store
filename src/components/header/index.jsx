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
          <li className='liMenu'><a href='#home'>Home</a></li>
          <li className='liMenu'><a href='#main'>Cocktails</a></li>
          <li className='liMenu'><a href='#contact'>Contact us</a></li>
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
          arrayFavs={props.arrayFavs}
          setArrayFavs={props.setArrayFavs}
          removeDrink={props.removeDrink}
          arrayShop={props.arrayShop}
          setArrayShop={props.setArrayShop}
        />
      </header >
    </>
  )
}

export default Header
