import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import Firebase from '../../components/Firebase/firebase'

class PasswordForgetForm extends Component {
  state = {
    email: '',
    error: null,
  }

  onSubmit = async e => {
    e.preventDefault()
    try {
      await Firebase.doPasswordReset(this.state.email)
    } catch (error) {
      console.log(error)
    }
    return <Redirect to='/login' />
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div className="container">
      <section id="content">
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          name='email'
          value={this.state.email}
          onChange={this.onChange}
          placeholder='Email Address'
        />
        <input type="submit" value="Reset" />
      </form>
      </section>
      </div>
    )
  }
}

export const PasswordForgetLink = () => (
  <p>
    <Link to='/password-forget'>Forgot Password</Link>
  </p>
)

export default PasswordForgetForm
