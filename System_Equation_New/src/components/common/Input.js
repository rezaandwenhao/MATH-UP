import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeHolder, secureTextEntry }) => {
	//receiving prop
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeHolder}
				autoCorrect={false}
				style={inputStyle} 
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	/*Here since Text(style with inputStyle) and TextInput (style with labelStyle)
	are children of <View>, flex will define how much portion they want to share*/
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
	//container here refers to <View>
};

export { Input };
