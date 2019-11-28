import React from 'react';
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import AddMovie from './components/AddMovie'
import './App.css';

function App() {
  return (
    <div className="App">
      <Filter/>
      <AddMovie addOrEdit={false}/>
      <MovieList />
    </div>
  );
}

export default App;
