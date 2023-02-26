import React from 'react'
import "../Media/images/Nike_Avatars_Process-vimeo-442444722-hls-fastly_skyfire-2828.mp4"
import "../Media/images/lebron-17.mp4"
import "../Media/images/lebron-17 (2).mp4"

function Shop() {
  return (
    <>
    <div className='Shop'>
      <video autoPlay muted loop  playsInline  className='backVideo' width={"100%"} height={"100vh"}>
        <source src={require('../Media/images/Adidas_-_2019_Brand_Video-vimeo-310693777-hls-akfire_interconnect_quic-2886.mp4')} type='video/mp4'/>
      </video>
        <button className='btnShop'>Explore</button>
    </div>

    <div className='shop-items'>

    <h1 >LeBron 17: <span>Air</span>  Unrivaled</h1>
    <p>A love affair with performance air, continued.<br></br> The LeBron 17 combines first-of-its-kind Max Air in the heel with two Zoom Air pods in the forefoot for comfort and responsiveness.<br></br> The LeBron 17 also features an innovative, incredibly lightweight knitposite upper for ultimate movement and flexibility.</p>

    </div>

    <div className='Shop'>
      <video autoPlay muted loop  playsInline className='backVideo' width={"100%"} height={"100vh"}>
        <source src={require('../Media/images/lebron-17.mp4')} type='video/mp4'/>
      </video>
    </div>

    <div className='shop-items'>
    </div>
    <div className='Shop'>
    <h2> Force <span>Meets</span> Function </h2>
      <video autoPlay muted loop  playsInline className='backVideo' width={"100%"} height={"100vh"}>
        <source src={require('../Media/images/lebron-17 (2).mp4')} type='video/mp4'/>
      </video>
    </div>




    
    </>
  )
}

export default Shop
