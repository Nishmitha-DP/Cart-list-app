import React, { useState } from 'react'
import Button from './Button'
import './../App.css'
import { Link } from 'react-router-dom'

function HomeProductsList({ dataForHome, handleAddToCart, disabled }) {


    return (
        <div>
            <div className='navigation'>
           <Link to='/cart' className='links'>cart</Link>
           </div>
            <div className='products'>
                {
                    dataForHome.map((product, index) =>
                        <div className="product-items" key={index}>
                            <p>{product.productname}</p>
                            <p>${product.price}</p>
                            {
                                product.quantity > 0 ?
                                    <div>
                                        <p>Qty: {product.quantity}</p>
                                        < Button disabled={disabled} onClick={() => handleAddToCart(index)} value={'add to cart'} />
                                    </div> :
                                    <p className='noqty'>Out of stock</p>
                            }

                        </div>
                    )
                }

            </div><br /><br />

        </div>
    )
}

export default HomeProductsList
