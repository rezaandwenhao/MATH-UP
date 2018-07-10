import React, { Component } from 'react';
import { TextInput, View, Text, Image } from 'react-native';

import { CardContent } from './common';


class ConstEnteringSec extends Component {
	render() {
		return (
			<View style={{ flexDirection: 'row', height: 120, width: 360, paddingBottom: 15 }}>
					<View style={{ flex: 2 }}>
						<Image 
							style={styles.bracketStyle}
							source={{ uri: 'https://static.thenounproject.com/png/870097-200.png' }} 
						/>	
					</View>

					<View style={{ flex: 8 }}>
						<CardContent>
							<TextInput
								autoCorrect={false}
								style={styles.inputStyle} 
								value={this.props.x1Const}
								onChangeText={this.props.onX1ConstChange}
								//keyboardType={'numeric'}
							/>							
							<Text style={styles.textStyle}>x</Text>
							<Text style={styles.textStyle}>+</Text>
							<TextInput
								autoCorrect={false}
								style={styles.inputStyle} 
								value={this.props.y1Const}
								onChangeText={this.props.onY1ConstChange}
								//keyboardType={'numeric'}
							/>
							<Text style={styles.textStyle}>y</Text>
							<Text style={styles.textStyle}>=</Text>
							<TextInput
								autoCorrect={false}
								style={styles.inputStyle} 
								value={this.props.const1}
								onChangeText={this.props.onConst1Change}
								//keyboardType={'numeric'}
							/>		
						</CardContent>

						<CardContent>
							<TextInput
								autoCorrect={false}
								style={styles.inputStyle} 
								value={this.props.x2Const}
								onChangeText={this.props.onX2ConstChange}
								//keyboardType={'numeric'}
							/>	
							<Text style={styles.textStyle}>x</Text>
							<Text style={styles.textStyle}>+</Text>
							<TextInput
								autoCorrect={false}
								style={styles.inputStyle} 
								value={this.props.y2Const}
								onChangeText={this.props.onY2ConstChange}
								//keyboardType={'numeric'}
							/>
							<Text style={styles.textStyle}>y</Text>
							<Text style={styles.textStyle}>=</Text>
							<TextInput
								autoCorrect={false}
								style={styles.inputStyle} 
								value={this.props.const2}
								onChangeText={this.props.onConst2Change}
								//keyboardType={'numeric'}
							/>
						</CardContent>
					</View>
				</View>
		);
	}
}

const styles = {
	bracketStyle: {
		width: 70,
		height: 105
	},
	inputStyle: {
		color: '#000',
		//paddingRight: 5,
		//paddingLeft: 2,
		fontSize: 18,
		lineHeight: 23,
		flex: 1,
		borderColor: 'black',
		borderWidth: 1
	},
	textStyle: {
		fontSize: 18,
		paddingLeft: 5,
		flex: 1
	}
};

export default ConstEnteringSec;
