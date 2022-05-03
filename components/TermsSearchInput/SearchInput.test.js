import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import TermsSearchInput from './index';

describe('TermsSearchInput suite', () => {
    it('Renders correctly', () => {
        const rendered = render(<TermsSearchInput />);
        expect(rendered.getByTestId('termsSearchInput')).toBeDefined();
    });

    it('Changes text correctly', () => {
        const setSearchTextHandler = jest.fn();
        const rendered = render(<TermsSearchInput
            setSearchText={setSearchTextHandler}
        />);

        const searchTextInput = rendered.getByTestId('searchTextInput');
        fireEvent.changeText(searchTextInput, 'testing')
        expect(setSearchTextHandler).toBeCalledWith('testing');
    });

    it('Shows clear button when text input is filled', () => {
        const rendered = render(<TermsSearchInput searchText='testing' />);

        const clearButton = rendered.getByTestId('clearButton');
        expect(clearButton).toBeDefined();
    });

});
