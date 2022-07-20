import React from 'react'
import {BsTelegram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://t.me/IgnacioJIRD" target="_blank"><BsTelegram/></a>
        <a href="https://github.com/JJIRD" target="_blank"><BsGithub/></a>
        <a href="https://wa.me/+50588642203" target="_blank"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocial