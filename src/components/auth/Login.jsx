import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {useAuth} from './useAuth';

export const Login = () => {

  const [user, setUser] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
    auth.login(user)
    navigate(redirectPath, { replace: true })
  }
  return (
     <>
      <label>
        Username: <input type='text' onChange={e => setUser(e.target.value)} />
      </label>{' '}
      
      <button onClick={handleLogin}>Login</button>
    </>
  )
}