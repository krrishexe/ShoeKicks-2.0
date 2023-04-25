import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'

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
            <span className='vendor'>NIKE</span>
            <AiOutlineHeart className='heart' />
          </div>

          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!</h2>

          <div className='twoFlex'>
            <h3 className='price'>price</h3>
            <span>Size Chart</span>
          </div>

          <div>
            <button type='checkbox'>1</button>
            <button type='checkbox'>2</button>
            <button type='checkbox'>3</button>
            <button type='checkbox'>4</button>
            <button type='checkbox'>5</button>
          </div>

          <div>
            <button className='add-to-cart '>Add to cart</button>
          </div>

        </div>

    </div>
    </>
  )
}

export default Blog
