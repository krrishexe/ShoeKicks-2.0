import { useEffect, useState } from "react"
import UserContext from "./UserContext"


const UserContextProvider = ({ children }) => {
    const [data, setData] = useState([])


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
        console.log(parsedData[0].products)

        setData((parsedData[0].products))

    };
    useEffect(() => {
        fetchMoreData()
    }, [])
    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;