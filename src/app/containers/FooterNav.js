import { connect } from 'react-redux'
import Nav from '../components/Nav'
import game from '../reducers/game'

const mapStateToProps = (state, ownProps) => {
	return {
		items: [{
			id: 'info',
			label: "How to play"
		}, {
			id: 'restart',
			label: "Restart game"
		}]
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onItemClick: item => {
			switch (item.id) {
				case 'info':
					dispatch(game.actions.setShowHowToPlay(true))
					break;
				case 'restart':
					dispatch(game.actions.restartGame())
					break;
				default:
					break;
			}
		}
	}
}

const FooterNav = connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav)

export default FooterNav