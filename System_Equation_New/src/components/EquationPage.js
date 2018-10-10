// Note for Oct 3rd, cancel the auto go back from history page to 
// equation page, have a button in this page to go history page so i can pass the name
// then pass the name to fetchHistory(), also have a button in history page to bring back
// to equation page
import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base'; //Include Nativebase required components
import { connect } from 'react-redux';
import { Card } from './common';
import ConstEnteringSec from './ConstEnteringSec';
import { x1ConstChanged, y1ConstChanged, const1Changed, storeInput } from '../actions';
import { Actions } from '../../node_modules/react-native-router-flux';

class EquationPage extends Component {
	state = { 
		xAns: '',
		yAns: '',
		x2Const: '',
		y2Const: '',
		const2: '',
		//name: 'Wenhao'
	};

	onButtonPressDoCalc = () => {
		const { x1Const, y1Const, const1 } = this.props;
		const { x2Const, y2Const, const2 } = this.state;

		const a1 = (Number(y1Const) * Number(const2));
		const a2 = (Number(y2Const) * Number(const1));
		const a3 = (Number(x2Const) * Number(y1Const));
		const a4 = (Number(y2Const) * Number(x1Const));
		const up1 = (a1 - a2);
		const down1 = (a3 - a4);
		this.setState({
			xAns: (up1 / down1).toFixed(3)
		});
		
		const b1 = (Number(x1Const) * Number(const2));
		const b2 = (Number(const1) * Number(x2Const));
		const b3 = (Number(x1Const) * Number(y2Const));
		const b4 = (Number(y1Const) * Number(x2Const));
		const up2 = (b1 - b2);
		const down2 = (b3 - b4);
		this.setState({
			yAns: (up2 / down2).toFixed(3)
		});

		firebase.database().ref(`/users/${this.props.name}`)
			.push({ x1Const, y1Const, const1, x2Const, y2Const, const2, xAns: (up1 / down1).toFixed(3), yAns: (up2 / down2).toFixed(3) });
	}

	onX1ConstChange = (text) => {
		this.props.x1ConstChanged(text);
	}

	onY1ConstChange = (text) => {
		this.props.y1ConstChanged(text);
	}

	onConst1Change = (text) => {
		this.props.const1Changed(text);
	}

	onX2ConstChange = (text) => {
		this.setState({
			x2Const: text.replace(/[^0-9^-^.^/]/g, '')
		});
	}

	onY2ConstChange = (text) => {
		this.setState({
			y2Const: text.replace(/[^0-9^-^.^/]/g, '')
		});
	}

	onConst2Change = (text) => {
		this.setState({
			const2: text.replace(/[^0-9^-^.^/]/g, '')
		});
	}

	renderAnswer() {
		const { xAns, yAns } = this.state;

		if (isNaN(xAns) ||
			xAns === Infinity ||
			xAns === -Infinity ||
			isNaN(yAns) ||
			yAns === Infinity ||
			yAns === -Infinity) {
			return (
				<View style={{ borderColor: 'lightgreen', borderWidth: 5, padding: 20 }}>
					<Text>The system equation you entered has no solution or infinite solution.</Text>
				</View>
			);
		} 
		return (
			<View style={{ borderColor: 'lightgreen', borderWidth: 5, padding: 20 }}>
				<Text>Answer:</Text>
				<Text>x = {this.state.xAns}</Text>
				<Text>y = {this.state.yAns}</Text>
			</View>
		);	
	}

	render() {
		return (
			<Card>
				<ConstEnteringSec 
					x1Const={this.props.x1Const}
					onX1ConstChange={this.onX1ConstChange}
					y1Const={this.props.y1Const}
					onY1ConstChange={this.onY1ConstChange}
					const1={this.props.const1}
					onConst1Change={this.onConst1Change}
					x2Const={this.state.x2Const}
					onX2ConstChange={this.onX2ConstChange}
					y2Const={this.state.y2Const}
					onY2ConstChange={this.onY2ConstChange}
					const2={this.state.const2}
					onConst2Change={this.onConst2Change}
				/>

				{this.renderAnswer()}

				<View style={{ height: 55, padding: 5 }}>		
					<Button rounded success
						onPress={this.onButtonPressDoCalc} 
						style={{
							flex: 1,
							alignSelf: 'stretch',
							justifyContent:'center', //horizontally
							marginLeft: 5,
							marginRight: 5
						}}
					>
            			<Text
							style={{
								alignSelf: 'center',
								color: '#ffffff',
								fontSize: 18,
								fontWeight: '600',	//boldness
							}}
						>Solve!</Text>
          			</Button>		
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
					//passing the name further to HistoryPage
					<Button transparent info
						onPress={() => {Actions.history({name: this.props.name})}}  
					>
						<Text style={{color: '#007aff', fontSize: 16}}>
							History
						</Text>
					</Button>
				</View>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	return {
		x1Const: state.equationPage.x1Const,
		y1Const: state.equationPage.y1Const,
		const1: state.equationPage.const1
	};
};

export default connect(mapStateToProps, { 
	x1ConstChanged, y1ConstChanged, const1Changed, storeInput
})(EquationPage);
