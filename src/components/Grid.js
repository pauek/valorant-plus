import { View, StyleSheet, ActivityIndicato, SafeAreaView, FlatList } from 'react-native'
import { React } from 'react'
import { colors } from '../lib/colors'
import GridItem from './GridItem'
import { Dimensions } from 'react-native';

const Grid = ({ items, isSingleLine = false, imageBg, imageType, size, button, buttonType }) => {

    let columns;
    const space = 20;
    if (!isSingleLine) {
        const windowWidth = Dimensions.get('window').width;
        columns = Math.floor(windowWidth / 180);
    }

    if (!items) {
        return (
            <View>
                <ActivityIndicator color={colors.neutral} size="large"></ActivityIndicator>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                horizontal={isSingleLine}
                numColumns={!isSingleLine ? columns : 1}
                data={items}
                renderItem={({ item }) =>
                    <View style={isSingleLine ? { marginRight: 20 } : {height: '100%', marginBottom: space}}>
                        <GridItem
                            key={item.uuid}
                            id={item.uuid}
                            title={item.displayName}
                            imageUrl={item.displayIcon}
                            imageBg={imageBg}
                            imageType={imageType}
                            size={size}
                            button={button}
                            buttonType={buttonType}
                        />
                    </View>}
                keyExtractor={item => item.uuid}
                columnWrapperStyle={!isSingleLine ? { justifyContent: 'space-around' } : null}
            >
            </FlatList>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Grid;