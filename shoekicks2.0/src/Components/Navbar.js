import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import "../Media/CSS/style.css"
import { FaShoppingCart } from 'react-icons/fa'

function Navbar() {
  const handleScroll = () => {
    // console.log(window.scrollY)
    if (window.scrollY > 500) {
      document.getElementById("header").classList.add("sticky")
    } else {
      document.getElementById("header").classList.remove("sticky")
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <section id="header">
        <NavLink to={"/"}><img src={require("../Media/images/site_logo.png")} className="logo" alt="ShoeKicks" /> </NavLink>
        <div>
          <ul id="navbar">
            <li><NavLink activeClassname="active" to={"/"}>Home</NavLink></li>
            <li><NavLink activeClassname="active" to={"/Shop"}>Shop</NavLink></li>
            <li><NavLink activeClassname="active" to={"/Blog"}>Blog</NavLink></li>
            <li><NavLink activeClassname="active" to={"/Products"}>Products</NavLink></li>
            <li><NavLink activeClassname="active" to={"/Cart"}> <FaShoppingCart /> <span className='cart-counter'>5</span> </NavLink></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Navbar
