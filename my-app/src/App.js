import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Emloyee Directory</h1>
          <h2>
            Search for Employees in the directory
          </h2>
        </Container>
      </Jumbotron>
      <Container>

        
      </Container>
    </div>
  );
}

export default App;
