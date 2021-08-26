import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import React, { Fragment, useState, useEffect } from 'react';
import Login from '../containers/login';
import Home from '../containers/home';


function Routes() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setIsAuth(true);
    }
  }, [isAuth])

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
