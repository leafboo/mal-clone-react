import React from 'react'
import AllAnimeListCSS from '../styles/AllAnimeList.module.css'
import Animes from './Animes.jsx'

export default function AllAnimeList() {
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

            <Animes 
              rank = '1'
              title = 'frieren'
              score = '10'
              yourScore = '10'
              status = 'ongoing'
            />

            <Animes 
               rank = '2'
               title = 'full metal alchemist'
               score = '9.5'
               yourScore = '5'
               status = 'finished'
            />
          </tbody>
        </table>
      </div>
    </div>
  )
}