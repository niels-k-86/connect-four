import './Nav.css'
import React, { memo } from 'react'
import classNames from 'classnames'

const Nav = props => {
	const { className, items, onItemClick } = props
    const classNameComposed = classNames(['nav', className])
        
    return (
        <nav className={classNameComposed}>
            <ul className="nav-list">
				{ items.map(item => {
					const { label, id } = item
					return (
						<li className="nav-list-item" key={id}>
							<a href={`#${id}`} onClick={ e => { e.preventDefault(); onItemClick(item) } }>
								{label}
							</a>
						</li>
					)
				}) }
			</ul>
        </nav>
    )
}


export default memo(Nav)