const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

// app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.json())

app.post('/cpu-make-move', function (req, res) {
	const { body: rows } = req

	// Setting a timeout to simulate a bit of time between request and response
	setTimeout(() => {
		return res.json({
			status: 200,
			column: findSuitableColumn(rows)
		})
	}, 1000)
})

app.listen(process.env.PORT || 8080)



const findSuitableColumn = rows => {
	return Math.floor(Math.random() * rows[0].length)
}