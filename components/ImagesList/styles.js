import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root: {
        height: '85%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        margin: 16,
        width: '42%',
        height: 100,
        backgroundColor: '#DDD',
        elevation: 5,
        shadowColor: '#333',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowRadius: 5,
        shadowOpacity: 0.5
    }
});