import game from '../reducers/game'

export const cpuMakeAMove = rows => dispatch => {
	return fetch('/cpu-make-move',
	{
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(rows)
	})
		.then(response => {
			if (!response.ok) {
    			throw new Error('Network response was not ok');
    		}
			return response.json()
		})
		.then(data => {
			dispatch(game.actions.addChip(data.column))
		})
		.catch(error => {
			// To do: implement some graceful error handling
			console.error('Error:', error);
		});
}

