import React, { useState, useEffect } from 'react'
import ShoeItem from './ShoeItem'

const Shoe = (props) => {
    const [articles, setArticles] = useState([]);


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
        setArticles(articles.concat(parsedData.articles))
        // setTotalResults(parsedData.totalResults)
    };

    return (
        <div>
            <div className="App">
                <ShoeItem />

                {articles.map((element) => {
                    return <div>
                        <ShoeItem vendor={element.vendor ? element.vendor : ""} name={element.name ? element.name : ""} images={element.images} source={element.source.name} />
                    </div>
                })}
            </div>


        </div>
    )
}

export default Shoe


