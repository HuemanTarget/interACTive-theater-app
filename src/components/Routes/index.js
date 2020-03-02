import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Playbill from '../../pages/Playbill'
import QuestionsOne from '../../pages/QuestionsOne/QuestionOne'
import QuestionsTwoA from '../../pages/QuestionsTwo/QuestionTwoA'
import QuestionsTwoB from '../../pages/QuestionsTwo/QuestionTwoB'
import QuestionsTwoC from '../../pages/QuestionsTwo/QuestionTwoC'
import QuestionsTwoD from '../../pages/QuestionsTwo/QuestionTwoD'
import QuestionsTwoE from '../../pages/QuestionsTwo/QuestionTwoE'

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
      path='/playbill'
      render={() => <Playbill doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-one'
      render={() => <QuestionsOne doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-two-a'
      render={() => <QuestionsTwoA doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-two-b'
      render={() => <QuestionsTwoB doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-two-c'
      render={() => <QuestionsTwoC doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-two-d'
      render={() => <QuestionsTwoD doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-two-e'
      render={() => <QuestionsTwoE doSetCurrentUser={doSetCurrentUser} />}
    />
  </Switch>
)
