import React from 'react'

import classes from './styles/sections.module.css'

/* A wrapper for all different sections out there in their individual folders */
function Section(props) {
  return (
    <div className={classes.sections} id={props.id}>
      {props.children}
    </div>
  )
}

export default Section
