import React from 'react'

import classes from './styles/navlink.module.css'

function NavLink(props) {
  return (
    <div className={classes.navLink}>
      <i className={`icofont-${props.iconName} ${classes.navIcon}`}></i>
    </div>
  )
}

export default NavLink
