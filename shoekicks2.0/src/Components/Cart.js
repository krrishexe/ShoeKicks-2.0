import React from 'react'
import { useState } from 'react'
import CartItem from './CartItem'

function Cart() {
  const [data, setData] = useState(false)
  return (
    <div>
      <div className="cart-content">
        
      {
        data ? <>
                  <h2 className='tcCenter'>Cart is Empty : (</h2>
                  <button className='btnShop1' >Browse Products</button>
              </> 
         : 
              <>
              <CartItem /> 
              <div className="cart-footer">
                <div className="sub-total">
                  <span className='text'>Subtotal :</span>
                  <span className='text total'>&#8377; 1234</span>
                </div>
                <div className="btn">
                  <button className='checkout-cta'>CheckOut</button>
                </div>
              </div>
              </>
      
      }
      </div>
    </div>
  )
}

export default Cart
