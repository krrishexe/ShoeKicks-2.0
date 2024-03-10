import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext'
import { useContext } from 'react'

const ShoeItem = (props) => {

	const navigate = useNavigate();
	const {handleAddToCart} = useContext(UserContext)

	let { name, price, images0, vendor, images1, id} = props;
	const [over, setOver] = useState(false);




	return (
		<div className='moreCards'>

			<div class="product-card" >
				<div class="product-tumb"
					onMouseOver={() => setOver(true)}
					onMouseOut={() => setOver(false)}>

					<img src={over ? images1 : images0} alt="" />

				</div>
				<div class="product-details">
					<span class="product-catagory">{!vendor ? "Nike" : vendor}</span>
					<h4>
						<Link to={`/singleproduct/${id}`}>{!name ? "AIR MAX 90 SE 'SUMMIT WHITE/SAFETY ORANGE-SESAME'" : name}</Link>
					</h4>
					<div class="product-bottom-details">
						<div class="product-price">{!price ? "\u20b9 12,795.00" : price}</div>
						<div class="product-links">
							<button className='redirect' onClick={() => handleAddToCart(props.element,1)}> Add to cart</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default ShoeItem
