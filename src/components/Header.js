import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAddTask }) => {
    const location = useLocation()
  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' && <Button onClick={onAdd} color={showAddTask ? 'blue' : 'green'} text={showAddTask ? 'close' : 'Add Task'} />}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototype = {
    title: PropTypes.string,
}

export default Header