import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from "./components/blog/blog";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Blog />
      </header>
    </div>
  );
}

export default App;
