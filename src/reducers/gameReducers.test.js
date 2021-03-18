import { initState, gameReducers } from './gameReducers';

it('Should add a O at given position and change turn to X', () => {
	const state = {
		board: [null, null, null, null, null, null, null, null, null],
		won: undefined,
		draw: false,
		turn: 'O',
	};
	const nextState = gameReducers(state, {
		type: 'NEW_MOVE',
		squareId: 0,
	});
	expect(nextState.board).toHaveLength(9);
	expect(nextState.turn).toBe("X");
});

it('Should reset the state to initial', () => {
	const state = {
		board: ["X", null, "O", null, null, null, null, null, null],
		won: false,
		draw: true,
		turn: 'X',
	};
	const nextState = gameReducers(state, { type: 'RESTART' });
	expect(nextState).toEqual(initState);
});
