import { connect } from 'react-redux';
import style from './board.module.css';

const Board = props => {
	const Square = ({ value, onClick }) => {
		return (
			<button
				className={style.square}
				onClick={onClick}
				style={{
					background: value === 'X' ? 'red' : value === 'O' ? 'blue' : null,
					border: value === 'X' || value === 'O' ? 'none' : null,
				}}
			/>
		);
	};

	function handleClick(i) {
		if (props.board[i] === null && !props.win && props.draw === false)
			props.newMove(i);
	}

	const renderSquare = i => {
		return (
			<Square
				value={props.board ? props.board[i] : null}
				onClick={() => handleClick(i)}
			/>
		);
	};

	let status;
	if (props.win) {
		status = 'Winner: ' + (props.win === 'X' ? 'red' : 'blue');
	} else if (props.draw === true) {
		status = 'Draw :/';
	} else {
		status = 'Actual player: ' + (props.turn === 'X' ? 'red' : 'blue');
	}

	return (
		<div>
			<div className={style.status}>{status}</div>
			<div className={style.row}>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className={style.row}>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className={style.row}>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		board: state.board,
		turn: state.turn,
		win: state.win,
		draw: state.draw,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		newMove: squareId => {
			dispatch({ type: 'NEW_MOVE', squareId: squareId });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
