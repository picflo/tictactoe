import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Board from '../../component/board/board';
import style from './game.module.css';
import PropTypes from 'prop-types';

const Game = props => {
	return (
		<div className={style.game}>
			<Link to="/" className={style.btn}>
				<button>Home</button>
			</Link>
			<div className={style.board}>
				<Board />
			</div>
			<div className={style.info}>
				<button className={style.reset} onClick={() => props.restart()}>
					Reset
				</button>
			</div>
		</div>
	);
};

Game.propTypes = {
	restart: PropTypes.any,
};

const mapDispatchToProps = dispatch => {
	return {
		restart: () => {
			dispatch({ type: 'RESTART' });
		},
	};
};

export default connect(null, mapDispatchToProps)(Game);
