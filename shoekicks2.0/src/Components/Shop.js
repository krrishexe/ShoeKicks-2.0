import React, { useEffect } from 'react'
// import Carousel2 from './Carousel2'
import Footer from './Footer'
import "../Media/images/Nike_Avatars_Process-vimeo-442444722-hls-fastly_skyfire-2828.mp4"
import "../Media/images/lebron-17.mp4"
import "../Media/images/lebron-17 (2).mp4"
import HzScroll from './HzScroll'
import { gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import ScrollMagic from "scrollmagic";
// import { Controller, Scene } from 'react-scrollmagic';


gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

// var controller = new ScrollMagic.Controller();

const values = [
  {x:-900,y:-20},
  {x:-700,y:30},
  // {x:950,y:-100},
  // {x:650,y:-100},
  // {x:1000,y:100},
  // {x:window.innerWidth,y:-300}
]


const Shop = () => {
  
  useEffect(()=>{

    gsap.to(".head",{
      x:-600,
      color:"rgba(255, 255, 255, 0)",
      scrollTrigger:{
        trigger:".head",
        // toggleActions:"play pause reverse none",
        start:"top bottom",
        // markers:true,
        scrub:3,
      },
      duration:2,
    })
    

    gsap.to(".imgHover",{
    //   motionPath:{
    //     values:"values"
    //     // curviness:"1.5",
        
    // },
      motionPath:values,
      scrollTrigger:{
        trigger:".imgHover",
        toggleActions:"play pause reverse none",
        start:"top 700px",
        end:"bottom",
        markers:true,
        scrub:3,
      },
      duration:10,
    })

    
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

        <h1>LeBron 17: <span>Air</span> Unrivaled</h1>
        <p> <span className='bigText'>A</span> love affair with performance air, continued.<br></br> The LeBron 17 combines first-of-its-kind Max Air in the heel with two Zoom Air pods in the forefoot for comfort and responsiveness.<br></br> The LeBron 17 also features an innovative, incredibly lightweight knitposite upper for ultimate movement and flexibility.</p>

      </div>

      <div className='shop-items-page '>
        {/* <h3 className='headh3'>17</h3> */}
      <h1 className='head'>Lebron<span className="comma">'</span>s 17</h1>
      </div>

      <div className='shop-items space'>
        <p> <span className='bigText'>T</span>he largest heel Max Air unit featured in a basketball shoe provides unprecedented cushioning without sacrificing stability or comfort.</p>
      </div>

      <div className='Shop'>
        <video autoPlay muted loop playsInline className='backVideo' width={"100%"} height={"100vh"}>
          <source src={require('../Media/images/lebron-17.mp4')} type='video/mp4' />
        </video>
      </div>

      <div className='shop-items'>
        <p> <span className='bigText'>S</span>ince LeBron's first-ever signature sneaker, Air has adapted to his ever-evolving game. Get a detailed look above at the evolution of LeBron's signature line and revisit milestones from his illustrious career.

        </p>
      </div>

      <div className='Shop'>
        <video autoPlay muted loop playsInline className='backVideo' width={"100%"} height={"100vh"}>
          <source src={require('../Media/images/lebron-17 (2).mp4')} type='video/mp4' />
        </video>
      </div>


      



      <div className='shop-items center'>
        <h4>History of Lebron's.</h4>
        <p> <span className='bigText'>S</span>croll to see some magic <img className='imgHover' src={require("../Media/images/magic-wand_1fa84.png")} alt="" /> </p>
      </div>

      {/* <Carousel2 /> */}
      <HzScroll />


      <Footer />

    </>
  )
}

export default Shop