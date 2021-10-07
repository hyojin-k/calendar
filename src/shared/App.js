import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {history} from '../redux/configstore';

import Calendar from '../pages/Calendar'
import Add from '../pages/Add'

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history = {history}>
        <Route path='/' exact component={Calendar} />
        <Route path='/addplan' exact component={Add}/>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
