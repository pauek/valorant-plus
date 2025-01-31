import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../lib/colors';
import ButtonPlus from './ButtonPlus';
import HomeIcon from './icons/HomeIcon';

export default function GridItem({ id, imageBg = colors.highlights, size, button = true, buttonType = 'more', imageType = 'crop', title, imageUrl, link }) {

  let containerSize = { width: 154, height: 208 };

  switch (size) {
    case 'large':
      containerSize = { width: 180, height: 220 };
      break;
    case 'full-width':
      containerSize = { width: '100%', height: 176 };
      break;
  }

  if (!imageUrl) {
    return (
      <View style={[styles.container, { width: containerSize.width, height: containerSize.height }]} >
        <View style={styles.decorationTopLeft} />
        <View style={[styles.imageWrapper, styles.noImageWrapper]}>
          <HomeIcon color='#333' size={80} />
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.name}>{title}</Text>
        </View>
        <View style={styles.decorationBottomRight} />
      </View>
    );
  }

  function goToDetail() {
    if (id) {
      console.log('go to item: ' + id);
    }
  }

  return (
    <Pressable style={({ pressed }) => [styles.container, { width: containerSize.width, height: containerSize.height }, { backgroundColor: pressed ? colors.bg : colors.darkBase }]} onPress={() => {goToDetail()}} >
      <View style={styles.decorationTopLeft} />
      <View style={[styles.imageWrapper, { backgroundColor: imageBg }]}>
        <Image source={{ uri: imageUrl, }} style={[styles.image, imageType === 'center' ? styles.imageCenter : null, size === 'full-width' ? styles.imageFullWidth : null]}></Image>
      </View>
      <View style={[styles.infoWrapper, size === 'full-width' ? styles.infoWrapperFullWidth : null]}>
        <Text style={styles.name}>{title}</Text>
        {button ? buttonType === 'more' ? <ButtonPlus type='more' /> : <ButtonPlus type="favorite" /> : null}
      </View>
      <View style={styles.decorationBottomRight} />
    </Pressable>
  );

}

const styles = StyleSheet.create({
  container: {
    flexBasis: 'auto',
    alignItems: "center",
    backgroundColor: colors.darkBase,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 18,
  },
  name: {
    color: colors.neutral,
    fontFamily: "tungsten",
    fontSize: 25,
    textTransform: "uppercase",
    marginTop: 5,
    marginBottom: 5,
  },
  decorationTopLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 18,
    height: 18,
    borderTopColor: colors.details,
    borderTopWidth: 1,
    borderLeftColor: colors.details,
    borderLeftWidth: 1,
  },
  decorationBottomRight: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 18,
    height: 18,
    borderBottomColor: colors.details,
    borderBottomWidth: 1,
    borderRightColor: colors.details,
    borderRightWidth: 1,
  },
  imageWrapper: {
    flex: 1,
    width: '100%',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },
  noImageWrapper: {
    backgroundColor: '#444',
    borderWidth: 5,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: '110%',
    height: '110%',
    position: 'relative',
    left: '-20%',
  },
  noimage: {
    color: 'red',
    width: '100%',
    height: 'auto',
  },
  imageCenter: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    left: '0%',
  },
  imageFullWidth: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    left: '0%',
  },
  infoWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  infoWrapperFullWidth: {
    flexDirection: 'row',
    flex: 0.45,
    paddingTop: 10
  }
});