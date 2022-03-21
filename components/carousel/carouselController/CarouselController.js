import React from 'react';
import {View, Animated, TouchableOpacity} from 'react-native';
export const CarouselController = ({
  windowWidth,
  scrollX,
  images,
  styles,
  scrollHandler,
}) => {
  return (
    <View style={styles.indicatorContainer} data-test="carousel-controller">
      {images.map((image, imageIndex) => {
        const width = scrollX.interpolate({
          inputRange: [
            windowWidth * (imageIndex - 1),
            windowWidth * imageIndex,
            windowWidth * (imageIndex + 1),
          ],
          outputRange: [8, 16, 8],
          extrapolate: 'clamp',
        });
        return (
          <TouchableOpacity
            key={imageIndex}
            onPress={() => scrollHandler(imageIndex)}
            aria-label="controllerBtnPlaceholder">
            <Animated.View
              style={[styles.normalDot, {width}]}
              data-test="controller-btn"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
