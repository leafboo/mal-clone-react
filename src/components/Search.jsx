import React from 'react'
import SearchCSS from '../styles/Search.module.css'


export default function Search() {
  return (
    <div className={SearchCSS['search-container']}>
      <div className={SearchCSS['left-bar']}>
        <ul>
          <li><a href="">Anime</a></li>
          <li><a href="">Manga</a></li>
          <li><a href="">Community</a></li>
          <li><a href="">Industry</a></li>
          <li><a href="">Watch</a></li>
          <li><a href="">Read</a></li>
          <li><a href="">Help</a></li>
        </ul>
      </div>
      <div className={SearchCSS['right-bar']}>
        <select name="" id="">
          <option value="0">All</option>
          <option value="1">Anime</option>
          <option value="2">Manga</option>
          <option value="3">Characters</option>
          <option value="4">People</option>
          <option value="5">Companies</option>
          <option value="6">Manga Store</option>
          <option value="7">News</option>
          <option value="8">Featured Articles</option>
          <option value="9">Forum</option>
          <option value="10">Clubs</option>
          <option value="11">Users</option>
        </select>
        <input type="text" placeholder='Search Anime, Manga, and more...' />
        <button className={SearchCSS['search-button']}>
          <img src="https://icones.pro/wp-content/uploads/2021/02/loupe-et-icone-de-recherche-de-couleur-grise.png" alt="Search icon." />
        </button>
      </div>
    </div>
  )
}