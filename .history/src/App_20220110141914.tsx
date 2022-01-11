import React from 'react';
import './App.css';
import Analyze from './components/Analyze/Analyze';
import Contract from './components/Contract/Contract';
import Footer from './components/Footer/Footer';
import Item1 from './components/Item1/Item1';
import Item2 from './components/Item2/Item2';
import Now from './components/Now/Now';
import Protect from './components/Proctect/Protect';

function App() {
  return (
    <div className="App">
      
      <Contract />
      <Item1 />
      <Item2 />
      <Now />
      <Protect />
      <Analyze />
      <Footer />
    </div>
  );
}

export default App;
