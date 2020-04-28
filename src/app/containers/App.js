import { connect } from 'react-redux'
import AppComponent from '../components/App'

const mapStateToProps = (state, ownProps) => {
	return {
		winner: state.game.winner,
		showHowToPlay: state.game.showHowToPlay
	}
}

const App = connect(
	mapStateToProps
)(AppComponent)

export default App