import React from 'react'

import classes from './styles/sections.module.css'
import landClasses from './styles/land.module.css'

function Land() {
  return (
    <div className={`${classes.sectionContents} ${landClasses.land}`}>
      <h1>Hi, I'm</h1>
      <h1 className={landClasses.highlight}>Hanyue</h1>
      <h1>I am a</h1>
      <h1 className={landClasses.highlight}>Student / Developer</h1>
      <h1>And I am from</h1>
      <h1 className={landClasses.highlight}>Penang, Malaysia</h1>
    </div>
  )
}

export default Land
