import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Carousel} from './components/carousel/Carousel';

const App = () => {
  return (
    <View style={styles.mainContainer} data-test="main-app-container">
      <Carousel />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
