import React from 'react';
import { render } from '@testing-library/react-native';
import ImagesList from './index';

describe('Main Screen suite', () => {
    it('Renders correctly', () => {
        const rendered = render(<ImagesList images={{photo: []}} />);
        expect(rendered.getByTestId('imagesList')).toBeDefined();
    });
});
