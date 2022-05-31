import React from 'react';

export default function WelcomePage() {
  return (
    <div className="examples-welcome-page">
      <a href="http://github.com/supnate/rekit">
        <img src={require('../../images/rekit-react.png')} className="app-logo" alt="logo" />
      </a>
      <h1>Welcome to Rekit!</h1>
      <p>
        Contratulations! You have created your Rekit React app successfully! Seeing this page means
        everything works well now.
      </p>
      <p>
        This is an example feature showing about how to layout the container, how to use Redux and
        React Router. If you want to remove all sample code, just delete the feature from Rekit
        Studio. Alternatively you can run&nbsp;
        <code>"rekit remove feature examples"</code> via command line under the project folder.
      </p>
      <p>
        To learn more about how to get started, you can visit:{' '}
        <a href="http://docs.rekit.org/app-types/rekit-react">Get started</a>
      </p>
    </div>
  );
}
