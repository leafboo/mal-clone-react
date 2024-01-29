import React from 'react'
import AllAnimeList from './AllAnimeList.jsx'
import NavigationCSS from '../styles/Navigation.module.css'

export default function Navigation() {
  return (
    <div className={NavigationCSS['navigation-container']}>
      <div className={NavigationCSS['top-anime-container']}>Top Anime</div>
      <div className={NavigationCSS['outer-box-container']}>
        <div className={NavigationCSS['arrows-container']}>
          <a href="">Top</a>&gt;
          <a href="">Anime</a>&gt;
          <a href="">Top Anime</a>
        </div>
        <div className={NavigationCSS['anime-navigation-row']}> 
          <nav>
            <a href="">All Anime</a>
            <a href="">Top Airing</a>
            <a href="">Top Upcoming</a>
            <a href="">Top TV Series</a>
            <a href="">Top Movies</a>
            <a href="">Top OVAs</a>
            <a href="">Top ONAs</a>
            <a href="">Top Specials</a>
            <a href="">Most Popular</a>
            <a href="">Most Favorited</a>
          </nav>
          <hr />
        </div>
        <AllAnimeList />
      </div>
      
    </div>
  )
}