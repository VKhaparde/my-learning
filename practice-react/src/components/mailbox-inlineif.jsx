import React from 'react';

export default class MailBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <h1>Hello,</h1>
        {
          this.props.mail.length > 0 &&
        <h2>You have {this.props.mail.length} unread messages</h2>
        }
      </div>
    );
  }
}
