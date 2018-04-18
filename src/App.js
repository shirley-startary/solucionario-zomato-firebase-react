import React, { Component } from "react";
import "./App.css";
import APIContainer from "./components/APIContainer";
import GuestBook from "./components/GuestWall";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import "./firebaseConfig";
import firebase from "firebase";

class App extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  logIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(user => {
        this.setState({ isLoggedIn: true });
      });
  }

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ isLoggedIn: false });
      });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true });
      }
    });
  }

  render() {
    return (
      <div>
        <NavBar
          logIn={this.logIn}
          logOut={this.logOut}
          logInStatus={this.state.isLoggedIn}
        />
        <Switch>
          <Route path="/" exact component={APIContainer} />
          <Route path="/book" component={GuestBook} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
