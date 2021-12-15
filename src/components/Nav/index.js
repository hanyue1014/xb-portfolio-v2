import React from 'react'

import Profile from './Profile'
import NavLinkContainer from './NavLinkContainer'

import classes from './styles/index.module.css'

function Nav() {
  return (
    <div className={classes.nav}>
      <Profile />
      <NavLinkContainer />
    </div>
  )
}

export default Nav
