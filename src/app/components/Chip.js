import './Chip.css'
import React, { memo } from 'react'
import classNames from 'classnames'

const Chip = props => {
	const { className, player } = props
	const classNameComposed = classNames(['chip', 'chip--player-' + player, className])

	
	return (
		<div className={classNameComposed} />
	)
}


export default memo(Chip)