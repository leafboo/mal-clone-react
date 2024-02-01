import React from 'react'

export default function Animes(props) {
  return (
    <div>
      <tr>
        <td>{props.rank}</td>
        <td>{props.title}</td>
        <td>{props.score}</td>
        <td>{props.yourScore}</td>
        <td>{props.status}</td>
      </tr>
    </div>
  )
}