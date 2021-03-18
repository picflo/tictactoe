import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import style from './App.module.css';
import Game from './pages/game/game';
import store, { persistor } from './store';

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<div className={style.App}>
					<header className={style.header}>
						<h1>Tic Tac Toe</h1>
					</header>
					<Game />
				</div>
			</PersistGate>
		</Provider>
	);
}

export default App;
