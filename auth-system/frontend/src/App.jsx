// React
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
