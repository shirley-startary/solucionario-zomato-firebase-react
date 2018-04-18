import React from "react";
import firebase from "firebase";
import Comment from "./GuestBook/Comment";

class GuestBook extends React.Component {
  constructor() {
    super();
    this.state = { messages: [], newCommentValue: "" };
    this.handleChange = this.handleChange.bind(this);
    this.sendToFirebase = this.sendToFirebase.bind(this);
  }
  componentDidMount() {
    let msgRef = firebase.database().ref("/messages");
    msgRef.on("value", snapshop => {
      this.setState({ messages: snapshop.val() });
    });
  }

  handleChange(event) {
    this.setState({ newCommentValue: event.target.value });
  }

  sendToFirebase() {
    let messagesRef = firebase.database().ref("/messages");
    messagesRef.push({ content: this.state.newCommentValue });
  }

  render() {
    console.log(this.state.messages);
    return (
      <div>
        <h1>Aqui va el libro de visitas</h1>
        {/* {this.state.messages.map((msg, index) => {
          return <Comment key={index} content={msg.content} />;
        })} */}
        <h3>Agregar commentario</h3>
        <textarea onChange={this.handleChange} value={this.state.value}>
          {this.state.newCommentValue}
        </textarea>
        <button onClick={this.sendToFirebase}>Enviar</button>
      </div>
    );
  }
}

export default GuestBook;
