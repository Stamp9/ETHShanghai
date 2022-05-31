import React from 'react';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';

export default function WelcomePage() {
  return (
    <>
      <div className="home-welcome-page">
        <div className="app-intro">
          <h1>YOU ARE WHAT YOU READ</h1>
          <ul>
            Welcome to LASTSAND!
            you can simply log in with Ethereum accounts and retrieve the content with OPML NFTs through the feeds.
          </ul>
        </div>
      </div>
    </>
  );
}
