import { connect } from 'react-redux'
import PlayersComponent from '../components/Players'

const mapStateToProps = (state, ownProps) => {
	return {
		currentPlayer: state.game.player
	}
}

const Players = connect(
	mapStateToProps
)(PlayersComponent)

export default Players