import { createSelector } from '@reduxjs/toolkit'

const getRows = state => state.game.rows

export default createSelector(
	[getRows],
	(rows) => {
		const columns = []
		for (let i = 0; i < rows[0].length; i++) {
			columns.push(rows.map(row => row[i]))
		}
		return columns
	}
)




