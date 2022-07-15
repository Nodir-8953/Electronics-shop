import React from 'react'
import Products from '../Products/Products'
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
import {Routes, Route} from 'react-router-dom'

const Routec = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCarClearence}) => {
  return (
    <div>
      <Routes>
          <Route 
            path='/' exact 
            element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />} 
            />
            <Route
               path='/signup' exact
               element={<Signup />} 
            />
            <Route
               path='/cart' exact
               element={<Cart 
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleCarClearence={handleCarClearence}
               />} 
               
            />
      </Routes>
    </div>
  )
}

export default Routec
