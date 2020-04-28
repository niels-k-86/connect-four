import "./Column.css"
import React, { memo } from 'react'
import classNames from 'classnames'
import Chip from './Chip'

const Column = props => {
	const { className, chips, onColumnClick } = props
    const classNameComposed = classNames(['column', className])
        
    return (
        <div className={classNameComposed} onClick={e => { e.preventDefault(); onColumnClick() }}>
            { chips.map((chip, i) => <Chip player={chip} key={i} /> )}
        </div>
    )
}

export default memo(Column)