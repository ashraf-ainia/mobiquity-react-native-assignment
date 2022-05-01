import React from 'react';
import { SafeAreaView } from 'react-native';

import TermsSlider from '../../components/TermsSlider';
import ImagesList from '../../components/ImagesList';
import getTermsList from '../../services/getTermsList';
import searchFlickrImages from '../../services/searchFlickrImages';

const termsList = getTermsList();

const MainScreen = () => {
    const [selectedTermId, setSelectedTermId] = React.useState();
    const [images, setImages] = React.useState({ photo: [] });
    const [isLoading, setIsLoading] = React.useState(false);

    const fetchImagesData = (isNewTerm, text, page) => {
        setIsLoading(true);
        searchFlickrImages(text, page).then(res => {

            // isNewTerm true means to reset the images list
            if (isNewTerm) {
                setImages(res);
            } else {
                // keep old data and concatenate the new fetched images with them
                const newImagesState = {
                    ...res,
                    photo: [
                        ...images.photo,
                        ...res.photo
                    ]
                };
                setImages(newImagesState);
            }
        }).catch(err => {
            __DEV__ && console.log('err: ', err);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    const setSelectedTermHandler = (termId) => {
        setSelectedTermId(termId);
        const termText = termsList.find(term => term.id === termId).title;
        fetchImagesData(true, termText, 1);
    };

    const fetchMoreHandler = () => {
        if (images.photo.length < images.total) {
            const termText = termsList.find(term => term.id === selectedTermId).title;
            fetchImagesData(false, termText, images.page + 1);
        }
    };

    const memoizedTermsList = React.useMemo(() => {
        return termsList.map(term => {
            return {
                ...term,
                isSelected: term.id === selectedTermId
            }
        });
    }, [selectedTermId]);

    return (
        <SafeAreaView testID='mainScreen' style={{ flex: 1 }}>
            <TermsSlider
                terms={memoizedTermsList}
                setSelectedTerm={setSelectedTermHandler}
            />
            <ImagesList
                images={images}
                isLoading={isLoading}
                fetchMoreImages={fetchMoreHandler}
            />
        </SafeAreaView>
    );
};

export default MainScreen;