import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'
import Playbill from '../../pages/Playbill'
import QuestionsOne from '../../pages/QuestionsOne/QuestionOne'

export default ({ doSetCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route
      exact
      path='/login'
      render={() => <Login doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/signup'
      render={props => (
        <Signup {...props} doSetCurrentUser={doSetCurrentUser} />
      )}
    />
    <Route
      exact
      path='/playbill'
      render={() => <Playbill doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-one'
      render={() => <QuestionsOne doSetCurrentUser={doSetCurrentUser} />}
    />
  </Switch>
)
