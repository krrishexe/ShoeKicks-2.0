import React from 'react'
import Navbar from './Navbar'

function Blog() {
  return (
    <>

    <h1 className='bigText tcCenter'>Home - Product name</h1>

    <div className='twoFlex'>

        <div className="images-section parent">
          <div className="spacey">
            <img className='spacey-bw' src="../Media/images/f1.jpg" alt="" height={"400px"} width={"400px"} />
            <img className='spacey-bw' src="../Media/images/f2-1.png" alt="" height={"400px"} width={"400px"} />
          </div>
          <div className="spacey">
            <img className='spacey-bw' src="../Media/images/f3-2.jpg" alt="" height={"400px"} width={"400px"} />
            <img className='spacey-bw' src="../Media/images/f4-1.jpg" alt="" height={"400px"} width={"400px"} />
          </div>
        </div>
        <div className="articles-desc">

          <div className='twoFlex'>
            <span>NIKE</span>
            <i>heart</i>
          </div>

          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!</h2>

          <div className='twoFlex'>
            <h3 className='price'>price</h3>
            <span>Size Chart</span>
          </div>

          <div>
            <button type='checkbox'></button>
            <button type='checkbox'></button>
            <button type='checkbox'></button>
            <button type='checkbox'></button>
            <button type='checkbox'></button>
          </div>

          <div>
            <button>Add to cart</button>
          </div>

        </div>

    </div>
    </>
  )
}

export default Blog
