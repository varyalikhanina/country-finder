import React from 'react';
import { render } from '@testing-library/react';
import NumberSelector from '../NumberSelector';

const mockedOptions = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' }
]

it('renders correctly', async () => {
    const mockedOnChange = jest.fn();
    const { getByText } = render(<NumberSelector 
        options={mockedOptions}
        onChange={mockedOnChange}
        />);
    const placeholder = getByText('10');
    expect(placeholder).toBeTruthy();
})