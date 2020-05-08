import React from 'react';
import { useState } from 'react';
import uuid from '../../node_modules/uuid/dist/v1';
import NewSongForm from './newSongForm';
import { useEffect } from 'react';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Memory Gospel", id: 1 },
    { title: "The darkness of Wind", id: 2 },
    { title: "Almost Home", id: 3 }
  ]);
  useEffect(() => {
    console.log("UseEffect hook ran for update in songs", songs);
  },[songs]);
const [age,setAge] = useState(20);
useEffect(()=>{
  console.log("UseEffect hook ran for update in age",age);
},[age]);

  const addSong = (songTitle) => {
    setSongs([...songs, { title: songTitle, id: uuid() }]);
  }
  return (
    <div className="song-list">
      <ul>
        {
          songs.map(song => {
            return (
              <li key={song.id}>{song.title}</li>
            );
          })
        }
      </ul>
      <NewSongForm addSong={addSong} />
      <button value = {age} onClick = {(event)=>{
        setAge(age + 1)
      }}>Add 1 to age : {age}</button>
    </div>
  );
}
export default SongList;
