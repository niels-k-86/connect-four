const findRepeatingPartOfArray = (haystack, needle, amount) => {
	if (amount < 2) {
		throw Error("Invalid amount of repeats given. Should be 2 or higher.")
	}

	let matchIndex = -1
	for (const [i, item] of haystack.entries()) {
		if (item !== needle) {
			// Not the needle we're looking for
			continue
		}

		if (i + amount > haystack.length) {
			// Too close to the end of the haystack to make a match
			break
		}

		// Found the beginning of a possibly connected match

		// Take the next amount of items, and check if they are the same as needle
		if (!(haystack.slice(i, i + amount).every(sliceItem => sliceItem === needle))) {
			continue
		}

		// Ding, ding, ding! Match was found.
		matchIndex = i
		break
	}

	return matchIndex
}


const checkForWinner = rows => {
	for (const [i, row] of rows.entries()) {
		// Check for horizontal matches
		let column = findRepeatingPartOfArray(row, 1, 4)
		if (column < 0) {
			column = findRepeatingPartOfArray(row, 2, 4)
		}

		if (column >= 0) {
			return {
				start: [i, column],
				end: [i, column + 3]
			}
		}
	}

	// Check vertical
	for (let i = 0; i < rows[0].length; i++) {
		const column = rows.map(row => row[i])
		let rowIndex = findRepeatingPartOfArray(column, 1, 4)
		if (rowIndex < 0) {
			rowIndex = findRepeatingPartOfArray(column, 2, 4)
		}

		if (rowIndex >= 0) {
			return {
				start: [rowIndex, i],
				end: [rowIndex, i + 3]
			}
		}
	}

	// Check diagonal
	for (let r = 0; r <= rows.length - 4; r++) {
		const row = rows[r]
		for (let c = 0; c < row.length; c++) {
			let diagonalRight = []
			let diagonalLeft = []
			for (let s = 0; s < 4; s++) {
				if (c <= row.length - 4) {
					diagonalRight.push(rows[r + s][c + s])
				}
				if (c >= 3) {
					diagonalLeft.push(rows[r + s][c - s])
				}
			}

			let diagonalRightIndex = findRepeatingPartOfArray(diagonalRight, 1, 4)
			if (diagonalRightIndex < 0) {
				diagonalRightIndex = findRepeatingPartOfArray(diagonalRight, 2, 4)
			}
			
			if (diagonalRightIndex >= 0) {
				return {
					start: [r, c],
					end: [r + 3, c + 3]
				}
			}

			let diagonalLeftIndex = findRepeatingPartOfArray(diagonalLeft, 1, 4)
			if (diagonalLeftIndex < 0) {
				diagonalLeftIndex = findRepeatingPartOfArray(diagonalLeft, 2, 4)
			}

			if (diagonalLeftIndex >= 0) {
				return {
					start: [r, c],
					end: [r + 3, c - 3]
				}
			}
		}
	}

	return false
}

export default checkForWinner