import React from 'react'

export default function Header({ isDarkMode, toggleDarkMode }) { 
  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={toggleDarkMode}>{isDarkMode ? 'Dark mode' : 'Light mode'}</button>
    </div>
  )
}
