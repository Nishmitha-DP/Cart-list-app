import React, { useState, useContext } from 'react'
import data from '../Global/data.json'
import './../App.css'
import HomeProductsList from './HomeProductsList'
import CartProductsList from './CartProductsList'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CartSummary from './CartSummary'


function ProductsListHandle() {

   
    const [dataForCart, setDataForCart] = useState([])
    const dataForHome = data

   
    const handleAddToCart = (index) => {
        // setDisabled(true);
        dataForHome[index].quantity -= 1
        const currentProduct = dataForCart.findIndex(
            (product) => product.name === dataForHome[index].productname
        );

        if (currentProduct !== -1) {
            const updatedData = [...dataForCart];
            updatedData[currentProduct].quantity += 1;

            if (updatedData[currentProduct].quantity === -1) {
                updatedData.splice(currentProduct, 1);
            }
            setDataForCart(updatedData);

        } else {
            setDataForCart((prevData) => [
                ...prevData,
                {
                    name: dataForHome[index].productname,
                    price: dataForHome[index].price,
                    quantity: 1,
                    purchased:false,
                },
            ]);
        }
    }

    const handleRemoveFromCart = (index) => {
        const updatedData = [...dataForCart];
        updatedData.splice(dataForCart[index], 1);
        setDataForCart(updatedData);
    };

    const handlePurchase = (index) => {
        const updatedData = [...dataForCart];
        updatedData[index].purchased=true
        setDataForCart(updatedData)
    };

    return (
        <div>

            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<HomeProductsList dataForHome={dataForHome} handleAddToCart={handleAddToCart}  />} />
                    <Route path='/cart' element={<CartProductsList dataForCart={dataForCart} handleRemoveFromCart={handleRemoveFromCart}  handlePurchase={handlePurchase}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ProductsListHandle