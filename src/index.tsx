import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { themeLight } from './config/theme/light';
import { SkeletonTheme } from 'react-loading-skeleton';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <SkeletonTheme baseColor="#f7f7f8" highlightColor="#ededed">
        <App />
      </SkeletonTheme>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
