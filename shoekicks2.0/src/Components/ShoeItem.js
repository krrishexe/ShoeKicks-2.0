import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShoeItem = (props) => {

	const { handleAddToCart } = useContext(UserContext)

	let { name, price, images0, vendor, images1, id } = props;
	const [over, setOver] = useState(false);
	const user = JSON.parse(localStorage.getItem('user'));

	const handleBeforeAddToCart = (item, quantity, selectedSize) => {
		if (user && user.isVerified === true) {
			handleAddToCart(item, quantity, selectedSize)
		} else if(user && user.isVerified === false) {
			toast('Please verify your account to buy products!', {
				position: "bottom-left",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "dark",
			})
		}
		else{
			toast('Please login to buy products!', {
				position: "bottom-left",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "dark",
			})
		}
	}


	return (
		<div className='moreCards'>

			<div className="product-card" >
				<div className="product-tumb"
					onMouseOver={() => setOver(true)}
					onMouseOut={() => setOver(false)}>

					<img src={over ? images1 : images0} alt="" />

				</div>
				<div className="product-details">
					<span className="product-catagory">{!vendor ? "Nike" : vendor}</span>
					<h4>
						<Link to={`/singleproduct/${id}`}>{!name ? "AIR MAX 90 SE 'SUMMIT WHITE/SAFETY ORANGE-SESAME'" : name}</Link>
					</h4>
					<div className="product-bottom-details">
						<div className="product-price">{!price ? "\u20b9 12,795.00" : price}</div>
						<div className="product-links">
							<button className='redirect' onClick={() => handleBeforeAddToCart(props.element, 1)}> Add to cart</button>
							<ToastContainer />
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default ShoeItem