import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import React, { Fragment, useState } from 'react';
import Login from '../login/login';
import Home from '../home/home';


function Routes() {
  const [isAuth, setIsAuth] = useState(true);

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

// Basicamente si la variable isAuth es cierta(la que depende de validaciones)
//renderizo el home, caso contrario, seguimos en login
