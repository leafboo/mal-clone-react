import React from 'react'
import Header from './components/Header.jsx'
import Search from './components/Search.jsx'
import AppCSS from './App.module.css'

export default function App() {
  return (
    <div className={AppCSS.container}>
      <Header />
      <Search />
    </div>
  )
  
}
