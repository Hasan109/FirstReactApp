import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Heder/Header.js";
import './Heder/Header.css';
import Game from './GameSection/Game.js';
import './GameSection/Game.css';
import Elprize from './ElprizeVideo/Elprize.js';
import  './ElprizeVideo/Elprize.css';
import Play from './PlayGame/Play.js';
import './PlayGame/play.css';
import Footer from './Footer/Footer.js';
import './Footer/Footer.css';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Game></Game>
     <Elprize></Elprize>
     <Play></Play>
     <Footer></Footer>
    </div>
  );
}

export default App;
