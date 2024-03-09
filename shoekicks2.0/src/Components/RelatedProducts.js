import React, { useEffect } from 'react'
import ShoeItem from './ShoeItem'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'


function RelatedProducts() {
    const { data } = useContext(UserContext)
    
    return (
        <>
            <h2 className='tcCenter'>Related Products</h2>
            <div className='related-products'>
                <ShoeItem />
                <ShoeItem />
                <ShoeItem />
            </div>
        </>
    )
}

export default RelatedProducts
