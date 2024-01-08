import React from 'react'
import HeaderCSS from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={HeaderCSS['header-container']}>
      <div className={HeaderCSS['image-container']}>
        <img src="https://cdn.myanimelist.net/images/mal-logo-xsmall-white@2x.png?v=1634263200" alt="My anime list logo." />
      </div>
      <div className={HeaderCSS['buttons-container']}>
        <button className={HeaderCSS['hide-ads-button']}>Hide Ads</button>
        <button className={HeaderCSS['login-button']}>Login</button>
        <button className={HeaderCSS['signup-button']}>Sign Up</button>
      </div>
    </div>
  )
 
}