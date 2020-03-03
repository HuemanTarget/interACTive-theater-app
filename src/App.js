import React, { useState, useEffect, useContext } from 'react'
import Firebase from './components/Firebase/firebase'
import Routes from './components/Routes'
import NavBar from './components/Navbar'
import './App.css'

// Create a context and set user: null
const userContext = React.createContext({
  user: null,
})

// Custom Session Hook !!! pass userContext to React useContext Hook
// https://reactjs.org/docs/hooks-reference.html#usecontext
export const useSession = () => {
  const { user } = useContext(userContext)
  return user
}

// Custom Auth Hook !!! set Auth state based on firebase.auth() state
// https://reactjs.org/docs/hooks-custom.html
export const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = Firebase.auth.currentUser
    return {
      initializing: !user,
      user,
    }
  })

  // onAuthStateChanged handler
  const onChange = user => {
    setState({ initializing: false, user })
  }

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = Firebase.auth.onAuthStateChanged(onChange)

    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])

  return state
}

const App = () => {
  // use custom Auth hook to get user
  const { initializing, user } = useAuth()

  if (initializing) {
    return <div>Loading...</div>
  }
  // Use Context.Provider to pass userContext down the tree
  return (
    <div>
      <userContext.Provider value={{ user }}>
        <NavBar />
        <div className='App'>
          <Routes currentUser={user} />
        </div>
      </userContext.Provider>
    </div>
  )
}

export default App
