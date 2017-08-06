import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
} from "react-native";

//  @Copyright: jeanregisser 
//  MIT: https://github.com/jeanregisser/react-native-slider
import Slider from "react-native-slider";

//	Copyright: jhampton
//	MIT: https://github.com/jhampton/react-native-cropping.git
const CroppedImage = React.createClass({
	render() {
		return (
			<View style={[{
				overflow: "hidden",
				height: this.props.cropHeight,
				width: this.props.cropWidth,
				backgroundColor: 'transparent'
			}, this.props.style]}>
			
				<Image 
					style={{
						position: 'absolute',
						top: this.props.cropTop * -1,
						left: this.props.cropLeft * -1,
						width: this.props.width,
						height: this.props.height
					}}
					source={this.props.source}
					resizeMode={this.props.resizeMode}>
						{this.props.children}
				</Image>
	  		</View>
		);
  	}
});

export default class ComparisonSlider extends Component {

	constructor(props) {
		super(props);

		const imgWidth = 350;

		this.state = {
			value: 0,
			imgWidth: 350,
			cropWidth: 0,
		}
	}

	onChange(value) {
		this.setState({value}); 

		const valueInt = Math.floor(value * 100);

		// this.props.onValueChange(valueInt);

		this.setState({
			cropWidth: (Math.floor(value * 100) * this.state.imgWidth) / 100,
		})
	}

	render() {

		//	Props a passer,

		//	Width + height

		//	Ou si url, seulement passer url, moi getImage().size donc déduit de maniere automatique la width

		//	Le rendre vertical aussi

		return (
			<View style={styles.container}>
				<Image 
					source={require("./img/left.jpeg")}
					style={{
						width: this.state.imgWidth,
						height: 500,
						resizeMode: "contain",
					}}>
					<CroppedImage
						source={ require("./img/right.jpeg") }
						cropTop={0}
						cropLeft={0}
						cropWidth={this.state.cropWidth}
						cropHeight={500}
						width={this.state.imgWidth}
						height={500}
						resizeMode="contain" />
				</Image>

				<Slider
					value={this.state.value}
					onValueChange={(value) => this.onChange(value) }
					style={{
						zIndex: 3,
						width: 375,
					}}
				/>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "center",
  },
});


AppRegistry.registerComponent("ComparisonSlider", () => ComparisonSlider);
