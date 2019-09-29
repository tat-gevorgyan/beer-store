import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Main from './Main';
import { init } from './Main/actions';

const App = ({ init }) => {
  useEffect(() => {
    init();
    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/' component={Main} />
      </Switch>
    </Router>
  );
};

export default connect(
  null,
  { init },
)(App);
