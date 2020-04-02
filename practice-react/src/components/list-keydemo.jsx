import React from 'react';

export default class NumberList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItem = numbers.map((number) => {
      return <ListItem key={number.toString()} value={number * 100}></ListItem>
    });
    const sidebar = props.posts.map((post) => {
      <h3 key={post.id}>{post.title}</h3>
    });
    const content = props.posts.map((post) => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <h4>{post.text}</h4>
        </div>
      );
    });
    return (
      <div>
        <ol>{listItem}</ol>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
}
function ListItem(props) {
  return <li>{props.value}</li>
}
