import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import SeachHistory from './index';
import { getTimeFromDate } from '../../config/helpers';

describe('SeachHistory suite', () => {
    it('Renders correctly', () => {
        const rendered = render(<SeachHistory />);
        expect(rendered.getByTestId('historyModalOpenButton')).toBeDefined();
    });

    it('Opens search history modal correctly', async () => {
        const onOpenHandler = jest.fn();
        const rendered = render(<SeachHistory onOpenModal={onOpenHandler} />);

        const openButton = rendered.getByTestId("historyModalOpenButton");

        fireEvent.press(openButton);
        expect(onOpenHandler).toBeCalled();
    });

    it('Closes search history modal correctly', async () => {
        const onCloseHandler = jest.fn();
        const rendered = render(<SeachHistory isModalVisible={true} onCloseModal={onCloseHandler} />);

        const closeButton = await rendered.findByTestId("historyModalCloseButton");

        fireEvent.press(closeButton);
        expect(onCloseHandler).toBeCalled();
    });

    it('Renders search history noData correctly when history list is empty', async () => {
        const historyList = [];
        const rendered = render(<SeachHistory isModalVisible={true} historyList={historyList} />);

        expect(rendered.getByTestId('noData')).toBeDefined();
    });

    it('Renders search history item correctly', async () => {
        const historyList = [{ text: 'testing text', date: getTimeFromDate() }];
        const rendered = render(<SeachHistory isModalVisible={true} historyList={historyList} />);

        expect(rendered.getByTestId('searchHistoryItem_0')).toBeDefined();
    });
});
