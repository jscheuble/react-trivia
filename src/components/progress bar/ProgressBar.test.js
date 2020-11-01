import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProgressBar from './ProgressBar';

afterEach(cleanup);

describe('ProgressBar.js', () => {

    test('renders number of answered questions over 10 based on props', () => {
        const { getByTestId } = render(<ProgressBar questionCount={4} />)
        const count = getByTestId('count');
        expect(count).toHaveTextContent('4/10')
    })
})