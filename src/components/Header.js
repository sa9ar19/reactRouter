import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="" />
                <p>reactRouter</p>
            </Link>
        </div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/ProductDetail">Products</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
    </div>
  )
}
