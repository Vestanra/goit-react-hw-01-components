import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    background: '#Dbecec',
    backgroundOpacity: '#f5f8f8',
    textTitle: '#161818',
    text: '#5d6f6f',
    table: '#94a6a6',
  },
  shadow: '1px 1px 8px 4px rgba(200, 236, 236, 0.4)',
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
