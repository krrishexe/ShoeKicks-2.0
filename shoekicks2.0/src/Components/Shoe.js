import React, { useState, useEffect } from 'react'
import ShoeItem from './ShoeItem'
import Skeleton from 'react-loading-skeleton';

const Shoe = (props) => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading]= useState(true)


    useEffect(() => {

        setTimeout(() => {
            
            fetchMoreData();
        }, 2000);
    })

    const fetchMoreData = async () => {
        const url = `http://localhost:5000/posts/`;
        let data = await fetch(url,{
            mode: 'cors',
            method: 'GET',
            headers: {
                'content-type': 'application/json'
                }
        });
        let parsedData = await data.json()
        // console.log(parsedData)
        // console.log(parsedData[0])
        setProducts(products.concat(parsedData[0].products))
    
        // setTotalResults(parsedData.totalResults)
    };

    return (
        <div>
            <div className="App">
                <ShoeItem />

                {products.map((element) => {
                    return <div key={element.url}>
                        <ShoeItem vendor={element.vendor ? element.vendor : ""} name={element.name ? element.name : ""} images={element.images} price={element.price} />
                    </div>
                })}
            </div>


        </div>
    )
}

export default Shoe


