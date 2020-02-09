import React from 'react';
import ReactDOM from 'react-dom';

export default function Blog(props) {
  console.log('props',props);
  const sidebar = props.posts.map((post) =>
          <h2 key={post.id}>{post.title}</h2>
        );
  const context =

      props.posts.map((post) =>
        <div key={post.id}>
          <h3>{post.title}</h3>
          <h5>{post.text}</h5>
        </div>
      )

 const myCreation = props.posts.map((post)=>
<div key = {post.id}>I love {post.title}</div>
  )

  return (
    <div>
      {sidebar}
      <hr/>
      {context}
      {myCreation}
    </div>
  );
}
