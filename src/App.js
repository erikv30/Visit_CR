import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Inicio from './components/Pages/Inicio';
import Footer from './components/Footer';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Inicio} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
