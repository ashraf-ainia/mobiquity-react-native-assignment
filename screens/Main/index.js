import React from 'react';
import { SafeAreaView } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

import TermsSearchInput from '../../components/TermsSearchInput';
import TermsSlider from '../../components/TermsSlider';
import ImagesList from '../../components/ImagesList';
import SearchHistory from '../../components/SearchHistory';
import getTermsList from '../../services/getTermsList';
import searchFlickrImages from '../../services/searchFlickrImages';
import { getTimeFromDate } from '../../config/helpers';

const termsList = getTermsList();

const MainScreen = () => {
    const [searchText, setSearchText] = React.useState('');
    const [selectedTermId, setSelectedTermId] = React.useState();
    const [images, setImages] = React.useState({ photo: [] });
    const [termsHistory, setTermsHistory] = React.useState([]);
    const [isHistoryModalVisible, setIsHistoryModalVisible] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [listScrollToggle, setListScrollToggle] = React.useState(false);

    const fetchImagesData = (isNewTerm, text, page) => {
        setIsLoading(true);
        searchFlickrImages(text, page).then(res => {

            // isNewTerm true means to reset the images list
            if (isNewTerm) {
                setImages(res);

                const termHistoryObject = {
                    text,
                    date: getTimeFromDate()
                };
                setTermsHistory(prevState => [...prevState, termHistoryObject]);
                setListScrollToggle(prevState => !prevState);
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
                // setListScrollToggle(false);
            }
        }).catch(err => {
            __DEV__ && console.log('err: ', err);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    const debouncedFetchImagesData = useDebouncedCallback(fetchImagesData, 400);

    const setSelectedTermHandler = (termId) => {
        // prevent double requests for the same term
        if (termId === selectedTermId) return;

        const termText = termsList.find(term => term.id === termId).title;
        setSelectedTermId(termId);
        setSearchText(termText);
        fetchImagesData(true, termText, 1);
    };

    const fetchMoreHandler = () => {
        if (images.photo.length < images.total) {
            fetchImagesData(false, searchText, images.page + 1);
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

    const setSearchTextHandler = (value) => {
        setSearchText(value);
        setSelectedTermId(null);
        if (value) {
            debouncedFetchImagesData(true, value, 1);
        } else {
            setImages({ photo: [] });
        }
    };

    return (
        <SafeAreaView testID='mainScreen' style={{ flex: 1 }}>
            <TermsSearchInput
                searchText={searchText}
                setSearchText={setSearchTextHandler}
            />
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
                listScrollToggle={listScrollToggle}
            />
        </SafeAreaView>
    );
};

export default MainScreen;