import { connect } from 'react-redux'
import Notification from '../components/Notification'
import game from '../reducers/game'

const mapStateToProps = (state, ownProps) => {
	const { winner } = state.game
	return {
		header: `Yay, player ${winner} is the winner!`,
		buttonCaption: "Restart game"
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onButtonClick: () => {
			dispatch(game.actions.restartGame())
		}
	}
}

const WinNotification = connect(
	mapStateToProps,
	mapDispatchToProps
)(Notification)

export default WinNotification