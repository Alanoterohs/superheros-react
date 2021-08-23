import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import React, { Fragment, useEffect, useState } from 'react';
import Login from '../login/login';
import Home from '../home/home';


function Routes() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Fragment>
      <Router>
          <Switch>
          { isAuth ?
            (<Route path="/"><Home/></Route>)
            : (<Route path="/"><Login setIsAuth={setIsAuth}/></Route>) }
          </Switch>
      </Router>
    </Fragment>
  );
}

export default Routes;
