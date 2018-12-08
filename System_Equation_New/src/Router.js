import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HistoryPage from './components/HistoryPage';
import EquationPage from './components/EquationPage';
import GreetingPage from './components/GreetingPage'

const RouterComponent = () => {
    return (
		<Router>
			<Scene key="root" style={{ paddingTop: 60 }}>
				<Scene key="greeting" component={GreetingPage} parentIndex={1} initial />
				<Scene
					//rightTitle="History"
					key="main" 
					component={EquationPage} 
					title="System Equation" 
				/>
				<Scene key="history" component={HistoryPage} title="Solving History" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;
