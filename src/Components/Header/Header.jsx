import React from 'react';
import './Header.css'
import logo from '../../assets/healthlogo.webp'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
    <section className="header">
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
        <div className='header-items'>
            <Link className='header-item'>
            <div>John Doe</div>
            </Link>

            <Link className='header-item' to="/logout">
             <div className='logout-item'>Logout</div>
            </Link>
        </div>
    </section>

    </>
  )
}

export default Header