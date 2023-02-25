import React from 'react'
import { Link } from 'react-router-dom';
import "../Media/CSS/style.css"


function Navbar() {
  return (
    <>
      <section id="header">
        <Link to={"/"}><img src={require("../Media/images/site_logo.png")} className="logo" alt="ShoeKicks" /> </Link>
        <div>
          <ul id="navbar">
            <li><Link className="active" to={"/"}>Home</Link></li>
            <li><Link to={"/Shop"}>Shop</Link></li>
            <li><Link to={"/Blog"}>Blog</Link></li>
            <li><Link to={"About"}>About</Link></li>
            <li><Link to={"/Contacts"}>Contacts</Link></li>
            <li><a href="Cart.html"><img src="images/shopping-bag.png" alt="" height="25px" /></a></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Navbar
