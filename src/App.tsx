import React from 'react';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import styles from './styles/app/App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
