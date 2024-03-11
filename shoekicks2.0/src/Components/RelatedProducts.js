import React, { useEffect, useState } from 'react'
import ShoeItem from './ShoeItem'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function RelatedProducts() {
    const { data } = useContext(UserContext)
    const [data1, setData1] = useState([])

    useEffect(() => {
        if (data && data.length >= 3) {
          let newData1 = []
          for(let i = 0; i < 3; i++){
            let rand = Math.floor(Math.random() * data.length)
            newData1.push(data[rand])
          }
          setData1(newData1)
        }
      }, [data])

    return (
        <>
            <h2 className='tcCenter'>Related Products</h2>
            <div className='related-products'>
                {
                    data1.map((shoe, index) => {
                        return <ShoeItem
                            key={index}
                            name={shoe.name}
                            price={shoe.price}
                            images0={shoe.images[0]}
                            vendor={shoe.vendor}
                            images1={shoe.images[1]}
                            id={shoe.id}
                            element={shoe}
                        />
                    })
                }
            </div>
        </>
    )
}

export default RelatedProducts