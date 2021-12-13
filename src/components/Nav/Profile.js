import React from 'react'

import pfp from '../../res/pfp.jpg'
import classes from './styles/profile.module.css'

function Profile() {
  return (
    <div className={classes.profile}>
      <img className={classes.pfp} src={pfp} alt="Profile Pic" />
      <h1>Hanyue</h1>
    </div>
  )
}

export default Profile
