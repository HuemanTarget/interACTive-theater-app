import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Playbill from '../../pages/Playbill'
import QuestionsOne from '../../pages/QuestionsOne/QuestionOne'
import QuestionsTwoA from '../../pages/QuestionsTwo/QuestionTwoA'
import PlaybillTwoA from '../../pages/QuestionsTwo/PlaybillTwoA'
import PlaybillTwoB from '../../pages/QuestionsTwo/PlaybillTwoB'
import PlaybillTwoC from '../../pages/QuestionsTwo/PlaybillTwoC'
import QuestionsTwoB from '../../pages/QuestionsTwo/QuestionTwoB'
import QuestionsTwoC from '../../pages/QuestionsTwo/QuestionTwoC'
import QuestionsThreeA from '../../pages/QuestionsThree/QuestionThreeA'
import QuestionsThreeB from '../../pages/QuestionsThree/QuestionThreeB'
import QuestionsThreeC from '../../pages/QuestionsThree/QuestionThreeC'
import QuestionsThreeD from '../../pages/QuestionsThree/QuestionThreeD'
import QuestionsThreeE from '../../pages/QuestionsThree/QuestionThreeE'
import QuestionsFourA from '../../pages/QuestionsFour/QuestionFourA'
import QuestionsFourB from '../../pages/QuestionsFour/QuestionFourB'
import QuestionsFourC from '../../pages/QuestionsFour/QuestionFourC'
import QuestionsFourD from '../../pages/QuestionsFour/QuestionFourD'
import QuestionsFourE from '../../pages/QuestionsFour/QuestionFourE'

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
      render={() => <QuestionsFourA doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-four-b'
      render={() => <QuestionsFourB doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-four-c'
      render={() => <QuestionsFourC doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-four-d'
      render={() => <QuestionsFourD doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-four-e'
      render={() => <QuestionsFourE doSetCurrentUser={doSetCurrentUser} />}
    />
  </Switch>
)
