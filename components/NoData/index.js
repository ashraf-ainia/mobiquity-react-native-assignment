import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'

const NoData = () => {
    return (
        <View testID='noData' style={styles.root}>
            <Text>No data</Text>
            <Text>Select a term to load images</Text>
        </View>
    );
};

export default NoData;