import React from 'react'
import HeaderCSS from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={HeaderCSS['header-container']}>
      <img src="https://cdn.myanimelist.net/images/mal-logo-xsmall-white@2x.png?v=1634263200" alt="My anime list logo." />
      <button className={HeaderCSS['login-button']}>Login</button>
      <button className={HeaderCSS['signup-button']}>Sign Up</button>
    </div>
  )
 
}