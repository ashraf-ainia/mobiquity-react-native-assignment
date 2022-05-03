import React from 'react';
import { TextInput, View, Keyboard, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import searchIcon from '../../assets/icons/search.png';
import closeIcon from '../../assets/icons/close.png';

const TermsSearchInput = ({ searchText, setSearchText }) => {
    const onSearchInputBlurHandler = () => {
        Keyboard.dismiss();
    };

    const onClearButtonClickedHandler = () => {
        setSearchText('');
        Keyboard.dismiss();
    }

    return (
        <View style={styles.root} testID='termsSearchInput'>
            <View style={styles.searchInputContainer}>
                <View style={styles.searchIconView}>
                    <Image
                        source={searchIcon}
                        resizeMode='contain'
                        style={styles.searchIcon}
                    />
                </View>
                <View style={styles.searchInputView}>
                    <TextInput
                        testID='searchTextInput'
                        style={styles.searchInput}
                        value={searchText}
                        onChangeText={setSearchText}
                        placeholder="Search"
                        onBlur={onSearchInputBlurHandler}
                    />
                </View>
                {Boolean(searchText) && (
                    <TouchableOpacity testID='clearButton' onPress={onClearButtonClickedHandler}>
                        <Image
                            source={closeIcon}
                            resizeMode='contain'
                            style={styles.closeIcon}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default TermsSearchInput;