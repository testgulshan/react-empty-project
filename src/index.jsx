import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';

const mountNode = document.getElementById('app');
export default ReactDOM.render(
  <App />,
  mountNode || document.createElement('div'),
);
