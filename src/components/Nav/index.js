import React, { useState } from 'react'

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

function Nav() {
  const [active, setActive] = useState('none')

  const updateLink = (link) => {
    window.console.log(link)
    setActive(link)
    window.location.href = `#${link}`
  }

  return (
    <div className={classes.nav}>
      <Profile />
      {
        ICONS.map((icon, index) => (
          <NavLink 
            key={index} 
            iconName={icon.fontClassName} 
            linksTo={icon.linksTo} 
            active={active === icon.linksTo} 
            onClick={updateLink}/>
        ))
      }
    </div>
  )
}

export default Nav
