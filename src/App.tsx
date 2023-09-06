import React from 'react';
import './App.css';
import { MainContextProvider } from './contexts/MainContext';
import { SearchContextProvider } from './contexts/SearchContext';

function App() {
  return (
    <div className="App">
      <MainContextProvider>
        <SearchContextProvider>

        </SearchContextProvider>
      </MainContextProvider>
    </div>
  );
}

export default App;
