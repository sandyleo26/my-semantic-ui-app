import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DownloadApplicationModal from './downloadApplicationModal';
import TeamOverview from './teamOverview';

import LayoutTheming from './layoutTheming';
import LayoutSidebar from './layoutSidebar';


const App = () => (
  <Router>
    <Switch>
      <Route exact path='/modal' component={DownloadApplicationModal} />
      <Route exact path='/teamoverview' component={TeamOverview} />
      <Route exact path='/layout-theming' component={LayoutTheming} />
      <Route exact path='/layout-sidebar' component={LayoutSidebar} />

    </Switch>
  </Router>
)

export default App;
