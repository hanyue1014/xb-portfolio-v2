import React from 'react'

import Profile from './Profile'
import NavLink from './NavLink'

import classes from './styles/index.module.css'

const ICONS = [
  {
    fontClassName: 'home',
    linksTo: 'Home'
  },
  {
    fontClassName: 'code',
    linksTo: 'Projects'
  },
  {
    fontClassName: 'info-circle',
    linksTo: 'About'
  },
  {
    fontClassName: 'phone',
    linksTo: 'Contact'
  }
]

function index() {
  return (
    <div className={classes.nav}>
      <Profile />
      {ICONS.map((icon, index) => (<NavLink key={index} iconName={icon.fontClassName}/>))}
    </div>
  )
}

export default index
