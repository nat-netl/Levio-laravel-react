import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import logo from "./assets/images/logo-liveo.png";
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={(<p>Loading ~~~~</p>)}>
    <React.StrictMode>
      <Router>

          <App />
      </Router>
    </React.StrictMode>
  </Suspense>

);
