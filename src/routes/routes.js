import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

//import Login from '../login/login';
import Home from '../home/home';


function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
    </Router>
  );
}
// <Route exact path="/login" component={Login} />

export default Routes;
