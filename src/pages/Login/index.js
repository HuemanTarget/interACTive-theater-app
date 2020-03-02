import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Firebase from '../../components/Firebase/firebase'

class Login extends Component {
  state = {
    email: '',
    password: '',
    isAuth: false,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleFormSubmit = async e => {
    const { email, password } = this.state
    e.preventDefault()
    try {
      await Firebase.doSignInWithEmailAndPassword(email, password)
      this.props.doSetCurrentUser({
        email,
      })
      this.setState({
        isAuth: true,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { email, password, isAuth } = this.state
    if (isAuth) {
      return <Redirect to='/playbill' />
    }
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
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
              onChange={this.handleChange}
              value={email}
              placeholder='email'
            />
            <input
              name='password'
              onChange={this.handleChange}
              value={password}
              placeholder='password'
              type='password'
            />
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
