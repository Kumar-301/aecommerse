import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    let cartCount=useSelector(state=>state.cart.count)
    
    const navigate=useNavigate()
    const logoutUser=()=>{
       
        navigate('/login')
    }
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
        <div className='container-fluid'>
        <a href='#' className='navbar-brand'>
            <img src='https://thumbs.dreamstime.com/b/creative-pk-logo-icon-design-simple-clean-crisp-vector-format-170820372.jpg' height={200} className='logo-image'/>
        </a>
        <h1>Welcome!</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item me-1'>
                    <Link to="/main" className='btn'>Menu</Link>
                </li>
                <li className='nav-item ms-1'>
                    <Link to="/cart" className='btn '>Cart {cartCount>0?<span className='badge bg-dark'>{cartCount}</span>:""}</Link>
                </li>
                
                <li className='nav-item ms-1'>
                <button className='btn btn-outline-secondary' onClick={logoutUser}>Logout</button>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}
