import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import RelatedProducts from './RelatedProducts'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

function Shoes() {
  const [particularData, setParticularData] = useState([])

  const { id } = useParams()
  const { /* data */ } = useContext(UserContext) // Commented out as it's not used

  const fetchParticularData = async (id) => {
    const url = `http://localhost:5000/api/v1/posts/${id}`
    let data = await fetch(url, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });
    let parsedData = await data.json()
    console.log(parsedData.products)

    setParticularData(parsedData.products)
  }
  useEffect(() => {
    fetchParticularData(id)
  }, [id]) // Added id as a dependency

  return (
    <>
      {
        particularData.map((item) => {
          return (
          <div key={item.id}>
            <h2 className='bigText tcCenter'>{item.name}</h2>

            <div className='twoFlex'>

              <div className="images-section parent">
                <div className="spacey">
                  <img className='spacey-bw' src={item.images[0]} alt="" height={"400px"} width={"400px"} />
                  <img className='spacey-bw' src={item.images[1]} alt="" height={"400px"} width={"400px"} />
                </div>
                <div className="spacey">
                  <img className='spacey-bw' src={item.images[2]} alt="" height={"400px"} width={"400px"} />
                  <img className='spacey-bw' src={item.images[3]} alt="" height={"400px"} width={"400px"} />
                </div>
              </div>
              <div className="articles-desc">

                <div className='twoFlex'>
                  <span className='vendor'>NIKE &gt; {item.vendor}</span>
                  <AiOutlineHeart className='vendor' />
                </div>

                <h2>{item.name}</h2>
                <p className='descc'>{item.description}</p>

                <div className='twoFlex'>
                  <h3 className='vendor'>{item.price}</h3>
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
          </div>)
        })
      }
    </>

  )
}

export default Shoes