import './Board.css'
import React, { memo } from 'react'
import classNames from 'classnames'
import Column from '../containers/Column'

const Board = props => {
	const { className, columns, player } = props
	const classNameComposed = classNames(['board', `player-${player}-turn`, className])
	
	return (
		<div className="board-wrapper">
			<div className={classNameComposed}>
				{ columns.map((_, i) => <Column key={i} columnNumber={i} /> )}
			</div>
		</div>
	)
}


export default memo(Board)