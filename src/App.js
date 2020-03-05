import React from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const styles = {
    color: '#ff8c00',
    backgroundColor: '#ff2d00',
    fontSize: '200px',
  };

  return (
    <div>
      <h1 style={styles}>Good night!</h1>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
