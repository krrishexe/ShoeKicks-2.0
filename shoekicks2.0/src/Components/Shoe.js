import React, { useState, useEffect } from 'react'
import ShoeItem from './ShoeItem'

const Shoe = (props) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {

        fetchMoreData();

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
        console.log(parsedData)
        console.log(parsedData[0])
        setProducts(products.concat(parsedData[0].products))
        // setTotalResults(parsedData.totalResults)
    };

    return (
        <div>
            <div className="App">
                <ShoeItem />

                {products.map((element) => {
                    return <div>
                        <ShoeItem vendor={element.vendor ? element.vendor : ""} name={element.name ? element.name : ""} images={element.images} price={element.price} />
                    </div>
                })}
            </div>


        </div>
    )
}

export default Shoe


