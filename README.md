## React Native Comparison SLider
- A simple component to display two image in comparison with a slide-over feature.
- Help you to compare two images
- Lightweight, fast, flexible, customizable.
- Support both iOS and Android devices

## Install
```
npm install --save react-native-comparison-slider

Require React-Native > 0.45.0
```

## Demo
![Demo](https://dl.dropboxusercontent.com/content_link/7UBx3Eoc8BAxWqA1DhxMXrLDr2s8h06aIukC26FZBEYcuRxTdqDP6SWSNXy2jn8X/file?dl=0&duc_id=Fomo7JGidlWzMxdwLnzLWGErj1hEsovOT2PvyWb8S4ePsHQUyMwjv820PtaBqlCg&raw=1&size=2048x1536&size_mode=3)

## Example code
PS: For a more detailed example, see: react-native-comparison-slider-example

When you want to use the comparison slider with local images, simply add these lines: 
```
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
```
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

Tableau avec les props + valeur initiale


// 	//	Value
// 	initialPosition: React.PropTypes.number.optionnal,
// 	imageWidth: React.PropTypes.number.optionnal,	
// 	imageHeight: React.PropTypes.number.optionnal,	
// 	thumbWidth: React.PropTypes.number.required,		//	Size of the middle bar
// 	leftImage: React.PropTypes.object.optionnal,
// 	rightImage: React.PropTypes.object.optionnal,
// 	leftImageURI: React.PropTypes.string.optionnal,
// 	rightImageURI: React.PropTypes.string.optionnal,
//	onValueChange: Function
//	thumbnailRender: Function: 
//	thumbnailWidth: Number
//	imageStyle

// }

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
