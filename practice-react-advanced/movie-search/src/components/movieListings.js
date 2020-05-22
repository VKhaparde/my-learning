import React from 'react';
import MovieListing from './movieListing';

const MovieListings = (props) => {
  if(!props.movies){
    return(
      <h2 style = {{color : "red"}}>Sorry no movies available!!</h2>
    )
  }
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
