import React from 'react';
import ReactDOM from 'react-dom/client';
import BrusiPropiedades from './BrusiPropiedades';
// React Router Dom
import { BrowserRouter as Router} from 'react-router-dom';
// Css
import './styles/brusiPropiedadesStyles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <BrusiPropiedades />
  </Router>
);
