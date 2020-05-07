import React from 'react';

export default class BookList extends React.Component{
  render(){
    return(
      <div className="book-list">
        <ul>
          <li>The Socerers Stone</li>
          <li>The Magic Kindom</li>
          <li>The Sleeping Beauty and the Demon</li>
        </ul>
      </div>
    );
  }
}
