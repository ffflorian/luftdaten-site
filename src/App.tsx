import React from 'react';

import {Content, Sidebar} from './components/layout/';

const App = () => (
  <div className="docs-container off-canvas off-canvas-sidebar-show">
    <div className="docs-navbar">
      <a className="off-canvas-toggle btn btn-link btn-action" href="#sidebar">
        <i className="icon icon-menu"></i>
      </a>
    </div>
    <div className="docs-sidebar off-canvas-sidebar" id="sidebar">
      <div className="docs-brand">
        <a className="docs-logo" href="/">
          <h2>Luftdaten</h2>
        </a>
      </div>
      <div className="docs-nav">
        <div className="accordion-container">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
    <div className="off-canvas-content">
      <div className="docs-content" id="content">
        <div className="container">
          <Content />
        </div>
      </div>
    </div>
  </div>
);

export default App;
