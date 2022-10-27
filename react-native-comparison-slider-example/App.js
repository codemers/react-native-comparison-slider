import React from 'react';
import {StyleSheet, View} from 'react-native';

import ComparisonSlider from './ComparisonSlider.js';

const App = () => {
  return (
    <View style={styles.container}>
      {/** Local images **/}
      <ComparisonSlider
        imageWidth={667}
        imageHeight={400}
        initialPosition={50}
        leftImage={require('./img/left.jpeg')}
        rightImage={require('./img/right.jpeg')}
      />

      {/** Remote image **/}
      {/** <ComparisonSlider 
                   imageWidth={667}
                   imageHeight={400}
                   initialPosition={50}
                   leftImageURI={"http://..."}
                   rightImageURI={"http://..."} />  **/}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
