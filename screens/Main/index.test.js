import React from 'react';
import { render } from '@testing-library/react-native';
import MainScreen from './index';

describe('Main Screen suite', () => {
    it('Renders correctly', () => {
        const rendered = render(<MainScreen />);
        expect(rendered.getByTestId('mainScreen')).toBeDefined();
    });
});
