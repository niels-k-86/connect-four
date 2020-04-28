import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import gameReducer from '../reducers/game';
import winner from '../middleware/winner'
import cpuOpponent from '../middleware/cpuOpponent'

export default configureStore({
	reducer: {
		game: gameReducer.reducer
	},
	middleware: [winner, cpuOpponent, ...getDefaultMiddleware()]
});
