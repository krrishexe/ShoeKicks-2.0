import { useEffect, useState } from "react"
import UserContext from "./UserContext"
import { useLocation } from 'react-router-dom'


const UserContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [user, setUser] = useState({})
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });
    const [cartTotal, setCartTotal] = useState(0)
    const [cartSubTotal, setCartSubTotal] = useState(0)
    const [cartCount, setCartCount] = useState(0)
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
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        let count = 0;
        cartItems.map((item) => count += item.quantity)
        setCartCount(count)
        let subTotal = 0;
        cartItems.map((item) =>
            subTotal += (Number(item.price.slice(2, item.price.length)) * item.quantity)
        )
        setCartSubTotal(subTotal)
    }, [cartItems, cartCount])

    const handleAddToCart = (product, quantity, selectedSize) => {
        let items = [...cartItems]
        let index = items.findIndex((item) => item.id === product.id)
        if (index === -1) {
            items.push({ ...product, quantity: quantity, selectedSize })
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
        <UserContext.Provider value={{ data, setData, cartItems, setCartItems, cartTotal, setCartTotal, cartSubTotal, setCartSubTotal, handleAddToCart, handleRemoveFromCart, cartProductQuantity, cartCount,user,setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;