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
        <MenuHamb
          openMenu={openMenu}
          changeMenu={changeMenu}
        />
        <IconLinks
          arrayFavs={props.arrayFavs}
          setArrayFavs={props.setArrayFavs}
          removeDrink={props.removeDrink}
          arrayShop={props.arrayShop}
          setArrayShop={props.setArrayShop}
        />
      </header>
    </>

  )
}

export default Header
