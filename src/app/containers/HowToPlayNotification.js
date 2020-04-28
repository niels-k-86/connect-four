import React from 'react'
import { connect } from 'react-redux'
import Notification from '../components/Notification'
import game from '../reducers/game'

const mapStateToProps = (state, ownProps) => {
	return {
		header: "How to play Connect Four",
		content: (
			<>
				<p>The goal of this game is to connect four chips of the same color. This can be done horizontally, vertically or diagonally.</p>
				<p>Players take turns adding chips from the top of the board. The player who connects four chips of their own color first, wins the game.</p>
			</>
		),
		buttonCaption: "Close"
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onButtonClick: () => {
			dispatch(game.actions.setShowHowToPlay(false))
		}
	}
}

const HowToPlayNotification = connect(
	mapStateToProps,
	mapDispatchToProps
)(Notification)

export default HowToPlayNotification