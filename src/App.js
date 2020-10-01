import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="roster">
      <Jumbotron fluid>
        <Container>
          <h1>Avengers Roster</h1>
          <h2>
            Search the roster of Avengers
          </h2>
        </Container>
      </Jumbotron>
      <Container>
        <Main/>
      </Container>
    </div>
  );
}

export default App;
