import React from 'react';
import './App.css';
import Nav from './Nav';
import Pool from './Pool';
import Swap from './Swap';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Card from './Card';

function App() {
  return (
    <Router>
    
      <Nav/>
      <Switch>
      <Route path ='/swap' >
      <Swap/>
      </Route>
      <Route path ='/pool' exact component={Pool}/>
      </Switch>
      <div className="cards">
      <Card 
      heading="Core concept"
      title="Learn and build efficiently "
      image="./bulb.png"
      />
     
      <Card 
      heading="API Solution"
      title="Learn and build efficiently "
      image="./bulb.png"
      />
      <Card 
      heading="Guide"
      title="Learn and build efficiently "
      image="./bulb.png"
      />
      <Card 
      heading="Tools"
      title="Learn and build efficiently "
      image="./bulb.png"
      />
      </div>
    </Router>
  );
}

export default App;
