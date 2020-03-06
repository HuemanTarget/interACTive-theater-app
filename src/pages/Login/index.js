import React, { useState } from 'react'
import { Redirect, useLocation, useHistory } from 'react-router-dom'
// import { PasswordForgetLink } from '../../pages/PasswordForgetForm'
import Firebase from '../../components/Firebase/firebase'

import { useSession } from '../../App'

import './style.css'

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
      history.push('/playbill')
    } catch (error) {
      setError(error)
      setTimeout(() => {
        setError(null)
      }, 3000)
    }
  }
  if (user) {
    return <Redirect exact to='/playbill' />;
  }
  return (
    <div className="container">
    <section id="content">
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input type="text" name="email" placeholder="Email" onChange={handleChange} value={state.email} required="" id="username" />
        </div>
        <div>
          <input type="password" placeholder="Password" name='password' onChange={handleChange} value={state.password} required="" id="password" />
        </div>
        <div>
          <input type="submit" value="Log in" />
          <a href="/password-forget">Lost your password?</a>
          <a href="/signup">Sign Up</a>
        </div>
        
      </form>
      {error && <div style={{ color: 'red' }}>{error.message}</div>}
      </section>
    </div>
  )
}

export default Login




            


            