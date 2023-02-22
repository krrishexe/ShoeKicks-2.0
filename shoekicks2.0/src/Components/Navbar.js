import React from 'react'
import "../Media/CSS/style.css"


function Navbar() {
  return (
    <>
      <section id="header">
        <a href="/"> <img src={require("../Media/images/site_logo.png")} className="logo" alt="ShoeKicks" /> </a>
        <div>
          <ul id="navbar">
            <li><a className="active" href="index.html">Home</a></li>
            <li><a href="Shop.html">Shop</a></li>
            <li><a href="Blog.html">Blog</a></li>
            <li><a href="About.html">About</a></li>
            <li><a href="contacts.html">Contacts</a></li>
            <li><a href="Cart.html"><img src="images/shopping-bag.png" alt="" height="25px" /></a></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Navbar
