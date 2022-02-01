import React, { useState } from 'react'
import { NavLink as PageLink } from 'react-router-dom'

const Navbar = () => {
  const [icon, setIcon] = useState('☰')
  const showNav = () => {
    const nav = document.querySelector('nav')
    const ul = nav.children[2]
    icon === '☰' ? setIcon('X') : setIcon('☰')
    console.log(ul)
    ul.classList.toggle('shown')
  }

  return (
    <nav>
      <h1>
        <PageLink to='/'>Interiorz</PageLink>
      </h1>
      <span className='hamburger' onClick={() => showNav()}>
        {icon}
      </span>
      <ul>
        <li>
          <PageLink to='/'>Home</PageLink>
        </li>
        <li>
          <PageLink to='about'>About</PageLink>
        </li>
        <li>
          <PageLink to='blog'>Blog</PageLink>
        </li>
        <li>
          <PageLink to='contact'>Contact</PageLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
