// import logo from "./logo.svg";
import './App.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import 'upkit/dist/style.min.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />{' '}
          <Route path="/login" component={Login} />{' '}
          <Route path="/register" component={Register} />{' '}
        </Switch>{' '}
      </BrowserRouter>{' '}
    </div>
  )
}

export default App
