import React from 'react';
import './App.css';
import LandingPage from './landing-page/landing-page';
import Navigation from './navigation/navigation';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage />
        <Navigation />
      </header>
    </div>
  );
}

export default App;
