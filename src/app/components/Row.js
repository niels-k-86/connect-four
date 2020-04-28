import "./Row.css"
import React, { memo } from 'react'
import classNames from 'classnames'
import Chip from './Chip'

const Row = props => {
	const { className, chips, onColumnClick } = props
    const classNameComposed = classNames(['row', className])
        
    return (
        <div className={classNameComposed}>
            { chips.map((chip, i) => <Chip player={chip} key={i} onClick={e => { e.preventDefault(); onColumnClick(i) }} /> )}
        </div>
    )
}

export default memo(Row)