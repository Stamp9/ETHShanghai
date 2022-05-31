import React from 'react';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';

export default function WelcomePage() {
  return (
    <>
      <div className="home-welcome-page">
        <div className="app-intro">
          <h3>To get started:</h3>
          <ul>
            <li>
              Edit component <code>src/features/home/WelcomePage.js</code> for this page.
            </li>
            <li>
              Edit component <code>src/features/home/App.js</code> for the root container layout.
            </li>
            <li>
              To see examples, access:&nbsp;
              <Link to="/examples">/examples</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
