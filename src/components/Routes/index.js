import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'
import PasswordForgetForm from '../../pages/PasswordForgetForm'
import PrivateRoute from './PrivateRoute'
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
import PlaybillThreeBA from '../../pages/QuestionsThree/PlaybillThreeBA'
import PlaybillThreeBB from '../../pages/QuestionsThree/PlaybillThreeBB'
import PlaybillThreeBC from '../../pages/QuestionsThree/PlaybillThreeBC'
import PlaybillThreeCA from '../../pages/QuestionsThree/PlaybillThreeCA'
import PlaybillThreeCB from '../../pages/QuestionsThree/PlaybillThreeCB'
import PlaybillThreeCC from '../../pages/QuestionsThree/PlaybillThreeCC'
import QuestionsThreeAA from '../../pages/QuestionsThree/QuestionThreeAA'
import QuestionsThreeAB from '../../pages/QuestionsThree/QuestionThreeAB'
import QuestionsThreeAC from '../../pages/QuestionsThree/QuestionThreeAC'
import PlaybillFourAAA from '../../pages/Finale/PlaybillFourAAA'
import PlaybillFourAAB from '../../pages/Finale/PlaybillFourAAB'
import PlaybillFourAAC from '../../pages/Finale/PlaybillFourAAC'
import ResultsAAA from '../../pages/Results/ResultsAAA'
import ResultsAAB from '../../pages/Results/ResultsAAB'
import ResultsAAC from '../../pages/Results/ResultsAAC'
import PlaybillFourABA from '../../pages/Finale/PlaybillFourABA'
import PlaybillFourABB from '../../pages/Finale/PlaybillFourABB'
import PlaybillFourABC from '../../pages/Finale/PlaybillFourABC'
import ResultsABA from '../../pages/Results/ResultsABA'
import ResultsABB from '../../pages/Results/ResultsABB'
import ResultsABC from '../../pages/Results/ResultsABC'
import PlaybillFourACA from '../../pages/Finale/PlaybillFourACA'
import PlaybillFourACB from '../../pages/Finale/PlaybillFourACB'
import PlaybillFourACC from '../../pages/Finale/PlaybillFourACC'
import ResultsACA from '../../pages/Results/ResultsACA'
import ResultsACB from '../../pages/Results/ResultsACB'
import ResultsACC from '../../pages/Results/ResultsACC'
import QuestionsThreeBA from '../../pages/QuestionsThree/QuestionThreeBA'
import QuestionsThreeBB from '../../pages/QuestionsThree/QuestionThreeBB'
import QuestionsThreeBC from '../../pages/QuestionsThree/QuestionThreeBC'
import PlaybillFourBAA from '../../pages/Finale/PlaybillFourBAA'
import PlaybillFourBAB from '../../pages/Finale/PlaybillFourBAB'
import PlaybillFourBAC from '../../pages/Finale/PlaybillFourBAC'
import ResultsBAA from '../../pages/Results/ResultsBAA'
import ResultsBAB from '../../pages/Results/ResultsBAB'
import ResultsBAC from '../../pages/Results/ResultsBAC'
import PlaybillFourBBA from '../../pages/Finale/PlaybillFourBBA'
import PlaybillFourBBB from '../../pages/Finale/PlaybillFourBBB'
import PlaybillFourBBC from '../../pages/Finale/PlaybillFourBBC'
import ResultsBBA from '../../pages/Results/ResultsBBA'
import ResultsBBB from '../../pages/Results/ResultsBBB'
import ResultsBBC from '../../pages/Results/ResultsBBC'
import PlaybillFourBCA from '../../pages/Finale/PlaybillFourBCA'
import PlaybillFourBCB from '../../pages/Finale/PlaybillFourBCB'
import PlaybillFourBCC from '../../pages/Finale/PlaybillFourBCC'
import ResultsBCA from '../../pages/Results/ResultsBCA'
import ResultsBCB from '../../pages/Results/ResultsBCB'
import ResultsBCC from '../../pages/Results/ResultsBCC'
import QuestionsThreeCA from '../../pages/QuestionsThree/QuestionThreeCA'
import QuestionsThreeCB from '../../pages/QuestionsThree/QuestionThreeCB'
import QuestionsThreeCC from '../../pages/QuestionsThree/QuestionThreeCC'
import PlaybillFourCAA from '../../pages/Finale/PlaybillFourCAA'
import PlaybillFourCAB from '../../pages/Finale/PlaybillFourCAB'
import PlaybillFourCAC from '../../pages/Finale/PlaybillFourCAC'
import ResultsCAA from '../../pages/Results/ResultsCAA'
import ResultsCAB from '../../pages/Results/ResultsCAB'
import ResultsCAC from '../../pages/Results/ResultsCAC'
import PlaybillFourCBA from '../../pages/Finale/PlaybillFourCBA'
import PlaybillFourCBB from '../../pages/Finale/PlaybillFourCBB'
import PlaybillFourCBC from '../../pages/Finale/PlaybillFourCBC'
import ResultsCBA from '../../pages/Results/ResultsCBA'
import ResultsCBB from '../../pages/Results/ResultsCBB'
import ResultsCBC from '../../pages/Results/ResultsCBC'
import PlaybillFourCCA from '../../pages/Finale/PlaybillFourCCA'
import PlaybillFourCCB from '../../pages/Finale/PlaybillFourCCB'
import PlaybillFourCCC from '../../pages/Finale/PlaybillFourCCC'
import ResultsCCA from '../../pages/Results/ResultsCCA'
import ResultsCCB from '../../pages/Results/ResultsCCB'
import ResultsCCC from '../../pages/Results/ResultsCCC'


export default ({ doSetCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route
      exact
      path='/login'
      component={Login} 
    />
    <Route 
      exact 
      path='/signup' 
      render={props => <Signup {...props} />} 
    />
    <Route 
      exact 
      path='/password-forget' 
      component={PasswordForgetForm} 
    />
    <PrivateRoute exact path='/playbill'>
      <Playbill doSetCurrentUser={doSetCurrentUser} />
    </PrivateRoute>
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
      path='/playbill-three-ba'
      render={() => <PlaybillThreeBA doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/playbill-three-bb'
      render={() => <PlaybillThreeBB doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/playbill-three-bc'
      render={() => <PlaybillThreeBC doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/playbill-three-ca'
      render={() => <PlaybillThreeCA doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/playbill-three-cb'
      render={() => <PlaybillThreeCB doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/playbill-three-cc'
      render={() => <PlaybillThreeCC doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-three-aa'
      render={() => <QuestionsThreeAA doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-three-ab'
      render={() => <QuestionsThreeAB doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-three-ac'
      render={() => <QuestionsThreeAC doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route exact path='/playbill-four-aaa'>
      <PlaybillFourAAA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-aab'>
      <PlaybillFourAAB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-aac'>
      <PlaybillFourAAC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-aaa'>
      <ResultsAAA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-aab'>
      <ResultsAAB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-aac'>
      <ResultsAAC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-aba'>
      <PlaybillFourABA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-abb'>
      <PlaybillFourABB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-abc'>
      <PlaybillFourABC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-aba'>
      <ResultsABA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-abb'>
      <ResultsABB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-abc'>
      <ResultsABC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-aca'>
      <PlaybillFourACA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-acb'>
      <PlaybillFourACB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-acc'>
      <PlaybillFourACC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-aca'>
      <ResultsACA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-acb'>
      <ResultsACB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-acc'>
      <ResultsACC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route
      exact
      path='/questions-three-ba'
      render={() => <QuestionsThreeBA doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-three-bb'
      render={() => <QuestionsThreeBB doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-three-bc'
      render={() => <QuestionsThreeBC doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route exact path='/playbill-four-baa'>
      <PlaybillFourBAA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-bab'>
      <PlaybillFourBAB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-bac'>
      <PlaybillFourBAC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-baa'>
      <ResultsBAA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-bab'>
      <ResultsBAB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-bac'>
      <ResultsBAC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-bba'>
      <PlaybillFourBBA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-bbb'>
      <PlaybillFourBBB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-bbc'>
      <PlaybillFourBBC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-bba'>
      <ResultsBBA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-bbb'>
      <ResultsBBB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-bbc'>
      <ResultsBBC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-bca'>
      <PlaybillFourBCA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-bcb'>
      <PlaybillFourBCB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-bcc'>
      <PlaybillFourBCC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-bca'>
      <ResultsBCA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-bcb'>
      <ResultsBCB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-bcc'>
      <ResultsBCC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route
      exact
      path='/questions-three-ca'
      render={() => <QuestionsThreeCA doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-three-cb'
      render={() => <QuestionsThreeCB doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route
      exact
      path='/questions-three-cc'
      render={() => <QuestionsThreeCC doSetCurrentUser={doSetCurrentUser} />}
    />
    <Route exact path='/playbill-four-caa'>
      <PlaybillFourCAA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-cab'>
      <PlaybillFourCAB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-cac'>
      <PlaybillFourCAC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-caa'>
      <ResultsCAA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-cab'>
      <ResultsCAB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-cac'>
      <ResultsCAC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-cba'>
      <PlaybillFourCBA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-cbb'>
      <PlaybillFourCBB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-cbc'>
      <PlaybillFourCBC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-cba'>
      <ResultsCBA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-cbb'>
      <ResultsCBB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-cbc'>
      <ResultsCBC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-cca'>
      <PlaybillFourCCA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-ccb'>
      <PlaybillFourCCB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/playbill-four-ccc'>
      <PlaybillFourCCC doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-cca'>
      <ResultsCCA doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-ccb'>
      <ResultsCCB doSetCurrentUser={doSetCurrentUser} />
    </Route>
    <Route exact path='/results-ccc'>
      <ResultsCCC doSetCurrentUser={doSetCurrentUser} />
    </Route>
  </Switch>
)
