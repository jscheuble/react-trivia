import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Game from './Game';
import { act } from 'react-dom/test-utils';

describe('Game.js', () => {

    test('play button disappears after clicking', async () => {
        await act(async () => {
            const { getByTestId } = render(<Game />);
            const button = getByTestId('play-button')
            await userEvent.click(button)
            await expect(button).not.toBeInTheDocument()
        })

    })
})