import React from 'react'

const Contact = () => {
  return (
    <main>
      <h1>Contact Us</h1>
      <section className='form-area'>
        <article>
          <form className='form'>
            <h2>Fill in the form</h2>
            <div className='form-control'>
              <label htmlFor='firstName'>First Name :</label>
              <input type='text' id='firstName' name='firstName' />
            </div>
            <div className='form-control'>
              <label htmlFor='lastName'>Last Name :</label>
              <input type='text' id='lastName' name='lastName' />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>Email Address :</label>
              <input type='email' id='email' name='email' />
            </div>
            <div className='form-control'>
              <label htmlFor='phone'>Phone Number :</label>
              <input type='text' id='phone' name='phone' />
            </div>
            <button className='submit-form' type='submit'>
              SUBMIT
            </button>
          </form>
        </article>
        <article>
          <h2>Or Contact Us</h2>
          <ul className='contact-details'>
            <li>123 Main High Street</li>
            <li>Hammersmith, London</li>
            <li>Enquiries: 0208 123 456</li>
            <li>Customer Service: 0208 123 456</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default Contact
