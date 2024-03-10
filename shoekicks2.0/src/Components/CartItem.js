import React, { useEffect } from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import "../Media/CSS/cart.css"
import { RiDeleteBin6Line } from "react-icons/ri";



function CartItem({item}) {

    const { cartItems, handleCartProductQuantity, handleRemoveFromCart } = useContext(UserContext)

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])
    
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
                    <div className="cart-item-title">
                        {item.name}
                    </div>
    
                    {/* PRODUCT SUBTITLE */}
                    
    
                    {/* PRODUCT PRICE */}
                    <div className="cart-item-price">
                        MRP : &#8377;{item.price}
                    </div>
                </div>
    
                
    
                <div className="cart-item-footer">
                    <div className="cart-item-options">
                        <div className="cart-item-option">
                            <div className="cart-item-option-title">Size:</div>
                            {/* <select
                                className="cart-item-option-select"
                                onChange={(e) =>
                                    updateCartItem(e, "selectedSize")
                                }
                            >
                                {p.size.data.map((item, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={item.size}
                                            disabled={
                                                !item.enabled ? true : false
                                            }
                                            selected={
                                                data.selectedSize === item.size
                                            }
                                        >
                                            {item.size}
                                        </option>
                                    );
                                })}
                            </select> */}
                        </div>
    
                        <div className="cart-item-option">
                            <div className="cart-item-option-title">Quantity:</div>
                            {/* <select
                                className="cart-item-option-select"
                                onChange={(e) => updateCartItem(e, "quantity")}
                            >
                                {Array.from(
                                    { length: 10 },
                                    (_, i) => i + 1
                                ).map((q, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={q}
                                            selected={data.quantity === q}
                                        >
                                            {q}
                                        </option>
                                    );
                                })}
                            </select> */}
                        </div>
                    </div>
                    <RiDeleteBin6Line
                        // onClick={() =>
                        //     dispatch(removeFromCart({ id: data.id }))
                        // }
                        className="cart-item-delete"
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem
