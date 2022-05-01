import React from 'react';
import { render } from '@testing-library/react-native';
import NoData from './index';

describe('Main Screen suite', () => {
    it('Renders correctly', () => {
        const rendered = render(<NoData />);
        expect(rendered.getByTestId('noData')).toBeDefined();
    });

    it('Renders title correctly', () => {
        const rendered = render(<NoData title="testing title" />);
        expect(rendered.getByText("testing title")).toBeDefined();
    });

    it('Renders description correctly', () => {
        const rendered = render(<NoData description="testing description" />);
        expect(rendered.getByText("testing description")).toBeDefined();
    });
});
