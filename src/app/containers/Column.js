import { connect } from 'react-redux'
import ColumnComponent from '../components/Column'
import game from '../reducers/game'
import getColumns from '../selectors/columns'

const mapStateToProps = (state, ownProps) => {
	const { columnNumber } = ownProps
	const chips = getColumns(state)[columnNumber]
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
	const { columnNumber } = ownProps
	return Object.assign({}, ownProps, stateProps, dispatchProps, {
        onColumnClick: () => {
			// Disable clicks when it's the CPU's turn
			if (player === 1 && !winner) {
				dispatch(game.actions.addChip(columnNumber))
			}
		}
	})
}

const Column = connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(ColumnComponent)

export default Column