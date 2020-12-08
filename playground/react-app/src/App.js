import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ButtonPage from './Button';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ButtonPage}/>
      <Route path='/button/:type' component={ButtonPage}/>
    </Switch>
    </BrowserRouter>
  );
};

export default App;
