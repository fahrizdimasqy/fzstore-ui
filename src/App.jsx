// import logo from "./logo.svg";
import './App.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import 'upkit/dist/style.min.css'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />{' '}
          <Route path="/login" component={Login} />{' '}
          <Route path="/register" component={Register} />{' '}
        </Switch>{' '}
      </Router>{' '}
    </div>
  )
}

export default App
