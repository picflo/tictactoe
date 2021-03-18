import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import style from './App.module.css';
import Game from './pages/game/game';
import Home from './pages/home';
import store, { persistor } from './store';

function App() {
	return (
		<Router>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<div className={style.App}>
						<header className={style.header}>
							<h1>Tic Tac Toe</h1>
						</header>
						<Switch>
							<Route path="/game">
								<Game />
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</div>
				</PersistGate>
			</Provider>
		</Router>
	);
}

export default App;
