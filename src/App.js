import React, { useState, useEffect, useContext } from 'react'
import firebase from 'firebase'
import Routes from './components/Routes'
import NavBar from './components/Navbar'
import './App.css'

const userContext = React.createContext({
  user: null,
})

export const useSession = () => {
  const { user } = useContext(userContext)
  return user
}

export const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user = firebase.auth().currentUser
    return {
      initializing: !user,
      user,
    }
  })

  function onChange(user) {
    console.log('authstatechanged', user)
    setState({ initializing: false, user })
  }

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange)

    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])

  return state
}

const App = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const { initializing, user } = useAuth()

  const doSetCurrentUser = currentUser => {
    console.log(currentUser)
    setCurrentUser(currentUser)
    let isLoggedIn = currentUser !== {} ? true : false
    setisLoggedIn(isLoggedIn)
  }

  if (initializing) {
    return <div>Loading</div>
  }
  return (
    <div>
      <userContext.Provider value={{ user }}>
        <NavBar
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          doSetCurrentUser={doSetCurrentUser}
        />
        <div className='App'>
          <Routes doSetCurrentUser={doSetCurrentUser} />
        </div>
      </userContext.Provider>
    </div>
  )
}

export default App
