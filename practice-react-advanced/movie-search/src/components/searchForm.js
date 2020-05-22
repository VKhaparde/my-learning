import React from 'react';

const SearchForm = (props) =>{
  console.log('props',props)
  return (
    <form className= "search-form">
        <input type= "text" placeholder = "Search a movie" onChange ={(event)=>{
          // console.log(event.target.value);
          props.handleSearch(event.target.value);
        }}/>
    </form>
  );
}
export default SearchForm;
