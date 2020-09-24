import React from 'react';
import './App.css';
import Menu from './components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from './components/Carousel.jsx';
import render from './images/COVER.jpg';
import { Image } from 'react-bootstrap';
import QuienesSomos from './components/CardQuienesSomos.jsx';

function App() {
  return (

    <div className="App">
      <Menu />
      <Image src={render} fluid />
      <QuienesSomos />
    </div>
  );
}

export default App;
