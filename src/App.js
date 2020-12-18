import React from 'react';
import Navbar from './components/Navbar'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Inicio from './components/Pages/Inicio';
import CostaRica from './components/Pages/CostaRica';
import Actividades from './components/Pages/Actividades';
import Servicios from './components/Pages/Servicios';
import SignUp from './components/Pages/SignUp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router basename='/'>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Inicio} />
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
