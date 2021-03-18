import { calculateWinner } from './board-logic';

it('Should indicate no winning result', () => {
	const board = ['X', null, 'X', null, null, null, null, null, null];
	const winner = calculateWinner(board);
	expect(winner).toBe(null);
});

it('Should indicate winning result for X', () => {
	const board = ['X', 'X', 'X', null, null, null, null, null, null];
	const winner = calculateWinner(board);
	expect(winner).toBe('X');
});

it('Should indicate winning result for O', () => {
	const board = ['O', null, null, 'O', null, null, 'O', null, null];
	const winner = calculateWinner(board);
	expect(winner).toBe('O');
});
