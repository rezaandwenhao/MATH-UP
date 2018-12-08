import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { historyFetch } from '../actions';
import ListItem from './ListItem';

class HistoryPage extends Component {

	componentWillMount() {
		this.props.historyFetch(this.props.name);

		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		// nextProps are the next set of props that this component will be rendered with
		// this.prop is still the old set of props, so we have both accesses in this func
		this.createDataSource(nextProps);
	}

	createDataSource({ xyConsts }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(xyConsts);
		
		//however, cloneWithRows only deal with arrays, we somehow need to transform employees to an array(now it's object)
		//see how to solve in mapStateToProp
	}

	renderRow(xyConst) {
		return <ListItem xyConst={xyConst} />;
	}

	render() {
		return (
			<View	style={{ flex: 1 }}>
				<Text style={{ 
					fontSize: 15, 
					marginBottom: 5, 
					marginLeft: 10, 
					fontFamily: "ChalkboardSE-Light",
					color: '#004d99'
				}}>
					Hi {this.props.name}, below is your system equation solving history:
				</Text>
				{//<Text>{this.props.xyConsts[0] === undefined ? null : this.props.xyConsts[0].const1}</Text>
				//{/* same as <Text>{this.props.xyConsts[0] && this.props.xyConsts[0].const1}</Text>, and this is the simplified version*/}
				/*I got lucky here, since I used ListView (with componentWillMount and componentWillReceiveProps to protect dataSource),
			I don't need to handle situation like above when xyConsts are not fetched (undefined) yet*/}
				<ListView
					enableEmptySections
					dataSource={this.dataSource}
					renderRow={this.renderRow}
				/>
			</View>
		);
	}
}

const mapstateToProp = (state) => {
	const xyConsts = _.map(state.historyPage, (val, uid) => {
		return { ...val, uid };
	});
	//key is "uid", "val" is value
	return { xyConsts };
};

export default connect(mapstateToProp, { historyFetch })(HistoryPage);
