/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from "react-native";


import ComparisonSlider from "./ComparisonSlider.js";

export default class Index extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ComparisonSlider 
                  imageWidth={300}
                  imageHeight={400}
                  initialPosition={50}
                  leftImage={require("./img/left.jpeg")}
                  rightImage={require("./img/right.jpeg")} 
                  // leftImageURI="https://photos-1.dropbox.com/t/2/AABlZNVgL0kPhA9ZtgRrPsWnePaGFbU5I4ts7r_pnT1-1Q/12/58764507/jpeg/32x32/3/1502071200/0/2/left.jpeg/EICRtS0Y4fMGIAcoBw/S7GKmnyHqCvt7mSl64BMlx-CTDS68GXDpJgM3oXI2YY?dl=0&size=2048x1536&size_mode=3"
                  // rightImageURI="https://photos-6.dropbox.com/t/2/AAAKWlAX0DZaao9mFQI3nXetFYj_J-xlrFaDb-J2vxOaOQ/12/58764507/jpeg/32x32/3/1502071200/0/2/right.jpeg/EICRtS0Y4fMGIAcoBw/btMC6E5BlhUVWRA_uk7Jlm6KAD-rt0wofF5LQyHCfC8?dl=0&size=2048x1536&size_mode=3"
                  // thumbnailWidth={40}
                  // thumnailRender={() => {
                  //   return (
                  //     <View style={{width: 40, height: 40, backgroundColor: "red" }}/>
                  //   )
                  // }}
                  onValueChange={(val) => console.log("New value")}/>  
                <Text>{this.state.value}</Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ComparisonSlider', () => Index);
