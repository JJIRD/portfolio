import React from 'react'
import {BsTelegram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://telegram.com" target="_blank"><BsTelegram/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://whatsapp.com" target="_blank"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocial