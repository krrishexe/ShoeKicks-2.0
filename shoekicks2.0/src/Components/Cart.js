import React from 'react'
import { useState } from 'react'
import CartItem from './CartItem'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import { BsCartX } from "react-icons/bs";
import "../Media/CSS/cart.css"
import { Link } from 'react-router-dom'
import { FaShopify } from "react-icons/fa";
import Bo from './Bo'


function Cart() {

  const { cartItems, cartSubTotal } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  return (
    <div style={{ background: "#fff" }}>
      <div className="breadcrumb-area">
        <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center">
        </div>
      </div>
      <div className="container1">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={'/'}><i className="fa fa-home" /> Home</Link></li>
                <li className="breadcrumb-item"><Link to={"/Products"}><FaShopify /> Shop</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Cart</li>
              </ol>
            </nav>
          </div>
        </div>
        <div>
          <h1 className='tcCenter1'>Shopping Bag</h1>
        </div>
      </div>

      {
        !cartItems?.length && <div className='empty-cart'>
          <Bo />
          <div style={{ display: 'block', height: '150px' }}></div>
        </div>
      }

      {!!cartItems?.length && (
        <>
          <div className='container2'>
            <div className='row1'>
              <div style={{ flex: '2' }}>
                <div style={{ fontSize: '24px', fontWeight: '600', color: '#000', marginBottom: '10px' }}>
                  Cart Items :
                </div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className="summary">
                <div style={{ fontSize: '24px', fontWeight: '600', color: '#000', marginTop: '10px', marginBottom: '10px' }}>
                  Summary :
                </div>

                <div className="summary-content">
                  <div className="summary-subtotal">
                    <div className="subtotal-title">Subtotal</div>
                    <div className="subtotal-value"><button className="checkout-button" >
                      Checkout : &#8377;{cartSubTotal}
                      {loading && <img src="/spinner.svg" />}
                    </button></div>
                  </div>
                  <div className="summary-note">

                    <span style={{ color: 'red' }}>Note : </span>
                    The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include delivery costs and international transaction fees.
                  </div>

                </div>
              </div>


              <div className="thankyou-message">
                <span>Thank you</span>
              </div>

            </div>
          </div>

        </>

      )}

    </div>
  )
}

export default Cart
