import React from 'react';
import './App.css';

import Home from './Home';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        "Avengers: Endgame",
        "The Curse Of La Llorona",
        "Breakthrough",
        "Little"
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav-link">Movies</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/movies" render={(props) => (
          <MovieList {...props} movies={this.state.movies} />
          )} />
        {/* <Route path="/movies" component={MovieList}/> */}
        <Route path="/movies/:movie" component={MovieDetail}/>
      </div>
    );

  }
}

export default App;
