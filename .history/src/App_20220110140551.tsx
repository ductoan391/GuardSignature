import React from 'react';
import './App.css';
import Analyze from './components/Analyze/Analyze';
import Contract from './components/Contract/Contract';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Contract />
      <Analyze />
      <Footer />
    </div>
  );
}

export default App;
