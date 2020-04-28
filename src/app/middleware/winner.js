import game from '../reducers/game'
import checkForWinner from '../helpers/checkForWinner'

const winner = store => next => action => {
	// Whose turn was this?
	const oldState = store.getState()
	const { player } = oldState.game

	// Process the action
	let result = next(action)

	// Check if a chip was added
	if (action.type !== game.actions.addChip.type) {
		return result
	}

	// Let's see if we have a winner
	const state = store.getState ()
	const winStats = checkForWinner(state.game.rows)
	const { dispatch } = store

	if (winStats) {
		// Winner found!
		dispatch(game.actions.setWinner({
			winner: player,
			...winStats
		}))
	} else {
		// No winner found, set other player's turn
		const nextPlayer = state.game.player === 1 ? 2 : 1
		dispatch(game.actions.setPlayer(nextPlayer))
	}

	return result
}

export default winner