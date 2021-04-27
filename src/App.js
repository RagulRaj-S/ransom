import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';
import RansomNotes from './components/RansomNotes';

 class App extends React.Component{

   render(){
    return(
      <Router>
        <Route exact path="/">
          <Nav />
          <RansomNotes />
        </Route>
      </Router>
    );  
    }
 }

export default App;
