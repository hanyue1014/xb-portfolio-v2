import React, {useState} from 'react'

import NavLink from './NavLink'

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

function NavLinkContainer() {
  return (
    <div>
      {
        ICONS.map((icon, index) => (
          <NavLink 
            key={index} 
            iconName={icon.fontClassName} 
            linksTo={icon.linksTo} 
          />
        ))
      }
    </div>
  )
}

export default NavLinkContainer
