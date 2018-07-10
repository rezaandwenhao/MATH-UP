import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HistoryPage from './components/HistoryPage';
import EquationPage from './components/EquationPage';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" style={{ paddingTop: 60 }}>
				<Scene
					rightTitle="History"
					onRight={() => Actions.history()} 
					key="main" 
					component={EquationPage} 
					title="System Equation Solver" 
					initial 
				/>
				<Scene key="history" component={HistoryPage} title="Solving History" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;
