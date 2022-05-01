import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'

const NoData = ({title, description}) => {
    return (
        <View testID='noData' style={styles.root}>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </View>
    );
};

export default NoData;