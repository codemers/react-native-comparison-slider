import React, {useState} from 'react';
import {View, Image, ImageBackground} from 'react-native';

//  @Copyright: callstack
//  MIT: https://github.com/callstack/react-native-slider
import Slider from '@react-native-community/slider';

//	@Copyright: jhampton
//	MIT: https://github.com/jhampton/react-native-cropping.git
const CroppedImage = function (props) {
  return (
    <View
      style={[
        {
          overflow: 'hidden',
          height: props.cropHeight,
          width: props.cropWidth,
          backgroundColor: 'transparent',
        },
        props.style,
      ]}>
      <Image
        style={{
          position: 'absolute',
          top: props.cropTop * -1,
          left: props.cropLeft * -1,
          width: props.width,
          height: props.height,
        }}
        source={props.source}
        resizeMode={props.resizeMode}>
        {props.children}
      </Image>
    </View>
  );
};

const ComparisonSlider = props => {
  const imageWidth = props.imageWidth;
  const imageHeight = props.imageHeight;
  const initialPosition = props.initialPosition
    ? props.initialPosition / 100
    : 50 / 100;
  const thumbWidth = props.thumbWidth ? props.thumbWidth : 3;
  const leftImage = props.leftImage;
  const rightImage = props.rightImage;

  if (props.rightImageURI && !props.imageWidth && !props.imageHeight) {
    Image.getSize(props.rightImageURI, (width, height) =>
      setState({
        ...state,
        imgWidth: width,
        imgHeight: height,
        cropWidth: width * initialPosition + thumbWidth / 2,
      }),
    );
  }

  const [state, setState] = useState({
    value: initialPosition,
    imgWidth: imageWidth,
    imgHeight: imageHeight,
    cropWidth: imageWidth * initialPosition + thumbWidth / 2,
    thumbWidth: thumbWidth,
    leftImageURI: props.leftImageURI,
    rightImageURI: props.rightImageURI,
    leftImage: leftImage,
    rightImage: rightImage,
    sliderTrackColor: 'transparent',
  });

  const onChange = value => {
    const newValue = (value * 100 * state.imgWidth) / 100;
    if (props.onValueChange) {
      props.onValueChange(value);
    }

    setState({
      ...state,
      value: value,
      cropWidth: newValue + state.thumbWidth / 2,
    });
  };

  const renderDefaultThumbView = () => {
    const ballSize = 40;
    const color = 'white';

    const defaultStyle = {
      left: state.value * state.imgWidth,
      width: 2,
      height: state.imgHeight / 2 - ballSize / 2,
      backgroundColor: 'color',
      position: 'absolute',
      borderWidth: 1,
      borderColor: color,
      borderRadius: ballSize / 2,
    };

    const defaultStyleTriangle = {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: ballSize / 6,
      borderRightWidth: ballSize / 6,
      borderBottomWidth: ballSize / 4,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: color,
    };

    return (
      <View
        style={{
          height: state.imgHeight,
          position: 'absolute',
          justifyContent: 'center',
        }}>
        <View
          style={{
            left: state.value * state.imgWidth - ballSize / 2,
            width: ballSize,
            height: ballSize,
            backgroundColor: 'transparent',
            position: 'absolute',
            borderWidth: 2,
            borderColor: color,
            borderRadius: ballSize / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/** Triangle **/}
          <View style={{flexDirection: 'row'}}>
            <View
              style={[
                defaultStyleTriangle,
                {
                  marginRight: ballSize / 20,
                  transform: [{rotate: '270deg'}],
                },
              ]}
            />
            <View
              style={[
                defaultStyleTriangle,
                {
                  left: ballSize / 20,
                  transform: [{rotate: '90deg'}],
                },
              ]}
            />
          </View>
        </View>

        {/** Line **/}
        <View style={[defaultStyle, {top: 0}]} />
        <View style={[defaultStyle, {bottom: 0}]} />
      </View>
    );
  };

  if (props.thumbnailRender && !props.thumbnailWidth) {
    console.log(
      'When using thumbnail render, thumbnailWidth should be specified! ',
    );
  }

  return (
    <View>
      <ImageBackground
        source={
          state.rightImage ? state.rightImage : {uri: state.rightImageURI}
        }
        style={[
          {
            width: state.imgWidth,
            height: state.imgHeight,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          },
          props.imageStyle,
        ]}>
        <CroppedImage
          source={state.leftImage ? state.leftImage : {uri: state.leftImageURI}}
          style={props.imageStyle}
          cropTop={0}
          cropLeft={0}
          cropWidth={state.cropWidth}
          cropHeight={state.imgHeight}
          width={state.imgWidth}
          height={state.imgHeight}
        />

        {props.thumbnailRender && props.thumbnailWidth ? (
          <View
            style={{
              position: 'absolute',
              left: state.value * state.imgWidth - props.thumbnailWidth / 2,
            }}>
            {props.thumbnailRender()}
          </View>
        ) : (
          renderDefaultThumbView()
        )}

        <Slider
          value={state.value}
          onValueChange={value => onChange(value)}
          onSlidingStart={() => props.onSlidingStart && props.onSlidingStart()}
          onSlidingComplete={() =>
            props.onSlidingComplete && props.onSlidingComplete()
          }
          minimumTrackTintColor={state.sliderTrackColor}
          maximumTrackTintColor={state.sliderTrackColor}
          // thumbImage={require("./img/left.jpeg")}
          thumbTouchSize={{
            width: state.thumbWidth * 33,
            height: state.imgHeight,
          }}
          thumbStyle={{
            width: state.thumbWidth,
            height: state.imgHeight,
          }}
          thumbTintColor={'transparent'}
          style={{
            zIndex: 3,
            position: 'absolute',
            width: state.imgWidth,
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default ComparisonSlider;
