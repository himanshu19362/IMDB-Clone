import React from 'react'
import  './Navbar.css'
import logo from './../../images/imdb_logo.png'

function Navbar() {
    return (
        <div className='navbar'>           
            <img src={logo} />            
        </div>
    )
}

export default Navbar
