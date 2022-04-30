import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import TermCard from './index';

describe('TermCard suite', () => {
    it('Renders correctly', () => {
        const rendered = render(<TermCard />);
        expect(rendered.getByTestId('termCard')).toBeDefined();
    });

    it('Select correctly', () => {
        const rendered = render(<TermCard isSelected />);
        expect(rendered.getByTestId('termCardSelected')).toBeDefined();
    });

    it('Calls select handler correctly on press the card', () => {
        const pressHandler = jest.fn();
        const rendered = render(<TermCard onCardPressed={pressHandler} id='test' />);

        const termCard = rendered.getByTestId('termCard');
        fireEvent.press(termCard);

        expect(pressHandler).toBeCalled();
    });
});
