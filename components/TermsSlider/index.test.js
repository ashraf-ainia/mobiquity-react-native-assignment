import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import TermsSlider from './index';

import getTermsList from '../../services/getTermsList';

describe('TermsSlider suite', () => {
    it('Renders correctly', () => {
        const rendered = render(<TermsSlider />);
        expect(rendered.getByTestId('termsSlider')).toBeDefined();
    });

    it('Renders terms cards correctly', () => {
        const terms = getTermsList();
        const rendered = render(<TermsSlider terms={terms} />);
        expect(rendered.findByTestId('termCard')).toBeDefined();
    });

    it('Calls setSelectedTerm correctly', async () => {
        const setSelectedTermHandler = jest.fn();
        const rendered = render(<TermsSlider terms={[{}]} setSelectedTerm={setSelectedTermHandler} />);

        const termCard = await rendered.findByTestId('termCard');
        fireEvent.press(termCard);
        expect(setSelectedTermHandler).toBeCalled();
    });
});
