import React, { useState } from 'react'
import { Redirect, useLocation, useHistory } from 'react-router-dom'
import Firebase from '../../components/Firebase/firebase'

import { useSession } from '../../App'

const Login = () => {
  const user = useSession()
  const location = useLocation()
  const history = useHistory()
  const { from } = location.state || { from: { pathname: '/' } }
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(null)

  const handleChange = evt => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }

  const handleFormSubmit = async e => {
    const { email, password } = state
    e.preventDefault()
    try {
      await Firebase.doSignInWithEmailAndPassword(email, password)
      history.replace(from)
    } catch (error) {
      setError(error)
      setTimeout(() => {
        setError(null)
      }, 3000)
    }
  }
  if (user) {
    return <Redirect to='/playbill' />
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <input
            name='email'
            onChange={handleChange}
            value={state.email}
            placeholder='email'
          />
          <input
            name='password'
            onChange={handleChange}
            value={state.password}
            placeholder='password'
            type='password'
          />
          <button type='submit'>Login</button>
        </div>
      </form>
      {error && <div style={{ color: 'red' }}>{error.message}</div>}
    </div>
  )
}

export default Login
