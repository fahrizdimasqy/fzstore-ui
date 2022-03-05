// import logo from "./logo.svg";
import './App.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import 'upkit/dist/style.min.css'
import Login from './pages/login'

function App() {
  return
  eturn(
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>,
  )
}

export default App
