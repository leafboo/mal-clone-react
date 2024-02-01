import React from 'react'
import AllAnimeListCSS from '../styles/AllAnimeList.module.css'
import Animes from './Animes.jsx'
import topAnimeData from '../data/topAnimeData.js'

export default function AllAnimeList() {

  const AnimeElement = topAnimeData.map(anime => 
    <Animes rank={anime.rank} 
            title={anime.title}
            score={anime.score}/>
  )

  return (
    <div>
      <div className={AllAnimeListCSS['all-anime-list-container']}>
        <div className={AllAnimeListCSS['top-header']}>
          Top Anime Series
          <span className={AllAnimeListCSS['small-text']}>Updated twice a day. (<a href="" className={AllAnimeListCSS.blue}>How do we rank shows?</a>)
          </span>
          <button className={AllAnimeListCSS['next-button']}>Next 50 &gt;</button>
          
        </div >
        <table>
          <thead>
            <tr>
              <td>Rank</td>
              <td>Title</td>
              <td>Score</td>
              <td>Your Score</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {AnimeElement}
          </tbody>
        </table>
      </div>
    </div>
  )
}