import React from 'react';
import './App.css';
import './_variables.css';
import Typography  from './components/atoms/Typography';
import Container from './components/atoms/Container';
import Footer from './components/organisms/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container bc="#5BADCD" direction='column'>
          <Footer />
     
        </Container>
      </header>
    </div>
  );  
}

export default App;
