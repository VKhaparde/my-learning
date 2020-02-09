import React from 'react';
import ReactDOM from 'react-dom';

export default function Blog(props) {
  console.log('props',props);
  const sidebar =

        props.posts.map((post) => {
          <div key={post.id}>{post.title}</div>
        })



  const context = props.posts.map((post) => {
          <div key={post.id}>
            <h3>{post.title}</h3>
            <h5>{post.text}</h5>
          </div>
        })
console.log('sidebar',sidebar);
console.log('context',context);
  return (
    <div>
      {sidebar}
      <hr/>
      {context}
    </div>

  );
}
