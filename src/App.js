import React, { Component } from 'react';
import './App.css';
import CityCodes from './CityCodes.js';


class App extends Component {
  render(){
    return ( 
      <div>
      <div className ="container-fluid bg-danger p-4 text-center text-white">
        <h4>City Search</h4>
       </div>
           <div className ="container">
           <CityCodes />
            </div>  
            </div>  
    );
  }
}
export default App;