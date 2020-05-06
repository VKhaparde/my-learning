import React, { Fragment } from 'react';

export default function FragmentsDemo(props) {
  console.log('props in Fragments Demo', props);
  return (
    <div>
      Hello React Fragments!!!
      <dl>
        {
          props.posts.map((currentVal) => {
            // <ListItem key={currentVal.id} posts={currentVal} />
            <React.Fragment key={currentVal.id}>
              <dt>{currentVal.title}</dt>
              <dd>{currentVal.text}</dd>
            </React.Fragment>
          })
        }
      </dl>
    </div>
  );

}

// function ListItem({posts}) {
//   console.log('Props in ListItem', {posts});
//     return (
//       <React.Fragment >
//         <dt>{posts.title}</dt>
//         <dd>{posts.text}</dd>
//       </React.Fragment>
//     )


// }
