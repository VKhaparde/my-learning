import React from 'react';
import MovieListing from './movieListing';

const MovieListings = (props) => {
  return (
      <table className="movie-table">
        <thead>
          <tr>
            <th>Poster</th>
            <th>Movie Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {
            props.movies.map((movie,index)=>{
                return(
                  <MovieListing key = {index}
                  movie = {movie}/>
                )
            })
          }
        </tbody>
      </table>
  );
}

export default MovieListings;
