import React, { useEffect, useState } from 'react'

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
          <h2>{character.name}</h2>
        ))
      }
    </div>
  )
}
