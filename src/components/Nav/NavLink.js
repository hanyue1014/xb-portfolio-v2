import React from 'react'
import { Link } from 'react-scroll'

import classes from './styles/navlink.module.css'

function NavLink(props) {
  return (
    <Link
      spy={true}
      smooth={true}
      to={props.linksTo}
      className={classes.navLink}
      activeClass={classes.active}
    >
      <i className={`icofont-${props.iconName} ${classes.navIcon}`}></i>
      <p>{props.linksTo}</p>
    </Link>
  )
}

export default NavLink
