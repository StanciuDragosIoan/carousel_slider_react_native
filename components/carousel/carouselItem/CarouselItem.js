import React from 'react';
import {ScrollView, Text, View, ImageBackground, Animated} from 'react-native';
export const CarouselItem = ({
  scrollViewRef,
  scrollX,
  images,
  windowWidth,
  styles,
}) => {
  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal={true}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        {useNativeDriver: false},
      )}
      scrollEventThrottle={1}>
      {images.map((image, imageIndex) => {
        return (
          <View style={{width: windowWidth, height: 250}} key={imageIndex}>
            <ImageBackground source={{uri: image}} style={styles.card}>
              <View style={styles.textContainer}>
                <Text style={styles.infoText}>{'Image - ' + imageIndex}</Text>
              </View>
            </ImageBackground>
          </View>
        );
      })}
    </ScrollView>
  );
};
