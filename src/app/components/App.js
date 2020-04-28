import './App.css'
import React, { memo } from 'react'
import Players from '../containers/Players'
import Board from '../containers/Board'
import FooterNav from '../containers/FooterNav'
import WinNotification from '../containers/WinNotification'
import HowToPlayNotification from '../containers/HowToPlayNotification'

const App = props => {
	const { winner, showHowToPlay } = props
        
    return (
        <div className="app">
            <header className="app-header">
				<img alt="Aon" src="/assets/logo.png" className="logo" />
				<Players />
			</header>
			<Board />
			<footer className="app-footer">
				<div className="app-footer-nav">
					<FooterNav />
				</div>
				<div className="app-footer-meta">
					<p>AON exercise by Niels Kreijveld</p>
				</div>
			</footer>
			{ winner && <WinNotification /> }
			{ showHowToPlay && <HowToPlayNotification /> }
        </div>
    )
}

export default memo(App)