import React from 'react'

const Home = () => {
  return (
    <main className='home'>
      <section className='hero'>
        <div className='hero-content'>
          <h1>Interiorz</h1>
          <p>Professional Interior Design at Affordable Prices</p>
        </div>
      </section>

      <section className='process'>
        <h2>Our Process</h2>
        <article>
          <span>
            <h3> Define Your Project</h3>
          </span>
          <img
            src='https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            alt=''
          />
        </article>
        <article>
          <span>
            <h3>Project Consultation</h3>
          </span>
          <img
            src='https://images.pexels.com/photos/7439123/pexels-photo-7439123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            alt=''
          />
        </article>
        <article>
          <span>
            <h3>Deliver Design & Follow-Up</h3>
          </span>
          <img
            src='https://images.pexels.com/photos/1181623/pexels-photo-1181623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            alt=''
          />
        </article>
      </section>
    </main>
  )
}

export default Home
