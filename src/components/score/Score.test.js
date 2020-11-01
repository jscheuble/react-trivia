import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Score from './Score';

afterEach(cleanup);

describe('Score.js', () => {

    test('renders correct score over 10 based on props', () => {
        const { container } = render(<Score score={7} />);
        expect(container.firstChild).toHaveTextContent('score: 7/10')
    })
})