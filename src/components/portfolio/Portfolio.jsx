import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

//DO NOT USE THE IMAGEN IS PRODUCTION

const data=[
  {
    id:1,
    imagen:IMG1,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:2,
    imagen:IMG2,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:3,
    imagen:IMG3,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:4,
    imagen:IMG4,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:5,
    imagen:IMG5,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:6,
    imagen:IMG6,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github:'https://github.com',
    demo:'https://dribbble.com'
  }
]

const Portafolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,imagen,title,github,demo})=>{
            return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={imagen} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portafolio