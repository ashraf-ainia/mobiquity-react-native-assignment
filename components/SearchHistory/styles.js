import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
    safeArea: {
        flex: 1
    },
    titleContainer: {
        padding: 16,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        alignItems: 'center',
        borderBottomColor: colors.gray2,
        borderBottomWidth: 1
    },
    button: {
        padding: 16,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: colors.primary,
        fontWeight: 'bold'
    },
    closeButton: {
        backgroundColor: colors.primaryLight,
        padding: 16,
        alignItems: 'center'
    },
    closeButtonText: {
        color: colors.gray7,
        fontSize: 18
    }
});