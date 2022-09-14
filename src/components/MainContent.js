import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
export default function MainContent() {
  return (
    <>
    <Header/>
    <div className='p-5'>
            <h1>Shop your favourite items</h1>
            
            <Link to="/login" className="btn bg-info text-white text-center">Sign in and Order</Link>
    </div>
    </>
  )
}
