import React from 'react'
import AllAnimeListCSS from '../styles/AllAnimeList.module.css'

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
            <tr>
              <td>frieren</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}