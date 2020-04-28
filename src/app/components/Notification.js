import './Notification.css'
import React, { memo } from 'react'
import classNames from 'classnames'

const Notification = props => {
	const { className, header, content, onButtonClick, buttonCaption } = props
    const classNameComposed = classNames(['notification', className])
        
    return (
		<div className="notification-wrapper">
        	<div className={classNameComposed}>
				{ header && <h2>{ header }</h2> }
				{ content }
				{ onButtonClick && <a onClick={e => { e.preventDefault(); onButtonClick()}} className="button" href="#notification">{ buttonCaption }</a> }
			</div>
        </div>
    )
}


export default memo(Notification)