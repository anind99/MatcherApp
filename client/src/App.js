import logo from './logo.svg';
import React from "react";
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.2.0";
import "./assets/demo/demo.css";

import Home from "./views/Home/index.js"
import LoginPage from "./views/Login";
import SurveyPage from "./views/Survey"
import ProfilePage from "./views/Profile";

import firebase from "firebase/app";


// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


class App extends React.Component {

  constructor(props){
    super(props);
    const firebaseConfig = {
      apiKey: "AIzaSyAj3fj1R_fSaFzlCG1LKe5BHjT_eLXKYIo",
      authDomain: "uofthacks-e2896.firebaseapp.com",
      databaseURL: "https://uofthacks-e2896-default-rtdb.firebaseio.com",
      projectId: "uofthacks-e2896",
      storageBucket: "uofthacks-e2896.appspot.com",
      messagingSenderId: "34802703253",
      appId: "1:34802703253:web:748cddb363f8758c0d749c",
      measurementId: "G-H5V38PK0RC"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }else {
      firebase.app(); // if already initialized, use that one
    }
    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(userAuth => {
      if(userAuth){
        localStorage.setItem("user", userAuth.email);
        this.setState({ user: userAuth});
      } else{
        this.setState({user:null})
      }

    });
    console.log(this.state.user)
  };

  render() {
    return (
        <div>
          <BrowserRouter>
            <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
              { /* Each Route below shows a different component depending on the exact path in the URL  */ }
              <Route exact path='/' render={() =>
                  (<Home appState={this}/>)}
              />
              <Route
                  exact path={["/login", "/profile"] /* any of these URLs are accepted. */ }
                  render={ props => (
                      <div>
                        { /* Different components rendered depending on if someone is logged in. */}
                        {this.state.user ? <ProfilePage {...props} app={this} /> : <LoginPage {...props} app={this} />}
                      </div>                   // ... spread operator - provides all of the props in the props object
                  )}
              />
              <Route exact path='/survey' render={props =>
                  (
                      <div >
                        { /* If logged in, continue to survey page, else stay on login page */}
                        {!this.state.user ? <Home {...props} app={this} /> : <SurveyPage {...props} app={this} />}
                      </div>
                  )}/>

            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
