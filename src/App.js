import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Characters from './components/Characters';

function App() {
  const [isDarkMode, setIsDarkMode ] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`App ${isDarkMode ? 'App__dark' : 'App__light'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Characters />
    </div>
  );
}

export default App;
