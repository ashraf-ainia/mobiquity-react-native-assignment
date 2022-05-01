import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import ImageWithLoading from './';

describe('ImageWithLoading suite', () => {
    it('Renders correctly', () => {
        const rendered = render(
            <ImageWithLoading />
        );
        expect(rendered.getByTestId('image')).toBeDefined();
    });

    it('Loads image correctly', async () => {
        const rendered = render(
            <ImageWithLoading source={{ uri: "https://farm66.static.flickr.com/65535/52038160572_58d272a650.jpg" }} />
        );
        expect(rendered.getByTestId('image')).toBeDefined();

    });
});
