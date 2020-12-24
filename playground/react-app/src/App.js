import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ButtonPage from './Button';
import CheckBoxPage from './CheckBox';
import { DataGridLightPage } from '../../../bundles/react/data_grid_light_page';
import { ComponentNestingPage } from '../../../bundles/react/component_nesting_page';
import { PluginsPage } from '../../../bundles/react/plugins_page';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/button/:type' component={ButtonPage}/>
        <Route path='/check_box/:type' component={CheckBoxPage}/>
        <Route path='/data_grid_light_page' component={DataGridLightPage}/>
        <Route path='/component_nesting_page' component={ComponentNestingPage}/>
        <Route path='/plugins_page' component={PluginsPage}/>
      </Switch>
    </HashRouter>
  );
};

export default App;
