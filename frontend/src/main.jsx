import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './components/ui/provider';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { RecoilRoot } from 'recoil';
// Import your Publishable Key

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Provider>
          <App />
        </Provider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
