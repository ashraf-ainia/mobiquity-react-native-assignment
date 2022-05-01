import React from "react";
import { View, FlatList, ActivityIndicator } from 'react-native';

import styles from './styles';
import NoData from "../NoData";
import ImageWithLoading from '../ui/ImageWithLoading';
import colors from "../../constants/colors";

const ImagesList = ({ images, isLoading, fetchMoreImages }) => {
    return (
        <View testID="imagesList" style={styles.root}>
            <FlatList
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
                ListEmptyComponent={() => <NoData />}
                numColumns={2}
            />
        </View>
    );
};

export default ImagesList;