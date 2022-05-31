import React from 'react';

import { Header } from './';
import Connect from "../../requests/connect/connect";

export default function App({ children }) {
  return (
    <div className="home-app">
      <div className="page-container">
        <Header />
        {children}
      </div>
    </div>
  );
}
