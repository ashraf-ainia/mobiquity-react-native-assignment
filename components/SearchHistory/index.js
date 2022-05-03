import React from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import NoData from '../NoData';

import styles from './styles';

const SearchHistory = ({
    historyList,
    isModalVisible,
    onOpenModal,
    onCloseModal
}) => {
    return (
        <>
            <Modal
                animationType="slide"
                visible={isModalVisible}
                onRequestClose={onCloseModal}
            >
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Terms search history
                        </Text>
                    </View>
                    <FlatList
                        data={historyList}
                        renderItem={(row) => {
                            return (
                                <View
                                    testID={`searchHistoryItem_${row.index}`}
                                    style={styles.itemContainer}
                                >
                                    <Text>{row.item.text}</Text>
                                    <Text>{row.item.date}</Text>
                                </View>
                            )
                        }}
                        ListEmptyComponent={() => <NoData title="No data" description="Search history is still empty!" />}
                    />
                    <TouchableOpacity
                        testID='historyModalCloseButton'
                        style={styles.closeButton}
                        onPress={onCloseModal}
                    >
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </Modal>
            <TouchableOpacity
                testID='historyModalOpenButton'
                style={styles.button}
                onPress={onOpenModal}
            >
                <Text style={styles.buttonText}>View search history</Text>
            </TouchableOpacity>
        </>
    );
};

export default SearchHistory;