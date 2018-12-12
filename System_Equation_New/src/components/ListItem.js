import React, { Component } from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { CardContent } from './common';

class ListItem extends Component {
	render() {
		const { const1, const2, x1Const, x2Const, xAns, y1Const, y2Const, yAns } = this.props.xyConst;

		return (
			<View>
				<CardContent>
					<View style={{ flex: 2 }}>
						<Image 
							style={styles.bracketStyle}
							source={require('../images/parenthesisForHisPage.png')}
						/>	
					</View>
					<View style={[styles.containerStyle, { flex: 10 }]}>
						<View style={{ padding: 8 }}>						
							<Text>{x1Const}x + {y1Const}y = {const1}</Text>
						</View>
						<View style={{ padding: 8 }}>					
							<Text>{x2Const}x + {y2Const}y = {const2}</Text>
						</View>
					</View>
					<View style={{ flex: 3 }}>
						<Image 
							style={styles.bracketStyle}
							source={require('../images/arrow.png')}
						/>	
					</View>	
					<View style={[styles.containerStyle, { flex: 6 }]}>
						<View style={{ padding: 8 }}>
							<Text>x = {xAns}</Text>
						</View>
						<View style={{ padding: 8 }}>
							<Text>y = {yAns}</Text>
						</View>
					</View>				
				</CardContent>
			</View>
		);
	}
}

const styles = {
	bracketStyle: {
		width: Dimensions.get('window').width * 0.13,
		height: Dimensions.get('window').height * 0.1
	},
	containerStyle: {
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		borderColor: '#ddd',
		position: 'relative'
	}
};

export default ListItem;
