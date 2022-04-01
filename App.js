import React from 'react';
import {View, StyleSheet} from 'react-native';
// import {Carousel} from './components/carousel/Carousel';
import {KeyboardAnimationSample} from './components/keyboardAnimationSample/KeyboardAnimationSample';
// import {AnimatedComp} from './components/keyboardAnimationSample/AnimatedComp';
import {CalendarFinal2} from './components/CalendarFinal/CalendarFinal2';
const App = () => {
  // CalendarModule.createCalendarEvent('foo', 'bar');
  return (
    <View style={styles.mainContainer} data-test="main-app-container">
      {/* <Carousel /> */}
      {/* <KeyboardAnimationSample /> */}
      <CalendarFinal2 />
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
