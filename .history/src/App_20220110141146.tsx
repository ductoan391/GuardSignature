import React from 'react';
import './App.css';
import Analyze from './components/Analyze/Analyze';
import Contract from './components/Contract/Contract';
import Footer from './components/Footer/Footer';
import Item1 from './components/Item1/Item1';
import Item2 from './components/Item2/Item2';

function App() {
  return (
    <div className="App">
      <Contract />
      <Item1 />
      <Item2 />
      <Analyze />
      <Footer />
    </div>
  );
}

export default App;
