import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './styles';
import TermCard from './TermCard';

const TermsSlider = ({ terms, setSelectedTerm }) => {
    return (
        <View>
            <Text style={styles.titleText}>Common terms</Text>
            <ScrollView
                testID='termsSlider'
                horizontal
                contentContainerStyle={styles.root}
                showsHorizontalScrollIndicator={false}
            >
                {terms && Array.isArray(terms) && terms.map((term, index) => (
                    <TermCard
                        key={index}
                        id={term.id}
                        isSelected={term.isSelected}
                        title={term.title}
                        onCardPressed={setSelectedTerm}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default TermsSlider;