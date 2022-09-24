import React from 'react';
import ReactDOM from 'react-dom/client';
import BrusiPropiedades from './BrusiPropiedades';
// React Router Dom
import { BrowserRouter as Router, HashRouter} from 'react-router-dom';
// Css
import './styles/brusiPropiedadesStyles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <BrusiPropiedades />
  </HashRouter>
);
