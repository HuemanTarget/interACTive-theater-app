import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Playbill from '../../pages/Playbill'
import QuestionsOne from '../../pages/QuestionsOne/QuestionOne'
import PlaybillTwoA from '../../pages/QuestionsTwo/PlaybillTwoA'
import PlaybillTwoB from '../../pages/QuestionsTwo/PlaybillTwoB'
import PlaybillTwoC from '../../pages/QuestionsTwo/PlaybillTwoC'
import QuestionsTwoA from '../../pages/QuestionsTwo/QuestionTwoA'
import QuestionsTwoB from '../../pages/QuestionsTwo/QuestionTwoB'
import QuestionsTwoC from '../../pages/QuestionsTwo/QuestionTwoC'
import PlaybillThreeAA from '../../pages/QuestionsThree/PlaybillThreeAA'
import PlaybillThreeAB from '../../pages/QuestionsThree/PlaybillThreeAB'
import PlaybillThreeAC from '../../pages/QuestionsThree/PlaybillThreeAC'
import QuestionsThreeA from '../../pages/QuestionsThree/QuestionThreeA'
import QuestionsThreeB from '../../pages/QuestionsThree/QuestionThreeB'
import QuestionsThreeC from '../../pages/QuestionsThree/QuestionThreeC'


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
      path='/playbill-two-a'
      render={() => <PlaybillTwoA doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/playbill-two-b'
      render={() => <PlaybillTwoB doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/playbill-two-c'
      render={() => <PlaybillTwoC doSetCurrentUser={doSetCurrentUser} />}
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
      path='/playbill-three-aa'
      render={() => <PlaybillThreeAA doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/playbill-three-ab'
      render={() => <PlaybillThreeAB doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/playbill-three-ac'
      render={() => <PlaybillThreeAC doSetCurrentUser={doSetCurrentUser} />}
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
  </Switch>
)
