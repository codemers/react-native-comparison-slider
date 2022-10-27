## React Native Comparison Slider
- A simple component to display two image in comparison with a slide-over feature.
- Help you to compare two images
- Lightweight, fast, flexible, customizable.
- Support both iOS and Android devices

```
Original creator: Charles-Olivier Demers @codemers
```

## Install
```sh
npm install react-native-comparison-slider
```
or
```sh
yarn add react-native-comparison-slider
```

Requires React-Native >= 0.67.3

## Demo
![Demo](https://github.com/charlot567/react-native-comparison-slider/blob/master/demo_comparison_slider.gif)

## Example code
PS: For a more detailed example, see: react-native-comparison-slider-example -> to run the example, cd to the example folder and do `npx react-native start` lunch the iOS simulator by running `npx react-native run-ios`

When you want to use the comparison slider with local images, simply add these lines: 

```js
import ComparisonSlider from "react-native-comparison-slider";

<ComparisonSlider 
  imageWidth={667}
  imageHeight={400}
  initialPosition={50}
  leftImage={require("./img/left.jpeg")}
  rightImage={require("./img/right.jpeg")} 
/> 
```

These code will use the left.jpeg image as the left image and the right.jpeg as the right image.
The slider will be half between the image (50).
The imageWidth and imageHeight are the size you want your comparison slider to be.

When you want to use the comparison slider with remote images, simply add these lines:

```js
import ComparisonSlider from "react-native-comparison-slider";

<ComparisonSlider 
  initialPosition={50}
  leftImageURI="https://..."
  rightImageURI="https://..."
/> 
```

These code will use the leftImageURI as the left image and the rightImageURI as the right image.
The slider will be half between the image (50).
The default size for the comparison slider will be the image size of the remote url.You can bypass the size by adding the two props: `imageWidth and imageHeight`.

## Props
| Prop | Description | Default value |
|---|---|---|
|**`initialPosition`**|The initial position of the slider hover the image. Value are from (0 to 100)|`50`|
|**`imageWidth`**|Width of the image/comparison slider|If local image: `no default value`. If remote image `image width`|
|**`imageHeight`**|Height of the image/comparison slider|If local image: `no default value`. If remote image `image height`|
|**`leftImage`**|Left image for the comparison slider. Use as `require()` |`No default value`|
|**`rightImage`**|Right image for the comparison slider. Use as `require()` |`No default value`
|**`leftImageURI`**|URL for the left image of the comparison slider. Use as `{ uri:  "http://..." }`|`No default value`|
|**`rightImageURI`**|URL for the left image of the comparison slider. Use as `{ uri:  "http://..." }`|`No default value`|
|**`onValueChange`**|Function that get called when the slider value changed. (value) => console.log(value)|`No default value`|
|**`onSlidingStart`**|Function that get called when the slider starts to change. () => console.log(value)|`No default value`|
|**`onSlidingComplete`**|Function that get called when the slider ends changing. () => console.log(value)|`No default value`|
|**`thumbnailRender`**|Function that return a view. The view will be the middle slider|`Slider you can see in the demo`|
|**`thumbnailWidth`**|Width of the view that is returned by the thumbnailRender|`No default value`|
|**`imageStyle`**|Style property you can pass to apply to image of the comparison slider|`No default value`|
|**`resizeMode`**|ResizeMode property to apply to the image of the comparison slider|`No default value`|

## License

MIT License

Copyright (c) 2017 Charles-Olivier Demers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Other

This package use these two libraries:

- https://github.com/jhampton/react-native-cropping.git from 2jhampton
- https://github.com/callstack/react-native-slider from @callstack

@copyright of the image used in the demo:
- http://www.basketetsacados.com/top-10-des-plus-belles-plages-du-monde
