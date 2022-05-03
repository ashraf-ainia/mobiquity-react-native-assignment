import { StyleSheet, Platform } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
    root: {
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: colors.gray1,
        borderRadius: 5,
    },
    searchIconView: {
        marginRight: 8
    },
    searchIcon: {
        width: 20,
        height: 20
    },
    closeIcon: {
        width: 20,
        height: 20
    },
    searchInputView: {
        flex: 1
    },
    searchInput: {
        padding: Platform.OS === 'ios' ? 16 : 0
    },
    cancelButtonView: {
        marginLeft: 8,
    },
    cancelButton: {
        flex: 1,
        justifyContent: 'center',
        padding: 4
    }
});