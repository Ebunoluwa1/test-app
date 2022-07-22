import React, { useState } from 'react'
import { StyledMain } from './style'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth'

const Main = () => {

  const navigate = useNavigate()
  const auth = useAuth()
  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <StyledMain>
      <div className='main__header'>
          <h2>Home</h2> <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, non voluptatem dolorem illum maxime corrupti amet doloremque reprehenderit reiciendis eum inventore earum tempora possimus et debitis consequuntur deserunt nobis cumque! Vero, non voluptatem dolorem illum maxime corrupti amet doloremque reprehenderit reiciendis eum inventore earum tempora possimus et debitis consequuntur deserunt nobis cumque!</p>
      </div>
      <div className='main__chat'>
        <h3> This app is authenticated to see the Components, go to the dashboard  and follow the instructions</h3>
        <p> The logout button will prevent your access to the component</p>
      </div>
      <br />
      <button onClick={handleLogout}> Logout</button>
    </StyledMain>
  )
}

export default Main