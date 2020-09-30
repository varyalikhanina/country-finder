import React, { Component } from 'react';
import Select from 'react-select';

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
    placeholder: () => ({
      color: '#000',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    loadingIndicator: () => ({
        display: 'none',
    }),
}

const options = [
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '50', label: '50' }
]

class NumberSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  changeQuantity = (inputValue) => {
    this.props.onChange(inputValue.value);
  }
  
  render () {
    return (<div data-testid="number-selector">
      <Select 
          options={options} 
          placeholder={'10'} 
          styles={styles}
          onChange={this.changeQuantity.bind(this)}
      />
    </div>
    )
  }
}

export default NumberSelector;