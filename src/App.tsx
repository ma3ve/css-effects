import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeRoute from './views/Home';
import ChangeFullScreenImageOnHover from './views/ChangeFullScreenImageonHover';
import AutumnLeaves from './views/AutumnLeaves';
import './app.css';
function App(): JSX.Element {
  return (
    <Switch>
      <Route
        path="/ChangeFullScreenImageOnHover"
        exact
        component={ChangeFullScreenImageOnHover}
      />
      <Route exact path="/autumnLeaves" component={AutumnLeaves} />
      <Route path="/" component={HomeRoute} />
    </Switch>
  );
}

export default App;
