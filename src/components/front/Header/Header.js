import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = ({cartItems}) => {
  return (
      <header className="header">
          <div>
              <h1>
                  <Link to="/" className='logo' >
                      Electronics Shop
                  </Link>
              </h1>
          </div>
          <div className="header-links">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/signup'>SignUp</Link>
                </li>
                <li>
                    <Link to='/cart' className='cart'>
                        <i class='fas fa-shopping-cart'/>
                        <span className='cart-length'>
                            {cartItems.length ===0 ? "" : cartItems.length}
                        </span>
                    </Link>
                </li>
            </ul>
          </div>
      </header>
  )
}

export default Header
