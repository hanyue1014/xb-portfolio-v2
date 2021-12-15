import React from 'react'

import classes from './styles/navlink.module.css'

function NavLink(props) {
  return (
    <div 
      className={`${classes.navLink} ${props.active ? classes.active : ''}`} 
      onClick={() => props.onClick(props.linksTo)}
    >
      <i className={`icofont-${props.iconName} ${classes.navIcon}`}></i>
      <p>{props.linksTo}</p>
    </div>
  )
}

export default NavLink
