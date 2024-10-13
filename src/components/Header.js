import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../assets/Logo.png"



const Header = () => {
  return (
    <header className='flex justify-between items-center mx-auto max-w-screen-lg mt-2'
>
        <Link to="/" className='flex items-center ml-2'>
            <img src={Logo} className='w-10' alt="Logo" />
            <h1 className='ml-2 text-xl font-semibold'>Shop</h1>
        </Link>
        <nav className='flex list-none'>
            <li className='mx-4 border-black px-4  border-x-2'>
                <NavLink to="/">Accueil</NavLink>
            </li>
            <li className='mx-2 border-black pr-4 border-r-2'>
                <NavLink to="/ShopCart">Carte</NavLink>
            </li>
        </nav>
    </header>
  )
}

export default Header
