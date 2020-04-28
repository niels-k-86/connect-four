import game from '../reducers/game'
import { cpuMakeAMove } from '../actions/api'

const cpuOpponent = store => next => action => {
	let result = next(action)
	if (action.type !== game.actions.setPlayer.type || action.payload !== 2) {
		return result
	}
	
	const state = store.getState ()

	if (!state.game.winner) {
		store.dispatch(cpuMakeAMove(state.game.rows))
	}

	return state
}

export default cpuOpponent