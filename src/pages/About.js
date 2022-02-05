import React, { useEffect } from 'react'
import { serviceDetails } from '../components/ServiceDetails'
import { setPageTitle } from '../components/updatePageTitle'

const About = () => {
  useEffect(() => {
    setPageTitle('Interiorz | About')
  }, [])
  return (
    <main className='about'>
      <h1>About Us</h1>
      <section>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            tenetur nostrum minus commodi hic nihil necessitatibus id,
            exercitationem ex fuga fugiat quasi expedita in itaque! Porro
            aliquam iusto voluptates, a minus natus, labore sapiente quasi ipsam
            quae nesciunt dolor ea omnis maxime nihil? Quasi ea dolore adipisci
            in id deleniti, rem ducimus, impedit ullam excepturi omnis nihil
            beatae, sunt rerum quos atque cumque et porro. Nesciunt vitae
            molestiae quos dolorum in beatae maxime, exercitationem cumque.
            Consectetur accusantium non recusandae, est aut sequi corrupti
            explicabo quas molestiae atque illo nisi eos dignissimos unde quidem
            nihil enim totam, impedit eum doloribus similique!
          </p>
          <img
            src='https://images.pexels.com/photos/7413888/pexels-photo-7413888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            alt='Our founders'
          />
        </article>
      </section>

      <section className='about-services'>
        <h2>Our services include:</h2>
        <ul>
          {serviceDetails.map((info, index) => {
            return <li key={index}>{info.service}</li>
          })}
        </ul>
      </section>
    </main>
  )
}

export default About
