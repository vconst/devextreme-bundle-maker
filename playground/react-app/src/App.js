import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ButtonPage from './Button';
import CheckBoxPage from './CheckBox';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/button/:type' component={ButtonPage}/>
        <Route path='/check_box/:type' component={CheckBoxPage}/>
      </Switch>
    </HashRouter>
  );
};

export default App;
