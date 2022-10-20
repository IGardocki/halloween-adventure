import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import { HalloweenContext } from './HalloweenContext';
import { Home } from './Home.jsx'
import { GetStarted } from './GetStarted.jsx'
import { PlaceOptions } from './PlaceOptions';
import Styled from 'styled-components'
import { TrickOrTreating } from './TrickingOrTreating';
import { Container } from 'react-bootstrap';
import startBackground from "./images/backgroundImages/startBackground.jpg"

const BackgroundImage = Styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
background-color: orange;
background-size: cover;
`;

function App() {

  //options of places to trick or treat at
  const [placeOptions, setPlaceOptions] = useState(['Haunted House', 'Scary Graveyard', 'Creepy Cave'])

  // sets place that user chooses to trick or treat at
  const [chosenPlace, setChosenPlace] = useState('');

  const gettersSetters = { placeOptions, setPlaceOptions, chosenPlace, setChosenPlace };


  return (
    <HalloweenContext.Provider value={gettersSetters}>
      <Container fluid style={{display: "flex", flexDirection: "column", height: "100vh", textAlign: "center", justifyContent: "center", backgroundImage: `url(${startBackground})` }}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/start' element={<GetStarted />} />
            <Route path='/placeoptions' element={<PlaceOptions />} />
            <Route path='/trickortreat!' element={<TrickOrTreating />} />



          </Routes>

        </Router>
      </Container>
    </HalloweenContext.Provider>

  );
}

export default App;
