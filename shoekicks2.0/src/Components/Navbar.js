import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import "../Media/CSS/style.css"
import { FaShoppingCart } from 'react-icons/fa'
import UserContext from '../Context/UserContext';
import { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';


function Navbar() {
  const handleScroll = () => {
    // console.log(window.scrollY)
    if (window.scrollY > 500) {
      document.getElementById("header").classList.add("sticky")
    } else {
      document.getElementById("header").classList.remove("sticky")
    }
  }
  const location = useLocation();
  const { cartCount } = useContext(UserContext)



  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  if (location.pathname === "/signup") {
    return null; // Return null to not render anything
  } else if (location.pathname === '/login') {
    return null
  }
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = async () => {
    try {
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('cartItems');

      window.location.href = '/login';
      // const accessToken = localStorage.getItem('accessToken');
      // const url = `http://localhost:5000/api/v1/user/logout`;
      // let data = await axios.post(url, { accessToken }, {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`
      //   },
      //   withCredentials: true,
      // });
      // console.log(data.data);

    } catch (error) {
      console.log("Error logging out user : ", error)

    }
  }

  return (
    <>
      <section id="header">
        <NavLink to={"/"}><img src={require("../Media/images/site_logo.png")} className="logo" alt="ShoeKicks" /> </NavLink>
        <div>
          <ul id="navbar">
            <li><NavLink activeclassname="active" to={"/"}>Home</NavLink></li>
            <li><NavLink activeclassname="active" to={"/lebron"}>Lebron</NavLink></li>
            <li><NavLink activeclassname="active" to={"/Products"}>Products</NavLink></li>
            <li><NavLink activeclassname="active" to={"/Cart"}> <FaShoppingCart /> {!!cartCount && <span className='cart-counter'>{cartCount}</span>} </NavLink></li>
            {

              user ? <li onClick={() => handleLogout()}> <p className='logout'>Logout</p></li> : <li><NavLink activeclassname="active" to={"/login"}>Login</NavLink></li>
            }

          </ul>
        </div>
      </section>
    </>
  )
}

export default Navbar
