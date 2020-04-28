import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	player: 1,
	rows: [
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0]
	],
	winner: false,
	showHowToPlay: false
}

export default createSlice({
	name: 'game',
	initialState,
	reducers: {
		addChip: (state, action) => {
			const { payload: column } = action
			const { rows, player } = state
			
			// Check if column is between 0 and 6
			if (column > rows[0].length - 1 || column < 0) {
				throw new Error("Invalid column number")
			}

			// Check if column isn't full by checking if first row has a chip in it
			if (rows[0][column] > 0) {
				return
			}

			let rowNumber = 0
			
			for (const [i, row] of rows.entries()) {
				if (row[column] > 0) {
					break
				}
				rowNumber = i
			}
			rows[rowNumber][column] = player
		},
		setPlayer: (state, action) => {
			const { payload: player } = action
			state.player = player
		},
		setWinner: (state, action) => {
			const { payload: winStats } = action
			state.winner = winStats.winner
		},
		setShowHowToPlay: (state, action) => {
			const { payload: showHowToPlay } = action
			state.showHowToPlay = showHowToPlay
		},
		restartGame: state => {
			Object.keys(initialState).forEach(key => {
				state[key] = initialState[key]
			})
		}
	}
})