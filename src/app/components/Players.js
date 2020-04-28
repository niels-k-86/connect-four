import './Players.css'
import React, { memo } from 'react'
import classNames from 'classnames'

const Players = props => {
	const { className, currentPlayer } = props
    const classNameComposed = classNames(['players', className])
        
    return (
        <div className={classNameComposed}>
            <div className={classNames(['player', 'player-1', {'player--current': currentPlayer === 1}])}>Player 1 (user)</div>
			<div className={classNames(['player', 'player-2', {'player--current': currentPlayer === 2}])}>Player 2 (cpu)</div>
        </div>
    )
}


export default memo(Players)