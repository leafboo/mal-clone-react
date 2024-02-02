import React from 'react'
import AllAnimeListCSS from '../styles/AllAnimeList.module.css'
import Animes from './Animes.jsx'
import topAnimeData from '../data/topAnimeData.js'

export default function AllAnimeList() {

  const AnimeElement = topAnimeData.map(anime => 
    <Animes rank={anime.rank} 
            title={anime.title}
            score={anime.score}
            image={anime.images.jpg.image_url}
            url={anime.url}
            type={anime.type}
            episodes={`TV (${anime.episodes} eps)`}
            aired={anime.aired.string.replace(" to ", " - ")}
            members={anime.members}/>
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
              <td className={AllAnimeListCSS['rank']}>Rank</td>
              <td className={AllAnimeListCSS['title']}>Title</td>
              <td className={AllAnimeListCSS['score']}>Score</td>
              <td className={AllAnimeListCSS['your-score']}>Your Score</td>
              <td className={AllAnimeListCSS['status']}>Status</td>
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