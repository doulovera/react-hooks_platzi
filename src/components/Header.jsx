import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function Header({ isDarkMode, toggleDarkMode }) { 
  const color = useContext(ThemeContext)

  return (
    <div className="Header" style={{ color }}>
      <h1>ReactHooks</h1>
      <button type="button" onClick={toggleDarkMode}>{isDarkMode ? 'Dark mode' : 'Light mode'}</button>
    </div>
  )
}
