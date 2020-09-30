import React, { Component } from 'react';
import './styles/App.css';
import CountriesSelector from './components/countrySelector/CountriesSelector';
import NumberSelector from './components/numberSelector/NumberSelector';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 10
    }
  }

  handleChange = (n) => {
    this.setState({quantity: n});
  }

  render() {
    return (
      <div>
        <h1 className="selectors__heading">What country are you looking for?</h1>
        <div className="selectors">
        <div className="selector-country">
          <CountriesSelector 
            quantity={this.state.quantity} />
        </div>
        <div className="selector-number">
          <NumberSelector 
            onChange={this.handleChange}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;