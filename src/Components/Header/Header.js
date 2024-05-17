import React from 'react'
import "./Header.css"
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='heading'>
            <h1>Logo</h1> 

            <span className="headerpages">
                <p>Home</p>
                <p>Contact</p>
                <p>Cart</p>
                <p>Category</p>
            </span>

            
        </div>
      
    </header>
  )
}

export default Header
