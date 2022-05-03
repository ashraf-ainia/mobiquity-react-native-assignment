import React from "react";
import { View, FlatList, ActivityIndicator } from 'react-native';

import styles from './styles';
import NoData from "../NoData";
import ImageWithLoading from '../ui/ImageWithLoading';
import colors from "../../constants/colors";

const ImagesList = ({ images, isLoading, fetchMoreImages, listScrollToggle }) => {
    const flatListRef = React.useRef();

    React.useEffect(() => {
        flatListRef.current?.scrollToOffset({ animated: false, offset: 0 })
    }, [listScrollToggle]);

    return (
        <View testID="imagesList" style={styles.root}>
            <FlatList
                ref={flatListRef}
                data={images.photo}
                renderItem={(photo) => {
                    const imageUrl = `https://farm${photo.item.farm}.static.flickr.com/${photo.item.server}/${photo.item.id}_${photo.item.secret}.jpg`;

                    return <View style={styles.imageContainer}>
                        <ImageWithLoading
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: imageUrl }}
                        />
                    </View>
                }}
                ListFooterComponent={() => isLoading ? <ActivityIndicator size={25} color={colors.primary} /> : null}
                onEndReached={fetchMoreImages}
                ListEmptyComponent={() => <NoData title="No data" description="Select a term to load images" />}
                numColumns={2}
                keyExtractor={(item, index) => index.toString() + item.id}
            />
        </View>
    );
};

export default ImagesList;