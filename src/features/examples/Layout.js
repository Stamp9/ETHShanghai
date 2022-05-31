import React from 'react';
import { SidePanel } from './';

export default function Layout({ children }) {
  return (
    <div className="examples-layout">
      <SidePanel />
      <div className="examples-page-container">{children}</div>
    </div>
  );
}
