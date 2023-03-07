import React from 'react'
import { useEffect } from 'react'
import { Scene,ScrollMagic } from 'scrollmagic'
import { Timeline, TweenLite , Power1 } from 'gsap/gsap-core'
// import GsapScroll from './GsapScroll'
import Carousel2 from './Carousel2'
import Footer from './Footer'
import "../Media/images/Nike_Avatars_Process-vimeo-442444722-hls-fastly_skyfire-2828.mp4"
import "../Media/images/lebron-17.mp4"
import "../Media/images/lebron-17 (2).mp4"

function Shop() {
  useEffect(() => {

    const flightPath = {
      curviness: 1.5,
      autoRotate: true,
      values: [
        { x: 100, y: -20 },
        { x: 300, y: 30 },
        { x: 500, y: 100 },
        { x: 750, y: -100 },
        { x: 350, y: -50 },
        { x: 600, y: 150 },
        { x: 950, y: -100 },
        { x: 650, y: -100 },
        { x: 1000, y: 100 },
        { x: window.innerWidth, y: -300 }



      ]
    }

    const tween = new Timeline();

    tween.add(
      TweenLite.to('.paper-plane', 3, {
        bezier: flightPath,
        ease: Power1.easeInOut
      })
    )

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
      triggerElement: '.animation',
      duration: 3000,
      triggerHook: 0,



    })
      .setTween(tween)
      // .addIndicators()
      .setPin(".animation")
      .addTo(controller);


  })
  return (
    <>
      <div className='Shop'>
        <video autoPlay muted loop playsInline className='backVideo' width={"100%"} height={"100vh"}>
          <source src={require('../Media/images/Adidas_-_2019_Brand_Video-vimeo-310693777-hls-akfire_interconnect_quic-2886.mp4')} type='video/mp4' />
        </video>
        <button className='btnShop'>Explore</button>
      </div>

      <div className='shop-items'>

        <h1 >LeBron 17: <span>Air</span>  Unrivaled</h1>
        <p> <span className='bigText'>A</span> love affair with performance air, continued.<br></br> The LeBron 17 combines first-of-its-kind Max Air in the heel with two Zoom Air pods in the forefoot for comfort and responsiveness.<br></br> The LeBron 17 also features an innovative, incredibly lightweight knitposite upper for ultimate movement and flexibility.</p>

      </div>

      <div className='Shop'>
        <video autoPlay muted loop playsInline className='backVideo' width={"100%"} height={"100vh"}>
          <source src={require('../Media/images/lebron-17.mp4')} type='video/mp4' />
        </video>
      </div>

      <div className='shop-items space'>
        <p> <span className='bigText'>T</span>he largest heel Max Air unit featured in a basketball shoe provides unprecedented cushioning without sacrificing stability or comfort.</p>
      </div>

      <div className='Shop'>
        <video autoPlay muted loop playsInline className='backVideo' width={"100%"} height={"100vh"}>
          <source src={require('../Media/images/lebron-17 (2).mp4')} type='video/mp4' />
        </video>
      </div>

      <div className='shop-items'>
        <p> <span className='bigText'>S</span>ince LeBron's first-ever signature sneaker, Air has adapted to his ever-evolving game. Get a detailed look above at the evolution of LeBron's signature line and revisit milestones from his illustrious career.

        </p>
      </div>

      <div className='shop-items-page animation'>
        <img class="paper-plane" src={require("../Media/images/download-vector-shoes-image-png-image-pngimg-2.png")} alt="" />
      </div>




      <div className='shop-items'>
        <h4>to be done</h4>
      </div>

      <Carousel2 />


      <Footer />

    </>
  )
}

export default Shop

