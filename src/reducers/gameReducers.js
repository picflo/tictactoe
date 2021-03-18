import { calculateDraw, calculateWinner } from '../component/board-logic';

export const initState = {
	board: Array(9).fill(null),
	win: undefined,
	draw: false,
	turn: 'O',
};

export const gameReducers = (state = initState, action) => {
	switch (action.type) {
		case 'NEW_MOVE':
			let newGame = state;
			let board = newGame.board.slice();
			board[action.squareId] = newGame.turn;

			const isWinner = calculateWinner(board);
			if (isWinner) {
				newGame.win = newGame.turn;
			}
			const isDraw = calculateDraw(board);
			if (isDraw && !isWinner) {
				newGame.draw = true;
			}

			if (!newGame.win) {
				newGame.turn = newGame.turn === 'O' ? 'X' : 'O';
			}
			return {
				...state,
				board: board,
				win: newGame.win,
				draw: newGame.draw,
				turn: newGame.turn,
			};
		case 'RESTART':
			return {
				board: Array(9).fill(null),
				win: undefined,
				draw: false,
				turn: 'O',
			};
		default:
			return state;
	}
};

export default gameReducers;
