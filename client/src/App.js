import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <div>
        <Link to="/">Movie List</Link>
      </div>

      <div>
        <SavedList list={savedList} />

        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/movies/:id">
          <Movie />
        </Route>
      </div>
    </div>
  );
};

export default App;
