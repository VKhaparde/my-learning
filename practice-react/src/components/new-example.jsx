import React from 'react';
export default class NewExample extends React.Component{

  render(){
    function formatName(name) {
      return name.firstName + " " + name.lastName;
    }
    const name = {
      firstName : "Harper",
      lastName : "Perez"
    };

    const element = (
    <div>
        <h1 tabIndex="100">Hello, {formatName(name)}</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
    );
    return (
      <div>
        {element}
        <Welcome name="Ajit Khaparde"/>
        <Comment date= {comment.date} text = {comment.text} author = {comment.author}/>
      </div>
    );
  }
}
function Welcome(props){
  return <h1>Welcome, {props.name}</h1>
}
const comment = {
  date : new Date().toLocaleTimeString(),
  text: "I love learning React",
  author : {
    name: "Harper Perez",
    url:"https://previews.123rf.com/images/almoond/almoond1502/almoond150200035/36944963-spring-background-with-blossom-branch-of-pink-flowers-vector.jpg"
  }
};
function Comment(props){
return (
  <div>
    <div>
      <img src = {props.author.url} height="100px"></img>
      <div>Hello {props.author.name}</div>
      <div>{props.date}</div>
      <div>{props.text}</div>
    </div>
  </div>
);
}
