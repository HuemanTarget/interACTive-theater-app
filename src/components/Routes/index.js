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
import QuestionsThreeA from '../../pages/QuestionsThree/QuestionThreeA'
import QuestionsThreeB from '../../pages/QuestionsThree/QuestionThreeB'
import QuestionsThreeC from '../../pages/QuestionsThree/QuestionThreeC'
import QuestionsThreeD from '../../pages/QuestionsThree/QuestionThreeD'
import QuestionsThreeE from '../../pages/QuestionsThree/QuestionThreeE'

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
    <Route
      exact
      path='/questions-three-a'
      render={() => <QuestionsThreeA doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-three-b'
      render={() => <QuestionsThreeB doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-three-c'
      render={() => <QuestionsThreeC doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-three-d'
      render={() => <QuestionsThreeD doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-three-e'
      render={() => <QuestionsThreeE doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-four-a'
      render={() => <QuestionsThreeA doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-four-b'
      render={() => <QuestionsThreeB doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-four-c'
      render={() => <QuestionsThreeC doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-four-d'
      render={() => <QuestionsThreeD doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-four-e'
      render={() => <QuestionsThreeE doSetCurrentUser={doSetCurrentUser} />}
    />
  </Switch>
)
