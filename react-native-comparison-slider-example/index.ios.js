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


import ComparisonSlider from "./ComparisonSlider";

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

                {/** Local images **/}
                <ComparisonSlider
                  imageWidth={667}
                  imageHeight={400}
                  initialPosition={50}
                  resizeMode="cover"
                  video={true}
                  leftImage={require("./video/1.mp4")}
                  rightImage={require("./video/2.mp4")} />

                {/** Remote image **/}
                {/** <ComparisonSlider
                  imageWidth={667}
                  imageHeight={400}
                  initialPosition={50}
                  leftImageURI={"http://..."}
                  rightImageURI={"http://..."} />  **/}
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
