import React from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onCLick={() => {console.log("You CLICKED on ME!!!")}}
          type = "button"
          buttonStyle = "btn--primary--outline"
          buttonSize = "btn--small"
        >Buy Now</Button>
      </header>
    </div>
  );
}

export default App;