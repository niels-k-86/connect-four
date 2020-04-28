import { connect } from 'react-redux'
import BoardComponent from '../components/Board'
import getColumns from '../selectors/columns'

const mapStateToProps = (state, ownProps) => {
	const { player } = state.game
	const columns = getColumns(state)
	return {
		columns,
		player
	}
}

const Board = connect(
	mapStateToProps
)(BoardComponent)

export default Board