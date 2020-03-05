import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import Firebase from '../Firebase/firebase'
import { useSession } from '../../App'
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const user = useSession()
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const logoutUser = async () => {
    try {
      await Firebase.doSignOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className='header'>
      <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
      <nav className='nav'>
        {user ? (
          <>
            <NavLink exact to='/playbill' style={{ margin: '0px 10px 0px 10px' }}>
              Playbill
            </NavLink>
            {/* <NavLink exact to='/questions-one' style={{ margin: '0px 10px 0px 10px' }}>
              Questions
            </NavLink> */}
            <span>
              <NavLink
                to='/login'
                children='Logout'
                onClick={logoutUser}
                style={{ cursor: 'pointer', margin: '0px 10px 0px 10px' }}
              />
            </span>
            <span className='name'>{user && user.email}</span>
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
            <NavLink
              to='/signup'
              children='Signup'
              style={{ margin: '0px 10px 0px 10px' }}
            />
          </>
        )}
      </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>
  )
}

export default Navbar
