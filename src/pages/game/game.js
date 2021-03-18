import { connect } from 'react-redux';
import Board from '../../component/board/board';
import style from './game.module.css';

const Game = props => {
	return (
		<div className={style.game}>
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

const mapDispatchToProps = dispatch => {
	return {
		restart: () => {
			dispatch({ type: 'RESTART' });
		},
	};
};

export default connect(null, mapDispatchToProps)(Game);
