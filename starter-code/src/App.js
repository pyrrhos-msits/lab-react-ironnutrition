import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import FoodList from './FoodList';
import './App.css';

class App extends Component {
    
  render() {
  
    return (
      <div className="App">
      <h1>IronNutrion</h1>
          <FoodList/>
      </div>

    );
  }
}

export default App;
