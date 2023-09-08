import React from 'react';
import './App.css';
import { MainContextProvider } from './contexts/MainContext';
import { Weather } from './components/Weather';

function App() {
  return (
    <div className="App">
      <MainContextProvider>
        <Weather/>
      </MainContextProvider>
    </div>
  );
}

export default App;
