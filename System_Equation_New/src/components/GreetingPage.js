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
				<Text style={{ 
					fontSize: 25, 
					marginBottom: 10, 
					marginLeft: 20, 
					fontFamily: "ChalkboardSE-Bold",
					color: '#004d99'
				}}>
					Hi, how can I call you?
				</Text>
				<FormInput 
					inputStyle={{ 		
						color: '#000',
						fontSize: 25, 
					}} 
					placeholder="Name(nickname)"
					value={this.state.name}
					onChangeText={this.onNameChange}
				/>
				<Button
					buttonStyle={{ marginTop: 20 }}
  					rightIcon={{name: "pets"}}
					title="GO SOLVE!"
					onPress={() => {Actions.main({name: this.state.name})}}  
					disabled={nameEntered(this.state.name)}
				/>
			</View>
		);
	}
}

function nameEntered(name) {
	return (name.length === 0 || !name.trim());
}

export default GreetingPage;