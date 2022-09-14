import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <nav className='navbar navbar-expand-lg bg-primary p-3'>
        <a href='#' className='navbar-brand'>
            
            <img src='https://t3.ftcdn.net/jpg/04/37/56/48/360_F_437564804_9i2iMQl65goueDniemeb7ae6iiq1yFmy.jpg' className='logo-image'/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item me-1'>
                    <Link to="/signup" className='btn btn-light btn-outline-info'>Signup</Link>
                </li>
                <li className='nav-item ms-1'>
                    <Link to="/login" className='btn btn-light btn-outline-info'>Login</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
