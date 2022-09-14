import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Checkout() {
    let check=useSelector(state=>state.cart.some)
    console.log(check)
  return (
    <div>
        <Navbar/>
        <h2>Checkout</h2>

        <p>Order Total: $ {check}</p>
        <Link to="/orderplaced" className='btn bg-info text-white'>Checkout</Link>
    </div>
  )
}
