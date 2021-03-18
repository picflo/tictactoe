import React from 'react';
import { Link } from 'react-router-dom';
import style from './home.module.css';

const Home = () => {
	return (
		<div className={style.center}>
			<Link to="/game" className={style.btn}>
				<button>Play</button>
			</Link>
		</div>
	);
};

export default Home;
