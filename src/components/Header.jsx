import React, { useState } from 'react'

export default function Header() {
  const [isDarkMode, setIsDarkMode ] = useState(false)

  const handleClick = () => {
    setIsDarkMode(!isDarkMode)
  }
  
  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleClick}>{isDarkMode ? 'Dark mode' : 'Light mode'}</button>
    </div>
  )
}
