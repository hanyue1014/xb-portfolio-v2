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
  const [active, setActive] = useState('none')

  const updateLink = (link) => {
    window.console.log(link)
    setActive(link)
    window.location.href = `#${link}`
  }

  return (
    <div>
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

export default NavLinkContainer
