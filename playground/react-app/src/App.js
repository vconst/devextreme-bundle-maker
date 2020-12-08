import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ButtonPage from './Button';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/button/:type' component={ButtonPage}/>
      </Switch>
    </HashRouter>
  );
};

export default App;
