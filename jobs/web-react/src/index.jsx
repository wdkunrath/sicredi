import React from 'react';
import ReactDOM from 'react-dom';
import './config/reactotronConfig';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import {
  BaseService,
  NotificationService,
  SessionService,
  UserTrackingService
} from '@services'

const notificationService = new NotificationService();
const sessionService = new SessionService();

BaseService.enableGlobalErrorHandling(message => notificationService.error(message));
UserTrackingService.enableUserTracking(() => sessionService.userTrackingData);

let user;

export var userContext = React.createContext(user);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
