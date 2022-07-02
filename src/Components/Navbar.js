import React from 'react';
import './Style.css';
import logo from './logo.png';

export default function Navbar() {
  return (
    <nav class="navbar">
        <div class="container-fluid navbar1">
            <div className='justify-content-start navbar-brand'>
                <img src={logo} alt="" width="80" height="38" className='navbar-image'/>
                <h3> DAO KING </h3>
            </div>
            <div className='justify-content-end navbar-button'>
                <button class="btn btn-outline nav-btn1 me-4" type="button">WEBSITE</button>
                <button class="btn  me-5 nav-btn2  justify-content-end" type="button">CONNECT</button>
            </div>
        </div>
    </nav>
  )
}
