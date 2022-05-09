import React from 'react'
import './footer.css'
import {BsTelegram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>IGNACIO</a>

      <ul className='permalinks'>
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#experience">Experience</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#portfolio">Portfolio</a></li>
         <li><a href="#testimonials">Testimonials</a></li>
         <li><a href="#contact"></a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><BsTelegram/></a>
        <a href="https://Telegram.com"><BsGithub/></a>
        <a href="https://whatsapp.com"><BsWhatsapp/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; IGNACIO. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer