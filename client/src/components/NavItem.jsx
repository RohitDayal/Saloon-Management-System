import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = (props) => {
  return (
    <div className='nav-item'>
    <Link to= {props.to} >{props.name}</Link>
    </div>
  )
}

export default NavItem