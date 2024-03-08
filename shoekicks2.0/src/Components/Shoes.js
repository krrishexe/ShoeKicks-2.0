import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import RelatedProducts from './RelatedProducts'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

function Shoes() {
  const [particularData, setParticularData] = useState([])

  const { id } = useParams()
  const { data } = useContext(UserContext)

  const fetchParticularData = async () => {
    const url = `http://localhost:5000/api/v1/posts/${id}`
    let data = await fetch(url, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });
    let parsedData = await data.json()
    console.log(parsedData.products[0])

    setParticularData(parsedData.products[0])
  }
  useEffect(() => {
    fetchParticularData()
  },[])

  return (
    <>

      <h2 className='bigText tcCenter'>Product name</h2>

      <div className='twoFlex'>

        <div className="images-section parent">
          <div className="spacey">
            <img className='spacey-bw' src="../Media/images/f1.jpg" alt="" height={"400px"} width={"400px"} />
            <img className='spacey-bw' src="../Media/images/f2-1.png" alt="" height={"400px"} width={"400px"} />
          </div>
          <div className="spacey">
            <img className='spacey-bw' src="../Media/images/f3-2.jpg" alt="" height={"400px"} width={"400px"} />
            <img className='spacey-bw' src="../Media/images/f4-1.jpg" alt="" height={"400px"} width={"400px"} />
          </div>
        </div>
        <div className="articles-desc">

          <div className='twoFlex'>
            <span className='vendor'>NIKE &gt; Shoe_type </span>
            <AiOutlineHeart className='vendor' />
          </div>

          <h2>Naame Of The shoe</h2>
          <p className='descc'>description of the shoe</p>

          <div className='twoFlex'>
            <h3 className='vendor'>price</h3>
            <span className='vendor'>shoe Type </span>
          </div>

          <div>
            <button type='checkbox' className='checkbox'>1</button>
            <button type='checkbox' className='checkbox'>2</button>
            <button type='checkbox' className='checkbox'>3</button>
            <button type='checkbox' className='checkbox'>4</button>
            <button type='checkbox' className='checkbox'>5</button>
          </div>
          <div className='quantity-buttons'>
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div>
            <button className='add-to-cart'>Add to cart <AiOutlineShoppingCart /> </button>
          </div>

        </div>

      </div>
      <RelatedProducts />
    </>
  )
}

export default Shoes
