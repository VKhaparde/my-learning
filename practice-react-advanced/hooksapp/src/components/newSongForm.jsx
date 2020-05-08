import React, { useState } from 'react';

const NewSongForm = ({addSong})=>{
  const [title, setTitle] = useState('');

  return(
    <form onSubmit = {(event)=>{
      event.preventDefault();
      addSong(title);
      setTitle('');
    }}>
      <label htmlFor="">Enter Song name :</label>
      <input type="text" value = {title} required
      onChange = {(event)=> setTitle(event.target.value)
      }/>
      <input type="submit" value="Add Song" style = {{backgroundColor : "green"}}/>
    </form>
  );
}

export default NewSongForm;
