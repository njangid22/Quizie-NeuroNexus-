import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import QuizResult from './views/quiz-result'
import QuizLink from './views/quiz-link'
import TeacherHome from './views/teacher-home'
import About from './views/about'
import TeacherLogin from './views/teacher-login'
import StudentQuiz from './views/student-quiz'
import MakeQuiz from './views/make-quiz'
import Home from './views/home'
import IndividualAnswers from './views/individual-answers'
import QuizSubmitted from './views/quiz-submitted'
import StudentLogin from './views/student-login'
import Register from './views/register'
import GiveQuiz from './views/give-quiz'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={QuizResult} exact path="/quiz-result" />
        <Route component={QuizLink} exact path="/quiz-link" />
        <Route component={TeacherHome} exact path="/teacher-home" />
        <Route component={About} exact path="/about" />
        <Route component={TeacherLogin} exact path="/teacher-login" />
        <Route component={StudentQuiz} exact path="/student-quiz" />
        <Route component={MakeQuiz} exact path="/make-quiz" />
        <Route component={Home} exact path="/" />
        <Route component={IndividualAnswers} exact path="/individual-answers" />
        <Route component={QuizSubmitted} exact path="/quiz-submitted" />
        <Route component={StudentLogin} exact path="/student-login" />
        <Route component={Register} exact path="/register" />
        <Route component={GiveQuiz} exact path="/give-quiz" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
