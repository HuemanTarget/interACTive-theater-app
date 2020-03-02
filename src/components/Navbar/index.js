import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import Firebase from '../Firebase/firebase'
import { useSession } from '../../App'

const Navbar = ({ isLoggedIn, currentUser, doSetCurrentUser }) => {
  const user = useSession()

  const logoutUser = async () => {
    try {
      await Firebase.doSignOut()
      doSetCurrentUser({})
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <nav>
      {isLoggedIn ? (
        <>
          <NavLink exact to='/playbill' style={{ margin: '0px 10px 0px 10px' }}>
            Playbill
          </NavLink>
          <span>
          <NavLink exact to='/questions-one' style={{ margin: '0px 10px 0px 10px' }}>
            Questions
          </NavLink>
          <span></span>
            <NavLink
              to='/login'
              children='Logout'
              onClick={logoutUser}
              style={{ cursor: 'pointer', margin: '0px 10px 0px 10px' }}
            />
          </span>
          <span>{user && user.email}</span>
        </>
      ) : (
        <>
          <NavLink exact to='/' style={{ margin: '0px 10px 0px 10px' }}>
            Home
          </NavLink>
          <NavLink
            to='/login'
            children='Login'
            style={{ margin: '0px 10px 0px 10px' }}
          />
        </>
      )}
    </nav>
  )
}

export default Navbar
