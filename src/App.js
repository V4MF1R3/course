// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ModuleList from './components/ModuleList';
import ResourceUploader from './components/ResourceUploader';
import LinkAdder from './components/LinkAdder';
import './App.css';

function App() {
  const [modules, setModules] = useState([]);

  const addModule = (name) => {
    setModules([...modules, { id: Date.now(), name, resources: [] }]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={
              <>
                <h1>Home</h1>
                <div className="controls">
                  <button onClick={() => addModule('New Module')}>Add Module</button>
                  <ResourceUploader />
                  <LinkAdder />
                </div>
                <ModuleList modules={modules} setModules={setModules} />
              </>
            } />
            <Route path="/modules" element={
              <>
                <h1>Modules</h1>
                <ModuleList modules={modules} setModules={setModules} />
              </>
            } />
            <Route path="/resources" element={
              <>
                <h1>Resources</h1>
                {/* Add components to manage resources here */}
              </>
            } />
            <Route path="/about" element={
              <>
                <h1>About</h1>
                <p>Information about the Course Builder application.</p>
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
