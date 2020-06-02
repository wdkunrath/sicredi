import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import { historyObj } from '@services';
import { userContext } from '.';

const App = () => {
  let user = userContext.Consumer._currentValue;
  return (
    <Router history={historyObj.history}>
      <Routes userContext={user} />
    </Router>
  );
}

export default App;
