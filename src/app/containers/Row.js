import { connect } from 'react-redux'
import RowComponent from '../components/Row'
import game from '../reducers/game'

const mapStateToProps = (state, ownProps) => {
	const { rowNumber } = ownProps
	const chips = state.game.rows[rowNumber]
	const { player, winner } = state.game
	return {
		chips,
		player,
		winner
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		dispatch
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { player, winner } = stateProps
	const { dispatch } = dispatchProps
	return Object.assign({}, ownProps, stateProps, dispatchProps, {
        onColumnClick: index => {
			// Disable clicks when it's the CPU's turn
			if (player === 1 && !winner) {
				dispatch(game.actions.addChip(index))
			}
		}
	})
}

const Row = connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(RowComponent)

export default Row