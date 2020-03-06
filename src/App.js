import React, { useState, useEffect, useContext } from 'react'
import Firebase from './components/Firebase/firebase'
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
  const [state, setState] = useState(() => {
    const user = Firebase.auth.currentUser
    return {
      initializing: !user,
      user,
    }
  })

  
  const onChange = user => {
    setState({ initializing: false, user })
  }

  useEffect(() => {
    
    const unsubscribe = Firebase.auth.onAuthStateChanged(onChange)

    
    return () => unsubscribe()
  }, [])

  return state
}

const App = () => {
  
  const { initializing, user } = useAuth()

  if (initializing) {
    return <div>Loading...</div>
  }
  
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
