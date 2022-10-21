import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import { HalloweenContext } from './HalloweenContext';
import { Home } from './Home.jsx'
import { GetStarted } from './GetStarted.jsx'

import Styled from 'styled-components'
import { TrickOrTreating } from './TrickOrTreating';
import { Container } from 'react-bootstrap';
import startBackground from "./images/backgroundImages/startBackground.jpg";
import caveBackground from "./images/backgroundImages/caveBackground.jpg";
import hauntedHouseBackground from "./images/backgroundImages/hauntedHouseBackground.jpg"
import {Walking} from './Walking.jsx';

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
  const [placeOptions, setPlaceOptions] = useState([
    {
      name: 'Haunted House',
      backgroundImage: hauntedHouseBackground,
      walkingMessage: 'You walk towards the haunted house, and it looks scary. "Don\'t worry!", says your parent or other trusted adult. "Fred and I are good friends. He may look frightening, but he\'s a great person!"',
      monsterImage: '',
      message: '"Well, hello there! My name is Fred!", says the ghost. "We do not usually have many trick-or-treaters because we live in this creepy old house. But we are actually very friendly! Have some candy!" '
    }, 
    // {
    //   name
    // }'Scary Graveyard', 'Creepy Cave'
  ])

  // sets place that user chooses to trick or treat at
  const [chosenPlace, setChosenPlace] = useState({});

  const [backgroundImage, setBackgroundImage] = useState(startBackground);

  const gettersSetters = { placeOptions, setPlaceOptions, chosenPlace, setChosenPlace,backgroundImage, setBackgroundImage };


  return (
    <HalloweenContext.Provider value={gettersSetters}>
      <Container fluid style={{display: "flex", flexDirection: "column", height: "100vh", textAlign: "center", justifyContent: "center", backgroundImage: `url(${backgroundImage})` }}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/start' element={<GetStarted />} />
            {/* <Route path='/placeoptions' element={<PlaceOptions />} /> */}
            <Route path='/walking' element={<Walking/>}/>
            <Route path='/trickortreat!' element={<TrickOrTreating />} />



          </Routes>

        </Router>
      </Container>
    </HalloweenContext.Provider>

  );
}

export default App;
