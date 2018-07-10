import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPressed, text }) => {
	//get the prop whenPressed from parent
	const { buttonStyle, textStyle } = styles;
	return (
		<TouchableOpacity onPress={whenPressed} style={buttonStyle}>
			<Text style={textStyle}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',	//boldness
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		//strech to fill the limit of the container
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};

export { Button };
