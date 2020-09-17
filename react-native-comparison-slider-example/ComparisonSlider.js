import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Image,
  ImageBackground,
} from "react-native";

//  @Copyright: jeanregisser 
//  MIT: https://github.com/jeanregisser/react-native-slider
import Slider from "react-native-slider";

//	@Copyright: jhampton
//	MIT: https://github.com/jhampton/react-native-cropping.git
const CroppedImage = function(props) {
	return (
		<View style={[{
			overflow: "hidden",
			height: props.cropHeight,
			width: props.cropWidth,
			backgroundColor: "transparent"
		}, props.style]}>
		
			<Image 
				style={{
					position: "absolute",
					top: props.cropTop * -1,
					left: props.cropLeft * -1,
					width: props.width,
					height: props.height
				}}
				source={props.source}
				resizeMode={props.resizeMode}>
					{props.children}
			</Image>
		</View>
	);
}

export default class ComparisonSlider extends Component {

	constructor(props) {
		super(props);

		const imageWidth = props.imageWidth;
		const imageHeight = props.imageHeight;
		const initialPosition = props.initialPosition ? props.initialPosition / 100 :  50 / 100;
		const thumbWidth = props.thumbWidth ? props.thumbWidth : 3;
		const leftImage = props.leftImage;
		const rightImage = props.rightImage;

		if(props.rightImageURI && !props.imageWidth && !props.imageHeight) {
			Image.getSize(props.rightImageURI, (width, height) =>  this.setState({ 
				imgWidth: width, 
				imgHeight: height,
				cropWidth: width * initialPosition + thumbWidth / 2, }));
		}
		this.state = {
			value: initialPosition,
			imgWidth: imageWidth,
			imgHeight: imageHeight,
			cropWidth: imageWidth * initialPosition + thumbWidth / 2,
			thumbWidth: thumbWidth,
			leftImageURI: props.leftImageURI,
			rightImageURI: props.rightImageURI,
			leftImage: leftImage,
			rightImage: rightImage,
			sliderTrackColor: "transparent",
		}
	}

	onChange(value) {

		const newValue = ((value * 100 * this.state.imgWidth) / 100);
		if(this.props.onValueChange) {
			this.props.onValueChange(value);
		}

		this.setState({
			value: value,
			cropWidth: newValue + this.state.thumbWidth / 2,
		})
	}

	renderDefaultThumbView() {

		const ballSize = 40;
		const color = "white";

		const defaultStyle ={
			left: (this.state.value * this.state.imgWidth),
			width: 2, 
			height: this.state.imgHeight / 2 - ballSize / 2, 
			backgroundColor: color, 
			position: "absolute",
			borderWidth: 1,
			borderColor: color,
			borderRadius: ballSize / 2,
		} 

		const defaultStyleTriangle = {
			width: 0,
			height: 0,
			backgroundColor: "transparent",
			borderStyle: "solid",
			borderLeftWidth: ballSize / 6,
			borderRightWidth: ballSize / 6,
			borderBottomWidth: ballSize / 4,
			borderLeftColor: "transparent",
			borderRightColor: "transparent",
			borderBottomColor: color,
		}

		return (
			<View style={{ 
				height: this.state.imgHeight,
				position: "absolute",
				justifyContent: "center",
			}}>
			   <View style={{ 
					left: (this.state.value * this.state.imgWidth) - ballSize / 2,
					width: ballSize, 
					height: ballSize, 
					backgroundColor: "transparent", 
					position: "absolute",
					borderWidth: 2,
					borderColor: color,
					borderRadius: ballSize / 2,
					justifyContent: "center",
					alignItems: "center",
				}}>

					{/** Triangle **/}
					<View style={{ flexDirection: "row",}}>
						<View 
							style={[
								defaultStyleTriangle, 
								{ 
									marginRight: ballSize / 20, 
									transform: [{ rotate: "270deg"}], 
								}]} 
						/> 
						<View 
							style={[
								defaultStyleTriangle, 
								{ 
									left: ballSize / 20, 
									transform: [{ rotate: "90deg"}], 
								}]} 
						/> 
					</View>
					
				</View>

				{/** Line **/} 
				<View style={[ defaultStyle, { top: 0, }]} />
				<View style={[ defaultStyle, { bottom: 0, }]} />	        
			</View>
		)
	}

	render() {

		if(this.props.thumbnailRender && !this.props.thumbnailWidth) {
			console.log("When using thumbnail render, thumbnailWidth should be specified! ");
		}

		return (
			<View>
				<ImageBackground
					source={ this.state.rightImage ? this.state.rightImage : { uri: this.state.rightImageURI } }
					style={[ {
						width: this.state.imgWidth,
						height: this.state.imgHeight,
						backgroundColor: "transparent",
						justifyContent: "center",
					}, this.props.imageStyle]}>

					<CroppedImage
						source={ this.state.leftImage ? this.state.leftImage : { uri: this.state.leftImageURI } }
						style={this.props.imageStyle}
						cropTop={0}
						cropLeft={0}
						cropWidth={this.state.cropWidth}
						cropHeight={this.state.imgHeight}
						width={this.state.imgWidth}
						height={this.state.imgHeight} />


						{ this.props.thumbnailRender && this.props.thumbnailWidth ? 
							<View style={{ 
								position: "absolute", 
								left: (this.state.value * this.state.imgWidth) - this.props.thumbnailWidth / 2,
							}}>{this.props.thumbnailRender
							    ()}</View> : 

							this.renderDefaultThumbView() }

						<Slider
							value={this.state.value}
							onValueChange={(value) => this.onChange(value) }
							onSlidingStart={() => this.props.onSlidingStart && this.props.onSlidingStart()}
							onSlidingComplete={() => this.props.onSlidingComplete && this.props.onSlidingComplete()}
							minimumTrackTintColor={this.state.sliderTrackColor}
							maximumTrackTintColor={this.state.sliderTrackColor}
							// thumbImage={require("./img/left.jpeg")}
							thumbTouchSize={{ 
								width: this.state.thumbWidth * 33, 
								height: this.state.imgHeight
							}}
							thumbStyle={{ 
								backgroundColor: "transparent",
								width: this.state.thumbWidth, 
								height: this.state.imgHeight, 
								
							}}
							style={{
								zIndex: 3,
								position: "absolute",
								width: this.state.imgWidth,
							}} 
						/>
				</ImageBackground>
			</View>
		);
	}
}

AppRegistry.registerComponent("ComparisonSlider", () => ComparisonSlider);
