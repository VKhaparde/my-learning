import React from 'react';

const MovieListing = (props) => {
  return (
    <React.Fragment>
      <tr>
        <td><img src={props.movie.Poster} /></td>
        <td>{props.movie.Title}</td>
        <td>{props.movie.Year}</td>
      </tr>
    </React.Fragment>
  );
}
export default MovieListing;
