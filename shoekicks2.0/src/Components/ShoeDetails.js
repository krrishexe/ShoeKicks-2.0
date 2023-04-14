import React from 'react'
import Navbar from './Navbar'

function ShoeDetails() {
    return (
        <div>
            <Navbar />

            <div>
                <div className="images-section">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
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
                        <button>Add to cart </button>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default ShoeDetails
