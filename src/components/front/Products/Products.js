import React from 'react';
import './Products.css'

const Products = ({productItems, handleAddProduct}) => {
  
  return (
    <div className='products'>
      {productItems.map((productItem)=>(
              <div className='card'>
                  <div className='image'>
                      <img className='product-image' src={productItem.image} alt={productItem.name}/>
                  </div>
                  <div className='product-name'>
                      <h3>
                          {productItem.name}
                      </h3>
                  </div>
                  <div className='product-price'>${productItem.price}</div>
                    <button 
                      className='product-add-button' 
                      onClick={()=>handleAddProduct(productItem)}>Add to Card</button>
              </div>
        ))}
    </div>
  )
}

export default Products
