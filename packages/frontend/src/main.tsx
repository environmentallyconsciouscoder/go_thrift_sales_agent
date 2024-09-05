import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { Amplify } from "aws-amplify";
import config from "./config.ts";
import { BrowserRouter } from 'react-router-dom';
import { FashionProvider } from './context/FashionContext.tsx';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "api",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
    ],
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FashionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FashionProvider>
  </StrictMode>,
)
