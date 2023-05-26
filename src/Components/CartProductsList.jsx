import React, { useState } from 'react'
import './../App.css'
import Button from './Button'
import CartSummary from './CartSummary'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomeProductsList from './HomeProductsList'

function CartProductsList({ dataForCart, handleRemoveFromCart, handlePurchase }) {

    return <div>
        <div className='navigation'>
            <Link to='/' className='links'>Back</Link>
        </div>
        <div className='carts'>
            <div className='cart-data'>
                <div className="cart-list">
                    {
                        dataForCart.filter(item => item.quantity > 0).map((product, index) =>
                            <div className="cart-items" key={index}>
                                <p>{product.name}</p>
                                <p>
                                    < Button onClick={() => handleRemoveFromCart(index)} value={'Remove from cart'} />
                                    {product.quantity}
                                    < Button onClick={() => handlePurchase(index)} value={'Purchase'} />
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
            <CartSummary dataForCart={dataForCart} />

        </div>
    </div>

}

export default CartProductsList
