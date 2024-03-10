import React, { useEffect } from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import "../Media/CSS/cart.css"


function CartItem() {

  const { cartItems, handleCartProductQuantity, handleRemoveFromCart } = useContext(UserContext)

  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])
  return (
    <>
        {
            cartItems.map((item) => (
                <tr key={item.id} >
                    <td  className="cart_product_img">
                        <a href="#"><img src={item.images[0]} alt="Product" className="cart-item-image" /></a>
                        <h5>{item.name}</h5>
                    </td>
                    <td className="qty">
                        <div className="quantity">
                            <span className="qty-minus" onClick={() => { handleCartProductQuantity('dec', item) }}><i className="fa fa-minus" aria-hidden="true" /></span>

                            <span className='qty-text'>{item.quantity}</span>
                            <span className="qty-plus" onClick={() => { handleCartProductQuantity('inc', item) }}><i className="fa fa-plus" aria-hidden="true" /></span>
                        </div>
                    </td>
                    <td className="price"><span>${item.price}</span></td>
                    <td className="total_price"><span>${item.price * item.quantity}</span></td>
                    <td className="action"><MdClose className='close-btn' onClick={() => { handleRemoveFromCart(item) }} /></td>
                </tr>
            ))
        }
    </>

)
}

export default CartItem
