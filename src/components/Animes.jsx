import React from 'react'

export default function Animes(props) {
  return (
    <div>
      <tr>
        <td>{props.rank}</td>
        <td>{props.title}</td>
        <td>{props.score}</td>
        <td>N/A</td>
        <td>
          <button>Add to My List</button>
          </td>
      </tr>
    </div>
  )
}