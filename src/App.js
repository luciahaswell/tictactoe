import './App.css';
import GameBoard from './GameBoard';
import React,{useState} from 'react';

function App() {
  const [theme,setTheme] = useState('light');

  const toggleTheme = () =>{
    if (theme === 'light'){
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className={`App ${theme}`}>
      <header>
        <h1 className={`gameTitle ${theme}`}>Tic-Tac-Toe</h1>
        <div className={`toggle ${theme}`} onClick={toggleTheme}></div>
      </header>
      <GameBoard theme={theme}/>
    </div>
  );
}

export default App;
