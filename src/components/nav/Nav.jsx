import React from 'react'
import './nav.css'
import{AiOutlineHome}from 'react-icons/ai'
import{AiOutlineUserDelete}from 'react-icons/ai'
import{BiBook}from 'react-icons/bi'
import{RiServiceLine}from 'react-icons/ri'
import{BiMessageSquareDetail}from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNAv]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNAv('#')} className={activeNav ==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about"onClick={()=> setActiveNAv('#about')} className={activeNav ==='#about'?'active':''}><AiOutlineUserDelete/></a>
      <a href="#experience"onClick={()=> setActiveNAv('#experience')} className={activeNav ==='#experience'?'active':''}><BiBook/></a>
      <a href="#services"onClick={()=> setActiveNAv('#services')} className={activeNav ==='#services'?'active':''}><RiServiceLine/></a>
      <a href="#contact"onClick={()=> setActiveNAv('#contact')} className={activeNav ==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav