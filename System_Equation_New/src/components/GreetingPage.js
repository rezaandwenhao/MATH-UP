import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, Button } from 'react-native-elements';
import { Actions } from '../../node_modules/react-native-router-flux';

class GreetingPage extends Component {
    state = { 
		name: ''
	};

	onNameChange = (text) => {
		this.setState({
			name: text
		});
	}

	render() {
		return (
			<View
				style={{
					flex: 1, 
					display: "flex",
					justifyContent: "center",
					backgroundColor: "#7FFFD4"
				}}
			>
				<Text style={{ fontSize: 15, marginBottom: 10, marginLeft: 20}}>
					Hi, how can I call you?
				</Text>
				<FormInput 
					placeholder="Name(nickname)"
					value={this.state.name}
					onChangeText={this.onNameChange}
				/>
				<Button
  					rightIcon={{name: "pets"}}
					title="GO SOLVE!"
					onPress={() => {Actions.main({name: this.state.name})}}  
				/>
			</View>
		);
	}
}

export default GreetingPage;