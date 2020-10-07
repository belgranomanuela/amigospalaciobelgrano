import React from 'react';
import './App.css';
import Menu from './components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.jsx';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Arquitecto from './components/Arquitecto.jsx';
import Palacio from './components/Palacio.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Menu} />
        <Route exact path="/" component={Home} />
        <Route path="/arquitecto" component={Arquitecto} />
        <Route path="/palacio" component={Palacio} />
      </div>
    </BrowserRouter>
  );
}

export default App;



// <div className="App">
// <Menu />
// <Image src={render} fluid />
// <Mision />
// <Card body className='m-3'>
//   <div className='m-4'>
//     <h1 className={styles.title} >Contacto</h1>
//     <br></br>
//     <p className={styles.text} >Podrá contactarse con nosotros por cualquier consulta a amigospalaciobelgrano@gmail.com</p>
//   </div>
// </Card>

// </div>
// import render from './images/COVER OK.jpg';
// import { Image } from 'react-bootstrap';
// import Mision from './components/CardMision.jsx';
// import styles from './components/CardMision.module.css';
// import { Card } from 'react-bootstrap';