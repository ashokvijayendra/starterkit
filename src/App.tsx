import React from 'react';
import './App.css';
import './_variables.css';
import Typography  from './components/atoms/Typography';
import Container from './components/atoms/Container';
import Footer from './components/organisms/Footer';
import DeepFooter from './components/organisms/DeepFooter';

const DeepFooterProps = {
  "copyright": "© Copyright 2022 Walgreens Co. All rights reserved.",
  "items":[{
    "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
    "text": "How can we help"
  },
  {
    "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
    "text": "How can we help"
  },
  {
    "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
    "text": "How can we help"
  },
  {
    "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
    "text": "How can we help"
  }],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container bc="#5BADCD" direction='column'>
          <Footer />
          {/* <DeepFooter {...DeepFooterProps} /> */}
        </Container>
      </header>
    </div>
  );  
}

export default App;
