import React from 'react'
import './../App.css'

function CartSummary({ dataForCart }) {


  return <div>
    <h3>Summary</h3>

{
  dataForCart.filter(product=>product.purchased==true).map((product,index)=>
    <p>{product.name} {product.quantity} {product.quantity*product.price}</p>
  
)}

<p>Total: {dataForCart.filter(product => product.purchased == true).reduce((acc,current)=>acc+(current.quantity*current.price),0)
}
</p>
  </div>
}

export default CartSummary