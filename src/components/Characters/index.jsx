import React, { useEffect, useState } from 'react'
import './Characters.css'

function IsAlive({ character }) {
  if (character.status === 'Alive') {
    return <p>Alive 🟢</p>
  } else if (character.status === 'Dead') {
    return <p>Dead 🔴</p>
  } else if (character.status === 'unknown') {
    return <p>Unknown 🟠</p>
  }
}

export default function Characters() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
      })
  }, [])

  return (
    <div className="Characters">
      {
        characters.map(character => (
          <div key={character.id} className="Characters__card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <IsAlive character={character} />
          </div>
        ))
      }
    </div>
  )
}
