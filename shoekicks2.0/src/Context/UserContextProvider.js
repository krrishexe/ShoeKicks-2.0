import { useEffect, useState } from "react"
import UserContext from "./UserContext"
import { useLocation } from 'react-router-dom'


const UserContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [cartSubTotal, setCartSubTotal] = useState(0)
    const location = useLocation()



    const fetchMoreData = async () => {
        // const url = `https://shoekicks.onrender.com/posts/`;
        const url = `http://localhost:5000/api/v1/posts`;
        let data = await fetch(url, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        let parsedData = await data.json()
        // console.log(parsedData[0].products)
        setData((parsedData[0].products))
    };

    useEffect(() => {

    }, [cartItems])

    const handleAddToCart = (product, quantity, selectedSize) => {

        let items = [...cartItems]
        let index = items.findIndex((item) => item.id === product.id)
        if (index === -1) {
            items.push({ ...product, quantity: 1, selectedSize })
        } else {
            items[index].quantity += quantity
        }
        setCartItems(items)
    }

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems]
        let index = items.findIndex((item) => item.id === product.id)
        if (index === -1) {
            return
        } else {
            items.splice(index, 1)
            setCartItems(items)
        }
    }

    const cartProductQuantity = (type, product) => {
        let items = [...cartItems]
        let index = items.findIndex((item) => item.id === product.id)
        if (type === 'increment') {
            items[index].quantity += 1
        } else {
            items[index].quantity -= 1
            if (items[index].quantity < 1) {
                items[index].quantity = 1
            }
        }
        setCartItems(items)
    }

    useEffect(() => {
        fetchMoreData()
    }, [])
    return (
        <UserContext.Provider value={{ data, setData, cartItems, setCartItems, cartTotal, setCartTotal, cartSubTotal, setCartSubTotal, handleAddToCart, handleRemoveFromCart, cartProductQuantity }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;