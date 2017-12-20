// /**
//  * @providesModule CoreMLImage
//  * @flow
//  */
// 'use strict';

// var NativeCoreMLImage = require('NativeModules').CoreMLImageModule;

// /**
//  * High-level docs for the CoreMLImage iOS API can be written here.
//  */

// var CoreMLImage = {
//   test: function() {
//     NativeCoreMLImage.test();
//   }
// };

// module.exports = CoreMLImage;


import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	requireNativeComponent,
	Dimensions,
	View
} from 'react-native';

const CoreMLImageNative = requireNativeComponent("CoreMLImage", null);

export default class CoreMLImageView extends Component {

	onClassification(evt) {
		if (this.props.onClassification) {
			this.props.onClassification(evt.nativeEvent.classifications);
		}
	}

	render() {
		return (
			<CoreMLImageNative modelFile={this.props.modelFile} onClassification={(evt) => this.onClassification(evt)} style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height}}>
				<View style={localStyles.overlay}>
					{this.props.children}
				</View>
			</CoreMLImageNative>
		)
	}
}

const localStyles = StyleSheet.create({
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 999,
		backgroundColor: "transparent"
	}
});