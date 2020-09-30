import React from 'react';
import { render } from '@testing-library/react';
import CountriesSelector from '../CountriesSelector';

const mockedOptions = [
    { value: 'mocked 10', label: 'mocked 10' },
    { value: 'mocked 20', label: 'mocked 20' },
    { value: 'mocked 50', label: 'mocked 50' }
]

it('renders correctly', async () => {
    const mockedOnChange = jest.fn();
    const { getByText } = render(<CountriesSelector 
        options={mockedOptions}
        onChange={mockedOnChange}
        />);
    const placeholder = getByText('Type something');
    expect(placeholder).toBeTruthy();
})