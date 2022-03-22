import React from 'react';
import {View, StyleSheet} from 'react-native';
// import {Carousel} from './components/carousel/Carousel';
import {KeyboardAnimationSample} from './components/keyboardAnimationSample/KeyboardAnimationSample';
// import {AnimatedComp} from './components/keyboardAnimationSample/AnimatedComp';

const App = () => {
  return (
    <View style={styles.mainContainer} data-test="main-app-container">
      {/* <Carousel /> */}
      <KeyboardAnimationSample />
      {/* <AnimatedComp /> */}
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
