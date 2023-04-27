import { connect } from "react-redux";
import ShoeItem from "../Components/ShoeItem";
import { addToCart } from "../Services/Actions/Action";



const mapstatetoprops =state =>({

})

const mapdispatchprops=dispatch=>({
    addToCartHandler : data => dispatch(addToCart(data))
})



export default connect(mapstatetoprops,mapdispatchprops)(ShoeItem) ;
















// mapstatetoprops for -- passing props from store to component
// mapdispatchprops for -- passing props from component to store