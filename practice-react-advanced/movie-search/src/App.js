import React from 'react';
import './App.css';
import SearchForm from './components/searchForm';
import MovieListings from './components/movieListings';
import config from './config';
import _ from 'lodash';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearchDebounce = _.debounce(searchString=>{
    let url = `http://www.omdbapi.com/?apikey=${config.apiKey}&s=${searchString}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          console.log(data.Search);
          this.setState({ movies: data.Search })
        }
      })
  },1000)
  handleSearch(searchTerm) {
    this.handleSearchDebounce(searchTerm);
    }

  render() {
    // console.log('Apikey', config.apiKey);
    console.log('movies :', this.state.movies);

    return (
      <div className="App">
        <h1>Movie Search</h1>
        <SearchForm handleSearch={this.handleSearch} />
        <MovieListings movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
