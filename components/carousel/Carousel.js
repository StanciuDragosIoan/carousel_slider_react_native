import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';

import {CarouselItem} from './carouselItem/CarouselItem';
import {CarouselController} from './carouselController/CarouselController';

const images = new Array(6).fill(
  'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
);

export const Carousel = ({showControllers = true}) => {
  const scrollViewRef = useRef();
  const scrollHandler = imageIndex => {
    scrollViewRef.current.scrollTo({
      x: windowWidth * imageIndex,
      y: 0,
      animated: true,
    });
  };
  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <CarouselItem
          scrollViewRef={scrollViewRef}
          scrollX={scrollX}
          images={images}
          windowWidth={windowWidth}
          styles={styles}
        />
        {showControllers && (
          <CarouselController
            scrollX={scrollX}
            images={images}
            windowWidth={windowWidth}
            styles={styles}
            scrollHandler={scrollHandler}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
