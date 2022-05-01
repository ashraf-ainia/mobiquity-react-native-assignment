import React from 'react';
import { render } from '@testing-library/react-native';
import NoData from './index';

describe('Main Screen suite', () => {
    it('Renders correctly', () => {
        const rendered = render(<NoData />);
        expect(rendered.getByTestId('noData')).toBeDefined();
    });
});
