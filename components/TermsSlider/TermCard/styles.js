import { StyleSheet } from 'react-native';

import Colors from '../../../constants/colors';

export default StyleSheet.create({
    root: {
        paddingVertical: 24,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.gray2,
        borderRadius: 5,
        borderColor: Colors.gray3,
        borderWidth: 1,
        width: 100
    },
    selected: {
        backgroundColor: Colors.primaryLight,
        borderColor: Colors.gray4,
        borderColor: Colors.primary,
        borderWidth: 2
    }
});