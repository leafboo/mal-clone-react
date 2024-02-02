import React from 'react'
import AnimesCSS from '../styles/Animes.module.css'

export default function Animes(props) {
  return (
    <tr className={AnimesCSS['anime-container']}>
      <td className={AnimesCSS['anime-rank']}>{props.rank}</td>
      <td className={AnimesCSS['anime-title']}>
        <a href={props.url}>
          <img src={props.image} alt="Image of Anime." />
        </a>
        <div>
          <div className={AnimesCSS['anime-title-blue']}><a href={props.url}>{props.title}</a></div>
          <div className={AnimesCSS['anime-description']}>
            {props.type}<br />
            {props.episodes}<br />
            {props.aired} <br />
            {props.members}
          </div>
        </div>
      </td>
      <td className={AnimesCSS['anime-score']}>{props.score}</td>
      <td className={AnimesCSS['anime-your-score']}><a href=''>N/A</a></td>
      <td className={AnimesCSS['anime-status']}>
        <button>Add to My List</button>
      </td>
    </tr>
  )
}