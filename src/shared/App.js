import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {history} from '../redux/configstore';

import Calendar from '../pages/Calendar'


function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history = {history}>
        <Route path='/'exact component={Calendar} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
