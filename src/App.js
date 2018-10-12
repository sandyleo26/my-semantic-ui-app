import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DownloadApplicationModal from './downloadApplicationModal';

const App = () => (
  <Router>
    <Switch>
      <Route path='/modal' component={DownloadApplicationModal} />
    </Switch>
  </Router>
)

export default App;
