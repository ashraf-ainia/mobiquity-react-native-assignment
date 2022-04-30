import React from 'react';
import { ScrollView } from 'react-native';

import styles from './styles';
import TermCard from './TermCard';

const TermsSlider = ({ terms, setSelectedTerm }) => {
    return (
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
    );
};

export default TermsSlider;