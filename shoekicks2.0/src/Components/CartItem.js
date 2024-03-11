import React, { useEffect } from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import "../Media/CSS/cart.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom'


function CartItem({ item }) {

    const { cartItems, cartProductQuantity, handleRemoveFromCart } = useContext(UserContext)


    return (
        <div className="cart-item">
            {/* IMAGE START */}
            <div className="cart-item-image">
                <img
                    src={item.images[0]}
                    alt={item.name}
                    width={'120px'}
                    height={'120px'}
                />
            </div>

            <div className="cart-item-details">
                <div className="cart-item-header">
                    {/* PRODUCT TITLE */}
                    <Link to={`/singleproduct/${item.id}`} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                        <div className="cart-item-title">
                            {item.name}
                        </div>
                    </Link>

                    {/* PRODUCT SUBTITLE */}


                    {/* PRODUCT PRICE */}
                    <div className="cart-item-price">
                        MRP : {(Number(item.price.slice(2, item.price.length)) * item.quantity).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                    </div>
                </div>



                <div className="cart-item-footer">
                    <div className="cart-item-options">
                        <div className="cart-item-option">
                            <div className="descc" style={{ color: 'rgba(0,0,0,0.5)' }}>Size:</div>
                            {item.selectedSize}
                        </div>

                        <div className="cart-item-option">

                            <span className='descc' style={{ color: 'rgba(0,0,0,0.5)' }}>Quantity : </span>
                            <div className='quantity-buttons' style={{ color: 'rgba(0,0,0,0.5)', height: '40px', border: '1px solid rgba(0,0,0,0.5)' }}>
                                <span style={{ color: 'rgba(0,0,0,0.5)', borderRight: '1px solid rgba(0,0,0,0.5)' }} onClick={() => cartProductQuantity('decrement', item)}>-</span>
                                <span style={{ color: 'rgba(0,0,0,0.5)' }}>{item.quantity}</span>
                                <span style={{ color: 'rgba(0,0,0,0.5)', borderLeft: '1px solid rgba(0,0,0,0.5)' }} onClick={() => cartProductQuantity('increment', item)}>+</span>
                            </div>
                        </div>
                    </div>
                    <RiDeleteBin6Line
                        onClick={() =>
                            handleRemoveFromCart(item)
                        }
                        className="cart-item-delete"
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem
