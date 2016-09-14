import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import App from './App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

let rootElement = document.getElementById('app');

render(
      <MuiThemeProvider>
         <App />
      </MuiThemeProvider>,
   rootElement
);
