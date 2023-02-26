import React from 'react'
import "../Media/images/Nike_Avatars_Process-vimeo-442444722-hls-fastly_skyfire-2828.mp4"

function Shop() {
  return (
    <>
    <div className='Shop'>

      <video autoPlay loop muted playsInline className='backVideo' width={"100%"} height={"100vh"}>
        <source src={require('../Media/images/Nike_Avatars_Process-vimeo-442444722-hls-fastly_skyfire-2828.mp4')} type='video/mp4'/>
      </video>

        <button className='btnShop'>Explore</button>

    </div>
    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, velit ratione doloribus odit delectus perferendis?</h1>
    </>
  )
}

export default Shop

