import React from 'react'
import { Link as PageLink } from 'react-router-dom'

const Navbar = () => {
  const showNav = (e) => {
    e.preventDefault()
  }
  return (
    <nav>
      <h1>
        <PageLink to='/'>Interiorz</PageLink>
      </h1>
      <span className='hamburger' onClick={() => showNav()}>
        &#9776;
      </span>
      <ul>
        <li>
          <PageLink to='/'>Home</PageLink>
        </li>
        <li>
          <PageLink to='about'>About</PageLink>
        </li>
        <li>
          <PageLink to='contact'>Contact</PageLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
