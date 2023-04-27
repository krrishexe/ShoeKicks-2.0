import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const ShoeItem = (props) => {

	const navigate = useNavigate();

	let { name, price, images0, vendor, images1 } = props;
	const [over, setOver] = useState(false);

	const shoes=()=>{
		navigate('/shoes')
	}

	console.log("props",props)


	return (
		<div className='moreCards'>

			<div class="product-card" >
				<div class="badge">Hot</div>
				<div class="product-tumb" 
					onMouseOver={() => setOver(true)}
					onMouseOut={() => setOver(false)}>

					<img src={over ? images1 : images0} alt="" />

				</div>
				<div class="product-details">
					<span class="product-catagory">{!vendor ? "Nike" : vendor}</span>
					<h4><a href='#'>{!name ? "AIR MAX 90 SE 'SUMMIT WHITE/SAFETY ORANGE-SESAME'" : name}</a></h4>
					{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p> */}
					<div class="product-bottom-details">
						<div class="product-price">{!price ? "\u20b9 12,795.00" : price}</div>
						<div class="product-links">
							<a href="#"><i class="fa fa-heart"></i></a>
							<button className='redirect' onClick={shoes}> Add to cart</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default ShoeItem
