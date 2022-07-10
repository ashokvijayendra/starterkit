import React from 'react';
import './App.css';
import './_variables.css';
import Typography  from './components/atoms/Typography';
import Container from './components/atoms/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container bc="red" childrenWidth={'equal'} p={'2rem'}><Typography variant='paragraph'>Hii</Typography><Typography variant='paragraph'>hello</Typography></Container>
      </header>
    </div>
  );  
}

export default App;
