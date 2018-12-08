import React, { Component } from 'react';
import { TextInput, View, Text, Image } from 'react-native';
import { CardContent } from './common';


class ConstEnteringSec extends Component {
	render() {
		return (
			<View style={{ 
				flexDirection: 'row', 
				height: 120, 
				width: 360, 
				paddingBottom: 15, 
				position: 'absolute', 
				top: '5%'
			}}>
					<View style={{ flex: 2 }}>
						<Image 
							style={styles.bracketStyle}
							resizeMode='stretch'
							back
							source={require('../images/parenthesis.png')} 
						/>	
					</View>

					<View style={{ flex: 8 }}>
						<CardContent>
							<TextInput
								autoCorrect={false}
								style={styles.inputStyle} 
								value={this.props.x1Const}
								selectionColor='white'
								onChangeText={this.props.onX1ConstChange}
								//keyboardType={'numeric'}
							/>							
							<Text style={styles.textStyle}>x</Text>
							<Text style={styles.textStyle}>+</Text>
							<TextInput
								autoCorrect={false}
								style={styles.inputStyle} 
								value={this.props.y1Const}
								selectionColor='white'
								onChangeText={this.props.onY1ConstChange}
								//keyboardType={'numeric'}
							/>
							<Text style={styles.textStyle}>y</Text>
							<Text style={styles.textStyle}>=</Text>
							<TextInput
								autoCorrect={false}
								style={styles.inputStyle} 
								value={this.props.const1}
								selectionColor='white'
								onChangeText={this.props.onConst1Change}
								//keyboardType={'numeric'}
							/>		
						</CardContent>

						<CardContent>
							<TextInput
								autoCorrect={false}
								style={styles.inputStyle} 
								value={this.props.x2Const}
								selectionColor='white'
								onChangeText={this.props.onX2ConstChange}
								//keyboardType={'numeric'}
							/>	
							<Text style={styles.textStyle}>x</Text>
							<Text style={styles.textStyle}>+</Text>
							<TextInput
								autoCorrect={false}
								style={styles.inputStyle} 
								value={this.props.y2Const}
								selectionColor='white'
								onChangeText={this.props.onY2ConstChange}
								//keyboardType={'numeric'}
							/>
							<Text style={styles.textStyle}>y</Text>
							<Text style={styles.textStyle}>=</Text>
							<TextInput
								autoCorrect={false}
								style={styles.inputStyle} 
								value={this.props.const2}
								selectionColor='white'
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
		height: 105,
	},
	inputStyle: {
		color: 'white',
		paddingTop: 5,
		fontSize: 25,
		lineHeight: 23,
		flex: 3,
		borderColor: 'white',
		borderWidth: 2,
	},
	textStyle: {
		fontSize: 30,
		paddingLeft: 5,
		flex: 1,
		color: 'white',
	}
};

export default ConstEnteringSec;
