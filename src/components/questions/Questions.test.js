import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Questions from './Questions';
import { act } from 'react-dom/test-utils';


afterEach(cleanup);

describe('Questions.js component', () => {

    test('submit button does not render before an answer is selected', async () => {
        await act(async () => {
            const { queryByText } = render(<Questions />);
            expect(queryByText('submit')).toBeNull();
        })
    });

   
});