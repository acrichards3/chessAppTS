import React, { useReducer } from 'react';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import { reducer, initialState, GlobalContext } from './context/GlobalContext';
import styles from './styles/app/App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.app}>
      <GlobalContext.Provider value={{ state, dispatch }}>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
