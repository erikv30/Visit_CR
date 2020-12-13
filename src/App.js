import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Inicio from './components/Pages/Inicio';
import CostaRica from './components/Pages/CostaRica';
import Actividades from './components/Pages/Actividades';
import Servicios from './components/Pages/Servicios';
import SignUp from './components/Pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Inicio} />
        <Route path='/costa-rica' component={CostaRica} />
        <Route path='/actividades' component={Actividades} />
        <Route path='/servicios' component={Servicios} />
        <Route path='/sign-up' component={SignUp} />

      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
