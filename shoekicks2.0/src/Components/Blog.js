import React from 'react'
import Navbar from './Navbar'

function Blog() {
  return (
    <div className='twoFlex'>

      <div>
        <div className="images-section parent">
          <div className="twoFlex">
            <img src="../Media/images/f1.jpg" alt="" height={"300px"} width={"300px"} />
            <img src="../Media/images/f2-1.png" alt="" height={"300px"} width={"300px"} />
          </div>
          <div className="twoFlex">
            <img src="../Media/images/f3-2.jpg" alt="" height={"300px"} width={"300px"} />
            <img src="../Media/images/f4-1.jpg" alt="" height={"300px"} width={"300px"} />
          </div>
        </div>
        <div className="articles-desc">

          <div className='twoFlex'>
            <span>NIKE</span>
            <i>heart</i>
          </div>

          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!</h2>

          <div className='twoFlex'>
            <h2 className='price'></h2>
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

    </div>
  )
}

export default Blog
