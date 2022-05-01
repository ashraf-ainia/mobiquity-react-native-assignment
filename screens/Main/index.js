import React from 'react';
import { SafeAreaView } from 'react-native';

import TermsSlider from '../../components/TermsSlider';
import ImagesList from '../../components/ImagesList';
import SearchHistory from '../../components/SearchHistory';
import getTermsList from '../../services/getTermsList';
import searchFlickrImages from '../../services/searchFlickrImages';
import { getTimeFromDate } from '../../config/helpers';

const termsList = getTermsList();

const MainScreen = () => {
    const [selectedTermId, setSelectedTermId] = React.useState();
    const [images, setImages] = React.useState({ photo: [] });
    const [termsHistory, setTermsHistory] = React.useState([]);
    const [isHistoryModalVisible, setIsHistoryModalVisible] = React.useState(false);
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
        // prevent double requests for the same term
        if (termId === selectedTermId) return;

        const termText = termsList.find(term => term.id === termId).title;
        const termHistoryObject = {
            text: termText,
            date: getTimeFromDate()
        };
        setTermsHistory(prevState => [...prevState, termHistoryObject]);
        setSelectedTermId(termId);
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
            <SearchHistory
                historyList={termsHistory}
                onOpenModal={() => setIsHistoryModalVisible(true)}
                onCloseModal={() => setIsHistoryModalVisible(false)}
                isModalVisible={isHistoryModalVisible}
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