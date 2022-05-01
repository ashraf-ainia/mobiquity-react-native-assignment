import React from 'react';
import { Image, ActivityIndicator, View, Text } from 'react-native';

const ImageWithLoading = props => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [showFallback, setShowFallback] = React.useState(false);

    const onLoadStartHandler = () => {
        setIsLoading(true);
    };
    const onLoadEndHandler = () => {
        setIsLoading(false);
    };
    const onErrorHandler = () => {
        setShowFallback(true);
        setIsLoading(false);
    };

    return (
        <>
            <Image
                testID="image"
                onLoadStart={onLoadStartHandler}
                onLoadEnd={onLoadEndHandler}
                onError={onErrorHandler}
                {...props}
            />
            {showFallback && (
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text>No Access</Text>
                </View>
            )}
            {isLoading && (
                <ActivityIndicator
                    style={{
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        position: 'absolute',
                    }}
                />
            )}
        </>
    );
};

export default ImageWithLoading;