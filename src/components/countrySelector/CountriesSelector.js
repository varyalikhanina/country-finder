import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import ClipLoader from "react-spinners/ClipLoader";

const styles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted #c44536',
      color: state.isSelected ? '#c44536' : '#197278',
      padding: 15,
    }),
    control: () => ({
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    loadingIndicator: () => ({
        display: 'none',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    }
}

const spinnerStyles = `
  display: block;
  margin: 10px auto;
`;

class CountriesSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  loadOptions = async (inputValue, callback) => {
    if (!inputValue) {
      return callback([]);
    }
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`);
    const countries = await response.json();
    const countriesSliced = countries.slice(0, `${this.props.quantity}`);
    callback(countriesSliced.map((country) => ({ label: country.name, value: country.alpha2Code })));
  }    

  getSpinner() {
      return <div className="loading">
      <ClipLoader
        size={30}
        color={"#c44536"}
        css={spinnerStyles}
      />
    </div>
  }

  showNoOptionsMessage() {
      return <div className="no-options">
          <p>Sorry. Nothing has been found <span role="img" aria-labelledby="no options emoji">&#128532;</span></p>
      </div>
  }

  render () {
    return (<div>
      <AsyncSelect
        placeholder={'Type something'}
        loadOptions={this.loadOptions}
        styles={styles}
        loadingMessage={this.getSpinner}
        noOptionsMessage={this.showNoOptionsMessage}
      />
    </div>
    )
  }
}

export default CountriesSelector;