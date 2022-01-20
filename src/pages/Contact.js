import React, { useState } from 'react'

const Contact = () => {
  const [shown, setShown] = useState(false)
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    e.preventDefault()
    const [name, value] = [e.target.name, e.target.value]
    const newItem = {
      ...person,
      [name]: value,
    }
    setPerson(newItem)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.localStorage.setItem('details', JSON.stringify(person))
    setPerson({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    })
    showMessage()
  }

  const showMessage = () => {
    setShown(true)
    setTimeout(() => {
      setShown(false)
    }, 3000)
  }

  return (
    <main>
      <h1 className='pageTitle'>Contact Us</h1>
      <section className='form-area'>
        <article>
          <form className='form' onSubmit={handleSubmit}>
            <h2>Fill in the form</h2>
            {shown && (
              <div>
                <p>Form Submitted!</p>
              </div>
            )}
            <div className='form-control'>
              <label htmlFor='firstName'>First Name:</label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={person.firstName}
                onChange={handleChange}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='lastName'>Last Name:</label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={person.lastName}
                onChange={handleChange}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>Email Address:</label>
              <input
                type='email'
                id='email'
                name='email'
                value={person.email}
                onChange={handleChange}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='phone'>Phone Number:</label>
              <input
                type='text'
                id='phone'
                name='phone'
                value={person.phone}
                onChange={handleChange}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='message'>Message:</label>
              <textarea
                name='message'
                id='message'
                value={person.message}
                onChange={handleChange}
              ></textarea>
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
