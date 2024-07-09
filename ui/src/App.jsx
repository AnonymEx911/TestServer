import React from 'react';
import './assets/styles/app.scss';
import AuthMain from './components/authorization/Authorization';
import DeathMain from './components/death/Death';
import HudMain from './components/hud/Hud';

function App() {
	return (
		<React.Fragment>
			<div>
				<AuthMain />
				<DeathMain />
				<HudMain />
			</div>
		</React.Fragment>
	)
}

export default App;