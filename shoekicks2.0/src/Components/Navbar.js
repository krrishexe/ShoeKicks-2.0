import React , {useEffect} from 'react'
import { Link } from 'react-router-dom';
import "../Media/CSS/style.css"
import {FaShoppingCart} from 'react-icons/fa'

function Navbar() {
  const handleScroll =()=>{
    console.log(window.scrollY)
    if(window.scrollY > 500){
      document.getElementById("header").classList.add("sticky")
    }else{
      document.getElementById("header").classList.remove("sticky")
    } 
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[])

  return (
    <>
      <section id="header">
        <Link to={"/"}><img src={require("../Media/images/site_logo.png")} className="logo" alt="ShoeKicks" /> </Link>
        <div>
          <ul id="navbar">
            <li><Link className="active" to={"/"}>Home</Link></li>
            <li><Link to={"/Shop"}>Shop</Link></li>
            <li><Link to={"/Blog"}>Blog</Link></li>
            <li><Link to={"/Products"}>Products</Link></li>
            <li><Link to={"/Cart"}> <FaShoppingCart/> <span className='cart-counter'>5</span> </Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Navbar
