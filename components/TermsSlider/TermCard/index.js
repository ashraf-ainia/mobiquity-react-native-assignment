import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const TermCard = ({ id, isSelected, title, onCardPressed }) => {
    return (
        <TouchableOpacity
            testID={isSelected ? 'termCardSelected' : 'termCard'}
            style={isSelected ? { ...styles.root, ...styles.selected } : styles.root}
            onPress={() => onCardPressed(id)}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

export default TermCard;