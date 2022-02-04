import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [showMessage, setShowMessage] = useState(false)

  const message = () => {
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  return (
    <footer>
      <section>
        <article className='footer-f'>
          <h2>Interiorz</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>
        <hr />
        <article className='footer-f'>
          <div>
            <h3>Join Our Email List</h3>
            <p>Receive weekly emails about how to design, offers and more!</p>
            <input type='email' name='email' id='email' />
            <button
              type='submit'
              className='submit-btn'
              onClick={() => message()}
            >
              SUBMIT
            </button>
            {showMessage && (
              <p>
                Thanks for joining our mailing list. You can unsubscribe at any
                time.
              </p>
            )}
          </div>

          <ul>
            <h3>Pages</h3>
            <br />
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  )
}

export default Footer
