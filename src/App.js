import React, {useState} from 'react'
import data from './components/back/Data/Data'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/front/Header/Header'
import Routec from './components/front/Routes/Routes'

const App = () => {
  const {productItems} = data
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item)=>item.id ===product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item)=>item.id === product.id ?
        {...ProductExist, quantity: ProductExist.quantity + 1}  :
        item)
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }
  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item)=>item.id ===product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item)=>item.id !== product.id ));

    }else{
      setCartItems(
        cartItems.map((item) => item.id === product.id ? 
          {...ProductExist, quantity: ProductExist.quantity - 1 } :
          item
        )
      )
    }
  }
  const handleCarClearence = ()=>{
    setCartItems([])
  }
  return (
    <div>
        <BrowserRouter>
          <Header cartItems={cartItems}/>
          <Routec 
            productItems={productItems} 
            cartItems={cartItems}  
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCarClearence={handleCarClearence}
          />
        </BrowserRouter>
    </div>
  )
}

export default App
