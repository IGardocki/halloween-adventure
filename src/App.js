import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import { HalloweenContext } from './HalloweenContext';
import { Home } from './Home.jsx'
import { GetStarted } from './GetStarted.jsx'

// import Styled from 'styled-components'
import { TrickOrTreating } from './TrickOrTreating';
import { Container } from 'react-bootstrap';

// imports starting halloween background
import startBackground from "./images/backgroundImages/startBackground.jpg";

// imports the cave background image
import caveBackground from "./images/backgroundImages/caveBackground.jpg";
import mukImage from "./images/monsterImages/mukImage.png"

// imports the haunted house background image
import hauntedHouseBackground from "./images/backgroundImages/hauntedHouseBackground.jpg";
// imports the haunted house skeleton image
import skeletonImage from "./images/monsterImages/skeletonImage.png";


import {Walking} from './Walking.jsx';

//// I DONT THINK THIS IS ACTUALLY USEFUL? 
// const BackgroundImage = Styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// height: 100vh;
// background-color: orange;
// // background-size: cover;
// `;

function App() {

  //options of places to trick or treat at
  const [placeOptions, setPlaceOptions] = useState([
    {
      name: 'Haunted House',
      backgroundImage: hauntedHouseBackground,
      walkingMessage: 'You walk towards the haunted house, and it looks scary. "Don\'t worry!", says your parent or other trusted adult. "Fred and I are good friends. He may look frightening, but he\'s a great person!"',
      monsterImage: skeletonImage,
      message: '"Well, hello there! My name is Fred!", says the skeleton. "We do not usually have many trick-or-treaters because we live in this creepy old house. But we are actually very friendly! Have some candy!" ',
      visited: false
    }, 
    {
      name: 'Creepy Cave',
      backgroundImage: caveBackground,
      walkingMessage: 'You walk towards the cave near your house, and it looks very creepy. "Don\'t worry!", says your parent or other trusted adult. "Muk keeps to himself because he\'s poisonious, but he\'s kind (from a distance). By the way, do you have that new-fangled PokemonGo app installed on that fancy phone of yours?"',
      monsterImage: mukImage,
      message: '"MMuuuuuukkkk", says Muk happily. He seems overjoyed that you have come to visit him in his cave! He gives you a HUGE handful of candy.',
      visited: false
    }
    // Scary Graveyard', 'Creepy Cave'
  ])

  // sets place that user chooses to trick or treat at
  const [chosenPlace, setChosenPlace] = useState({});

  //sets background image for user
  const [backgroundImage, setBackgroundImage] = useState(startBackground);

  // sets if this is users first trick or treat to determine message for getStrated.jsx
  const [firstTrickOrTreat, setFirstTrickOrTreat] = useState(true);


  // standard getters and setters
  const gettersSetters = { placeOptions, setPlaceOptions, chosenPlace, setChosenPlace,backgroundImage, setBackgroundImage, firstTrickOrTreat, setFirstTrickOrTreat };


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
