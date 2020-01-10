import React, { Component } from 'react';
import './App.css';
import Person from './Component 1/component1';




class App extends Component {
  render(){ 
  return (
    <div className="App">
     <h1>North American Sponsors
        </h1>
        
     <Person></Person>   
    </div> // nest all other components above 
    
     
  );
  }
  
}

export default App;
